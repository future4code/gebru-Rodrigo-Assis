
import { Request , Response } from "express"
import { connection } from "../data/connection"
import { productSelect } from "../data/sqlFunctions"




export const getAllProducts = async (req:Request, res:Response) => {
    
    try {
        const rere = await productSelect ()
        
        res.status(200).send(rere)
    } 
    
    catch (error:any) {
        console.log(error)
        res.status(400).send(error.message)
        
    }

    }