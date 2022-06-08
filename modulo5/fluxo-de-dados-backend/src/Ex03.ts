import express from "express";
import app from "./index"
import {Request, Response} from "express"
import Produto from "./data"



app.post("/produtos", (req:Request, res:Response)=>{
  try{
      const {id, name, price}:Produto = req.body
  if (!id || !name || !price)}
  catch(error:any){
      res.send(error.message)
  }
}
)