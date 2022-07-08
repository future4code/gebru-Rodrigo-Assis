import { Request, Response } from "express";
import { connection } from "../data/connection";



export const selectName = async () => {
const result = await connection ("Actor")
.select ("*") 
return result
}
export const getNames = async (req:Request, res:Response ) => {

    try {
       const result = await selectName ()
       res.status(200).send(result)
        
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
    }