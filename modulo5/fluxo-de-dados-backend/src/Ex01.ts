
import express from "express";
import app from "./index"
import {Request, Response} from "express"

app.get("/test", (req:Request, res:Response) =>{


     res.send("Testado")



})




