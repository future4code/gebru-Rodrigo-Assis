import express  from "express";
import cors from "cors" 
import { Request, Response } from "express";
import { posts } from "./Ex06";

const app = express() 
app.use(express.json())
app.use(cors())



app.get('/posts/:userid', (req: Request, res: Response)=>{

    
    try {

        const id = Number(req.params.userid)
        const filtrado = posts.filter (user => user.userid === id )
        res.status(200).send(filtrado)
       
    }

    catch (error){

    res.status(400).end("Deu Errado")
}

})


app.listen(3003, ()=>{
    console.log("Online")
})