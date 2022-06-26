import { Request,Response } from "express"
import { users } from "./Ex01";


export const filtroNome = (req:Request, res:Response) => {
    
    let errorCode = 500;
    try {
        const nome = req.query.name as string
        errorCode = 422
        if (!nome)
        {
            throw new Error ("Digite novamente!!")
        }
        const filtro = users.filter(usuario => usuario.name.toLowerCase() === nome.toLowerCase())
        if (!filtro.length)
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