import { app } from "./app";
import  selectName  from "./endpoints/selectNames";

app.get("/name", selectName)