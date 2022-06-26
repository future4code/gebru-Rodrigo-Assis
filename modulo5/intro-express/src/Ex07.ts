import express  from "express";
import cors from "cors" 
import { Request, Response } from "express";
import { posts } from "./Ex06";

const app = express() 
app.use(express.json())
app.use(cors())



app.get('/posts', (req: Request, res: Response)=>{

    try {
res.status(200).send(posts)
}

    catch (error){
    res.status(400).end("Deu Errado")
}

})


app.listen(3003, ()=>{
    console.log("Online")
})
