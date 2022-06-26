import { Request,Response } from "express"
import { users } from "./Ex01";


export const filtroType = (req:Request, res:Response) => {
    
    let errorCode = 500;
    try {
        const type = req.query.type as string
        errorCode = 422
        if (!type)
        {
            throw new Error ("Digite novamente!!")
        }
        const filtro = users.filter(usuario => usuario.type.toLowerCase() === type.toLowerCase())
        if (filtro.length)
        {
        errorCode = 404
        }
res.send(filtro)
    }
    catch (error:any)
    {
res.status(errorCode).send(error.menssage)
    }

}