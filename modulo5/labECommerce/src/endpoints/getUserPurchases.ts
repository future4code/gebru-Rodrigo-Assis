import { Request , Response } from "express"
import { connection } from "../data/connection"
import { purchsesSelect, } from "../data/sqlFunctions"



export const getUserPurchases = async (req:Request, res:Response) => {
    
    try {
        const rere = await purchsesSelect()
        res.status(200).send(rere)
    } 
    
    catch (error:any) {
        console.log(error)
        res.status(400).send(error.message)
        
    }

    }

