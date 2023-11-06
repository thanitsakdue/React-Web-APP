import React from "react";
//import { Nav } from "react-bootstrap";
//import { Link } from "react-router-dom";
//import Navbar from "./components/NavbarComp";
const Home = () => {
  const SpacelStyle = {
    marginTop: '50px', // Adjust the margin-top value to lower the label
    color: 'White',
    textAlign: 'center'
  };
  return (
    <div class="p-3 mb-2 bg-warning text-white"  >
      <h2 style ={SpacelStyle}>Founder :Thanitsak Sakulrutsameehirun </h2>
      <h3 style ={SpacelStyle}> 6504062630138</h3> 
    </div>
  );
};
export default Home;