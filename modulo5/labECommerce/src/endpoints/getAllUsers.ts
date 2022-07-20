
import { Request , Response } from "express"
import { connection } from "../data/connection"
import { userSelect } from "../data/sqlFunctions"



export const getAllUsers = async (req:Request, res:Response) => {
    
    try {
        const rere = await userSelect()
        res.status(200).send(rere)
    } 
    
    catch (error:any) {
        console.log(error)
        res.status(400).send(error.message)
        
    }

    }
   
  