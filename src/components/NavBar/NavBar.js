import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';

//para importar el logo
import logo from "./logo.png";

//para importar los componentes
import CartWidget from '../../components/CartWidget/CartWidget';

const NavBar = () => {
    return (
        <header>
            <Link to='/'>
                <img src={logo} alt="Logo" className="imgLogo" />
                <h1 className="titulo">Since 1981 Textil</h1>
            </Link>
            <nav>
                <ul>
                    <Link className="sectionLink" activeclassname="activeLink" to="/">
                        <li>Inicio</li>
                    </Link>
                    <Link className="sectionLink" activeclassname="activeLink" to="/about">
                        <li>Nosotros</li>
                    </Link>
                    <Link className="sectionLink" activeclassname="activeLink" to="/FAQs">
                        <li>Preguntas Frecuentes</li>
                    </Link>
                    <Link className="sectionLink" activeclassname="activeLink" to="/contact">
                        <li>Contacto</li>
                    </Link>
                </ul>
            </nav>
            <div className="categoriesSection">
                <h5>Filtrar por categoría:</h5>
                <ul>
                    <Link to='/category/LISAS' className="categoriesLink">
                        <li>Telas lisas</li>
                    </Link>
                    <Link to='/category/ESTAMPADAS' className="categoriesLink">
                        <li>Telas estampadas</li>
                    </Link>
                </ul>
                <CartWidget className="CartWidget" />
            </div>
        </header>
    )
}

export default NavBar;



