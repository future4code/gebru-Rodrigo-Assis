import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTripsPage, goToLoginPage } from "../../routes/coordinator.js";


export const HomePage = () => {
    const navigate = useNavigate()

    
    return (
        <div> 
            <h1>
            LABEX
            </h1>
        
        <img src="https://aquiviagens.com.br/wp-content/uploads/2020/12/aqui-viagens-foto-home-640x420-3.png"/>
        <button onClick={()=>goToListTripsPage(navigate)}>VIAGENS</button>
        <button onClick={()=>goToLoginPage(navigate)}>ADM</button>
        </div>
    )
}

export default HomePage;