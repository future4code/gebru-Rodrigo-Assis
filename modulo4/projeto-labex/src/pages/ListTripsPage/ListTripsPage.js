import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToAplicationFormPage } from "../../routes/coordinator.js";


const ListTripsPage = () => {

    const navigate = useNavigate()

   
    return (
        <div> 
            
            <h1>
            LISTA  PAGE OK 
            </h1>
        
        <button onClick={()=>goBack(navigate)}>VOLTAR</button>
        <button onClick={()=>goToAplicationFormPage(navigate)}>INSCREVER-SE</button>
        </div>
    )
}

export default ListTripsPage;