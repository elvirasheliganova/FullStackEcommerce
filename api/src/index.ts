

import express, {Router} from 'express'
import ProductsRouter from './routes/products/index'
const app = express()
const port = 3000


app.get('/', (req:any, res:any) => {
     res.send('Hello World!')
 })

 
 app.use('/products', ProductsRouter)

 app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
