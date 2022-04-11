import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";



const CreateTripPage = () => {
    
    const navigate = useNavigate()
    
  
    return (
        <div> 
            <h1>
            PAGINA DE CRIAR VIAGNES
            </h1>
            
            <button onClick={()=>goBack(navigate)}>VOLTAR</button>
        </div>
    )
}

export default CreateTripPage;