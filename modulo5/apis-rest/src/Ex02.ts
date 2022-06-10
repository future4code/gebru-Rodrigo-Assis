import { Request,Response } from "express"
import { todos } from "./Ex01";


export const filtroType  = (req:Request, res:Response) => {
    
    let errorCode = 500;
    try {
        const type:string = req.query.type 
        if (!type){
            throw new Error ("Digite novamente!!")
        }
        const filtro = todos.filter(usuario => usuario.type.toLowerCase() === type.toLowerCase())
    }

}