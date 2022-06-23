import {Request, Response} from "express"
import { connection } from "./connection"

//  a)
//  É retornado um array com a informações solicitadas pelo usuario

// b)
export const actors = async (req: Request, res: Response) => {
    
    try {
    const name = req.query.name
    const result = await connection.raw
    (
   `SELECT * from Actor
    WHERE name = "${name}"`
    )
    console.log(result)
res.status(200).send(result[0])
    }

    catch (error) {
        console.log(error)
    }

}

// c)

export const gen = async (req: Request, res: Response) => {
    
    try {
    const gender = req.query.gender
    const result = await connection.raw
    (
   `SELECT COUNT (*) from Actor
    WHERE gender = "${gender}"`
    )
    console.log(result)
res.status(200).send(result[0])
    }

    catch (error) {
        console.log(error)
    }

}
 