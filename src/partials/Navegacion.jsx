import React from "react";
import img1 from "../assets/iconos/menu.svg"
import img2 from "../assets/iconos/close.svg"
import { Link } from "react-router-dom";

import Icono from '../assets/icono.png'

function Navegacion() {
    return (
        <>
            <header className="home">
                <nav className="nav container">
                    <div className="nav_logo">
                        <Link to="/" className="nav_logo_link">
                            <img className="nav_logo_link_img" src={Icono} alt="Icon" />
                        </Link>
                        <h2 className="nav_title">
                            Tienda de Plantas
                        </h2>
                    </div>

                    <ul className="nav_link nav_link-menu">
                        <li className="nav_items">
                            <Link to="/" className="nav_links">Inicio</Link>
                        </li>
                        <li className="nav_items">
                            <Link to="tienda" className="nav_links">Tienda</Link>
                        </li>
                        <li className="nav_items">
                            <Link to="login" className="nav_links">Mis Plantas</Link>
                        </li>
                        <li className="nav_items">
                            <Link to="contacto" className="nav_links">Contacto</Link>
                        </li>

                        <img src={img2} className="nav_close" alt="IconoClose" />
                    </ul>
                    <div className="nav_menu">
                        <img src={img1} className="nav_img" alt="IconoMenu" />
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navegacion;