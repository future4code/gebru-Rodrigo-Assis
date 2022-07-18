
import { Request , Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"



/* export const addUser = async (req:Request, res:Response) => {
    
    
    const result = await connection ("labecommerce_users")
     
    
    const {name, email, password} = req.body 
    

    .insert labecommerce_users ( {name, email, password })
    .values (req.body)



    return result
    }  */