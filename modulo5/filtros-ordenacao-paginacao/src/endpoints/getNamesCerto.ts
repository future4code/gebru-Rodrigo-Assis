import { errorMonitor } from "events";
import { Request, Response } from "express";
import { selectName } from "./selectNames";



export const getNames = async (req:Request, res:Response ) => {

try {
   const result = await selectName ()
   res.status(200).send(result)
    
} catch (error) {
    console.log(error)
    res.status(400).send(error)
}
}