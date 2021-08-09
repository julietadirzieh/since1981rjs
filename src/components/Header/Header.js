import React from 'react';
import "./Header.css";
import logo from "./logo.png";

const Header = () => {
    return (<header>    
        <nav> 
        <img src={logo} alt="Logo" className="imgLogo" />
        <h1 className="titulo">Since 1981 Textil</h1>
        </nav> 
        </header> 
    )
}

export default Header;
