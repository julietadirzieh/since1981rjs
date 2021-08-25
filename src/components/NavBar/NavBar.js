import React from 'react';
import "./NavBar.css";
import { Link } from 'react-router-dom';

//para importar el logo
import logo from "./logo.png";

//para importar los componentes
import CartWidget from '../../components/CartWidget/CartWidget';

const NavBar = () => {
    return (<header>
        <Link to='/'>
            <img src={logo} alt="Logo" className="imgLogo" />
            <h1 className="titulo">Since 1981 Textil</h1>
        </Link>
        <nav>
            <ul>
                <Link className="Link" activeClassName="activeLink" exact to="/">
                    <li> Home</li>
                </Link>
                <Link className="Link" activeClassName="activeLink" to="/about">
                    <li> About</li>
                </Link>
                <Link className="Link" activeClassName="activeLink" to="/FAQs">
                    <li> FAQs</li>
                </Link>
                <Link className="Link" activeClassName="activeLink" to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
        <Link to='/category/LISAS'><li>Lisas</li></Link>
        <Link to='/category/ESTAMPADAS'><li>Estampadas</li></Link>
        <CartWidget className="CartColor" />
    </header>
    )
}
export default NavBar;



