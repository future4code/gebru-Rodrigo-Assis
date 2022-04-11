import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import HomePage from "../pages/HomePage/HomePage";
import AplicationFormPage from "../pages/ApplicationFormPage/AplicationFormPage";
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage";
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage";

export const Router = () => {
   return(

<BrowserRouter>      

<Routes>
   
   <Route index element = {<HomePage/>}/>
   <Route path="ListTripsPage" element = {<ListTripsPage/>}/>
   <Route path="LoginPage" element = {<LoginPage/>}/>
   <Route path="AplicationFormPage" element = {<AplicationFormPage/>}/>
   <Route path="AdminHomePage" element = {<AdminHomePage/>}/>
   <Route path="TripDetailsPage" element = {<TripDetailsPage/>}/>
      
</Routes>
      
</BrowserRouter>

   ) 
}


   

       
