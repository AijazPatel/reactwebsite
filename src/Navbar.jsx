import { logDOM } from '@testing-library/dom';
import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from './images/Logo1.jpg'

const Navbar =()=>{
    return (
        <>

<div className="container-lg bg_nav" >
        <div className="row">
        <div className="col-12 ms-auto"> 



<nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
    <img src={Logo} alt="imgss" />
    </NavLink>
    
    <button className="navbar-toggler" type="button"
     data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" 
    id="navbarSupportedContent">
    
      <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
       
        <li className="nav-item">
          <NavLink exact activeClassName="active_menu" 
          className="nav-link active" 
          aria-current="page" 
          to="/">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink  exact activeClassName="active_menu"
           className="nav-link" to="/About">About us</NavLink>
        </li>

        <li className="nav-item">
          <NavLink   exact activeClassName="active_menu" 
          className="nav-link" to="/Services">Services</NavLink>
        </li>


        <li className="nav-item">
          <NavLink exact activeClassName="active_menu" 
          className="nav-link" to="/Contact">Contact Us</NavLink>
        </li>


      
      
      
      </ul>
     
    </div>
  </div>
</nav>
      </div>
        </div>
        </div> 
</>

    )
}

export default Navbar;