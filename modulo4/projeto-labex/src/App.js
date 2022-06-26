import React from "react";
import { BrowserRouter,Routs, Route, Routes } from "react-router-dom";
import ListTripsPage from "./pages/ListTripsPage/ListTripsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import { Router } from "./routes/Router";

const app = () => {
    return (
<div>

<Router/>

</div>
    
);
};
export default app;