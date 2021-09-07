import React from 'react';
import "./NavBar.css";
import logo from "./logo.png";
import { Link } from 'react-router-dom';
import { CartWidget } from '../../components/CartWidget/CartWidget';

export const NavBar = () => {
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
};




