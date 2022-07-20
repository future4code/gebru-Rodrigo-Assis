
import { Request , Response } from "express"
import { connection } from "../data/connection"
import { InsertUserPurchases, priceSelect, productSelect } from "../data/sqlFunctions"
import { addProduct } from "./addProduct"




export const addUserPurchases = async (req:Request, res:Response) => {
    
    try {

        
        const user_id = req.body.user_id
        const product_id = req.body.product_id
        const quantity = req.body.quantity
        const id = Math.random().toString()
        
        const product = await priceSelect (product_id)
        const price = product[0].price
        const soma = quantity * price
        
        const total_price = soma
        
        await InsertUserPurchases  ( user_id, product_id, quantity,total_price)
        
        res.status(200).send("Comprado")
    } 
    
    catch (error:any) {
        console.log(error)
        res.status(400).send(error.message)
        
    }

    }