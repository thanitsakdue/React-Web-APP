import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes,BrowserRouter } from "react-router-dom";
import Home from "./Element/Home";
import NavbarComp from "./components/NavbarComp"; 
import Bisection from "./Element/Bisection";
import NewtonRaphson from './Element/NewtonRaphson'
import FalsePosition from './Element/FalsePosition'
import OnePointiteration from './Element/OnePointiteration'
import Gauss from './Element/Gauss'
import Lagrange from './Element/Lagrange'
import Regression from './Element/Regression'
function App() {
  return (
    <div classname ="container" >
      
      
    <NavbarComp/> 
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} /> {/* Redirect from root to Home */}
    <Route path="/Home" element={<Home />} />
    <Route path="/Bisection" element={<Bisection />} />
    <Route path="/FalsePosition" element={<FalsePosition />} />
    <Route path="/Gauss" element={<Gauss />} />
    <Route path="/Lagrange" element={<Lagrange />} />
    <Route path="/Regression" element={<Regression />} />
    <Route path="/OnePointiteration" element={<OnePointiteration />} />
    <Route path="/NewtonRaphson" element={<NewtonRaphson />} />
    
      
     
    </Routes>
  </BrowserRouter>
  

  </div>
  );
}

export default App;