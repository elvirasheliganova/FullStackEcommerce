import{ Router } from 'express'
import { createOrder } from './orderController'
import { validateData } from '../../middlewares/validationMiddleware'
import { insertOrderWithItemsSchema } from '../../db/ordersSchema'
import verifyToken from '../../middlewares/authMiddleware'

const router = Router()

router.post('/', verifyToken, validateData(insertOrderWithItemsSchema), createOrder)

export default router