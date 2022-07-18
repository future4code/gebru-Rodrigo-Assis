import { app } from "./app";
import { addProduct } from "./endpoints/addProduct";
import { addUserPurchases } from "./endpoints/addPurchases";
import { addUser } from "./endpoints/addUser";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUserPurchases } from "./endpoints/getUserPurchases";

app.get("/teste", (req, res) => {
    res.send('index funcionando')
    })


    app.get ("/users", getAllUsers)
    app.get ("/products", getAllProducts)
    app.get ("/users/:user_id/purchases", getUserPurchases )
    app.post ("/users", addUser)
    app.post ("/products", addProduct)
 app.post ("/purchases", addUserPurchases)
