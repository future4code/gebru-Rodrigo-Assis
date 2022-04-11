import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";



const AplicationFormPage = () => {
    
    const navigate = useNavigate()
    
  
    return (
        <div> 
            <h1>
            INSCREVA-SE PARA UMA VIAGEM
            </h1>
            
            <button onClick={()=>goBack(navigate)}>VOLTAR</button>
        </div>
    )
}

export default AplicationFormPage;