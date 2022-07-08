
import { Request , Response } from "express"
import { connection } from "../data/connection"




export const getAllUsers = async (req:Request, res:Response) => {
    const result = await connection ("labecommerce_users")
    .select ("*") 
    return result
    }
    