import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";



const AdminHomePage = () => {
    
    const navigate = useNavigate()
    
    
    return (
        <div> 
            <h1>
            ADM PAGE LOGIN
            </h1>
            
            <button onClick={()=>goBack(navigate)}>VOLTAR</button>
        </div>
    )
}

export default AdminHomePage;