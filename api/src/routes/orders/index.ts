import{ Router } from 'express'
import { createOrder, getOrder, listOrders, updateOrder } from './orderController'
import { validateData } from '../../middlewares/validationMiddleware'
import { insertOrderWithItemsSchema, updateOrdersSchema } from '../../db/ordersSchema'
import verifyToken from '../../middlewares/authMiddleware'

const router = Router()

router.post('/', verifyToken, validateData(insertOrderWithItemsSchema), createOrder)

router.get('/', verifyToken, listOrders)

router.get('/:id', verifyToken, getOrder)

router.put('/:id', verifyToken, validateData(updateOrdersSchema), updateOrder)

export default router