import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";



const TripDetailsPage = () => {
    
    const navigate = useNavigate()
    
    
    return (
        <div> 
            <h1>
            DETALHES PAGE
            </h1>
            
            <button onClick={()=>goBack(navigate)}>VOLTAR</button>
        </div>
    )
}

export default TripDetailsPage;