
import { Request , Response } from "express"
import { connection } from "../data/connection"




export const getAllProducts = async (req:Request, res:Response) => {
    const result = await connection ("labecommerce_products")
    .select ("*") 
    return result
    }