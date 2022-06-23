import { app } from "./app"
import {Request, Response} from "express"
import { actors, gen }  from "./Ex01"
import { addMoney } from "./Ex02"

app.get("/actor/", actors)

app.get("/gender/", gen)

app.put("/addSalary/:id", addMoney)


