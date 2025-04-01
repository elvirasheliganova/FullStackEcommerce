

import express, {json, urlencoded} from 'express'
import ProductsRouter from './routes/products/index'


const app = express()

app.use(urlencoded({extended: false}))
app.use(json())
const port = 3000


app.get('/', (req:any, res:any) => {
     res.send('Hello World!')
 })

 
 app.use('/products', ProductsRouter)

 app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
