import { Request, Response } from "express"

export  function listProducts (req: Request, res: Response)  {
  res.send('The list of products')
 }

 export  function getProductById (req: Request, res: Response)  {
  res.send('get Product')
 }

 export  function createProduct (req: Request, res: Response)  {
  res.send('create Product')
 }

 export  function updateProduct (req: Request, res: Response)  {
  res.send('update Product')
 }

 export  function deleteProduct (req: Request, res: Response)  {
  res.send('delete Product')
 }