
import { Request , Response } from "express"
import { connection } from "../data/connection"




export const getUserPurchases = async (req:Request, res:Response) => {
    const result = await connection ("labecommerce_purchases")
    .select ("*") 
    return result
    }