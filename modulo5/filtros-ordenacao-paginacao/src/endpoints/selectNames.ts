import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function selectName():Promise<any> {
    const result = await connection.raw(`
       SELECT name
       FROM aula48_exercicio;
    `)
 
    return result[0]
 }