import { Request, Response } from "express"
import {eq} from 'drizzle-orm'
import { db } from "../../db/index.js"
import { orderItemsTable, ordersTable } from "../../db/ordersSchema"

export async function createOrder(req: Request, res: Response) {
  try
  {
const { order, items }= req.cleanBody
const userId = req.userId

if(!userId) {
  res.status(400).json({message: 'Invalid order data'})
}
const [newOrder] = await db
.insert(ordersTable)
.values({userId: userId})
.returning()

const orderItems = items.map((item:any) => ({
  ...item,
  orderId: newOrder.id

}))

const newOrderItems = await db
.insert(orderItemsTable)
.values(orderItems)
.returning()
res.status(201)
.json({...newOrder, items: newOrderItems})

  } catch(e) {
res.status(400)
.json({message: 'Invalid order data'})
  }
}
//if req.role is admin, return all orders
//if req.role is seller, return orders by sellerId
//else i, return orders filtered by req.userId
export async function listOrders(req: Request, res: Response) {
  try {
    const orders = await db.select().from(ordersTable)
    res.json(orders)

  } catch(error) {
    res.status(500).send(error)
  }
}

export async function getOrder(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id)

    const orderWithItems = await db
    .select()
    .from(ordersTable)
    .where(eq(ordersTable.id, id))
    .leftJoin(orderItemsTable, eq(ordersTable.id, orderItemsTable.orderId))

    if(orderWithItems.length === 0) {
    res.status(404).send({message: 'Order not found'})
     }
     const mergedOrder = {
      ...orderWithItems[0].orders,
      items: orderWithItems.map((oi) => oi.order_items),
     }
    
     res.status(200).json(mergedOrder)

  } catch(error) {
    res.status(500).send(error)
  }
}

export async function updateOrder(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id)

    const [updatedOrder] = await db
    .update(ordersTable)
    .set(req.body)
    .where(eq(ordersTable.id, id))
    .returning()

    if(!updateOrder) {
    res.status(404).send({message: 'Order not found'})
     }else {
      res.status(200).json(updatedOrder)
     }
     
  } catch(error) {
    res.status(500).send(error)
  }
}

