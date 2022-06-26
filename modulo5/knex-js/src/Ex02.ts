import {Request, Response} from "express"
import { connection } from "./connection"


  export const addMoney = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { salary } = req.body;
    
    try {
        await connection("Actor")
            .update({
                salary,
            })
            .where({
                id
            });
        res.send("Ok");
    } catch(e) {
        console.error({e});
        return res.status(500).send("Algo deu errado.");
    }
};

// app.delete('/actor/:id', async (req, res) => {
//     // const id = req.params.id;
//     // const { id } = req.params;

//     try {
//         await connection("Actor")
//             .delete()
//             .where({
//                 id: req.params.id
//             });
//         res.send("Ok");
        
//     } catch(e) {
//         console.error({e});
//         return res.status(500).send("Algo deu errado.");
//     }
// });