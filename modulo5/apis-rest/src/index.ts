import express from "express";
import cors from "cors";
import { todos } from "./Ex01";


const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("listening on http://localhost:3003");
});

app.get("/todos",todos)


/* a) get 
b) indicaria ?? não entendi */