import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToAdminHomePage } from "../../routes/coordinator";


const LoginPage = () => {
    const navigate = useNavigate()
    return (
       
    

            <div> 
                <h1>
                PAGINA DE OGIN
                </h1>
                <button onClick={()=>goToAdminHomePage(navigate)}>ENTRAR</button>
                <button onClick={()=>goBack(navigate)}>VOLTAR</button>
            </div>
        )
    
}

export default LoginPage;