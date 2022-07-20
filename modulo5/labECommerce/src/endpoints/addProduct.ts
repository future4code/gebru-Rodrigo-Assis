import { Request , Response } from "express"
import { insertProduct } from "../data/sqlFunctions"





 export const addProduct = async (req:Request, res:Response) => {
    
    try {

       const id = Math.random().toString()
       const name = req.body.name
       const price = req.body.price
       const image_url = req.body.image_url
       
       
      insertProduct (id,name, price, image_url)

res.status(200).send("Product add")
    } catch (error:any) {
        res.status(400).send(error.message)
    }
   
} 