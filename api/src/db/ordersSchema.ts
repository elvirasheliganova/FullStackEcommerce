import { 
  integer, 
  pgTable, 
  varchar, 
  doublePrecision, 
  timestamp} from "drizzle-orm/pg-core";
  import {createInsertSchema} from 'drizzle-zod'
import { usersTable } from "./usersSchema";
import { productsTable } from "./productsSchema";
import { z } from "zod";


export const ordersTable = pgTable("orders", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  createdAt:timestamp().notNull().defaultNow(),
  status: varchar({length: 50}).notNull().default('New'),
  
  userId: integer()
  .references(() => usersTable.id),
  
});

export const orderItemsTable = pgTable("order_items", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  orderId: integer()
  .references(() => ordersTable.id),
  
  productId: integer()
  .references(() => productsTable.id),
  quantity: integer().notNull(),
  price: doublePrecision().notNull()
  
});

export const insertOrderSchema = createInsertSchema(ordersTable)
.omit({
  id: true as never,
  userId: true,
  status: true,
  createdAt: true
})

export const insertOrderItemSchema = createInsertSchema(orderItemsTable)
.omit({
  id: true as never,
  orderId: true
})
export const insertOrderWithItemsSchema = z.object({
  order: insertOrderSchema,
  items: z.array(insertOrderItemSchema)
})
