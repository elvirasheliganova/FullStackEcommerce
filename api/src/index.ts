

import express, {json, urlencoded} from 'express'
import productsRouter from './routes/products/index.js'
import authRoutes from './routes/auth/index.js'
import ordersRoutes from './routes/orders/index.js'
import serverless from 'serverless-http'

const app = express()

app.use(urlencoded({extended: false}))
app.use(json())
const port = 3000


app.get('/', (req:any, res:any) => {
     res.send('Hello World!')
 })

 
 app.use('/products', productsRouter)
 app.use('/auth', authRoutes)
 app.use('/orders', ordersRoutes)

 if (process.env.NODE_ENV === "dev")

 {app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})}

export const handler = serverless(app)