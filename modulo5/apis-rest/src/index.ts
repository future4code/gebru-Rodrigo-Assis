import express from "express";
import cors from "cors";
import { todos } from "./Ex01";
import { filtroType } from "./Ex02";
import { filtroNome } from "./Ex03";


const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("listening on http://localhost:3003");
});

app.get("/todos",todos)
app.get("/filtrotype", filtroType)
app.get("/nomes", filtroNome)


/* a) get 
b) indicaria ?? não entendi */