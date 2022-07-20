import { Request, Response } from "express";
import { app } from "./app";
import { getNames } from "./endpoints/getNamesCerto";



app.get("/home",(req: Request,res: Response) => {
    try {
       const user = 
       [{
        name: "pedro",
        idade:"25"
       },
       {
        name: "Ph",
        idade:"29"
       }]
      
       res.status(200).send(user)
       
    } catch (error) {
       console.log(error)
       res.send()
    }
  })


app.get("/name",getNames )