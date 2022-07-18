
import { Request , Response } from "express"
import { insertUser } from "../data/sqlFunctions"




 export const addUser = async (req:Request, res:Response) => {
    
    try {
       
       const name = req.body.name
       const email = req.body.email
       const password = req.body.password
       const id = Math.random().toString()
       
       insertUser(id,name, email, password)

res.status(200).send("User create")
    } catch (error:any) {
        res.status(400).send(error.message)
    }
   
} 