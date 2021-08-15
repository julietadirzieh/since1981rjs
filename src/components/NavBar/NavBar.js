import React from 'react';
import "./NavBar.css";

//para importar el logo
import logo from "./logo.png";

const NavBar = () => {
    return (<div><nav>
        <img src={logo} alt="Logo" className="imgLogo" />
        <h1 className="titulo">Since 1981 Textil</h1>
            <a href="#index">Inicio</a>
            <a href="pages/nosotros.html">Nosotros</a>
            <a href="pages/productos.html">Productos</a>
            <a href="pages/preguntasfrecuentes.html">Preguntas Frecuentes</a>
            <a href="pages/contacto.html">Contacto</a>
        </nav>
        </div>
    )
}
export default NavBar;



