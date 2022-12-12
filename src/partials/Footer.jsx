import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

import IconoF from '../assets/iconos/facebook.svg'
import IconoI from '../assets/iconos/instagram.svg'
import IconoT from '../assets/iconos/twitter.svg'

const URL = 'http://localhost:9000/suscribete';

const Footer = () => {

    const [email2, setEmail2] = useState('');

    const navigate = useNavigate();

    const suscriptor = async (e) => {
        e.preventDefault()
        await axios.post(URL, {
            email2: email2
        })
        Swal.fire({
            title: 'Se ha Suscrito Exitosamente a nuestras promociones',
            text: 'Gracias, pronto lo contactaremos',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        })
        navigate('/')
    }

    return (
        <footer className="footer">
            <section className="footer_container container">
                <nav className="nav nav_footer">
                    <h2 className="footer_title">Tienda de Plantas</h2>
                    <ul className="nav_link nav_link_footer">
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
                    </ul>
                </nav>

                <form className="footer_form" onSubmit={suscriptor}>
                    <h2 className="footer_newsletter">
                        Suscribete a nuestras promociones </h2>
                    <div className="footer_input_div">

                        <input
                            value={email2}
                            onChange={(e) => setEmail2(e.target.value)}
                            type='text'
                            className='footer_input'
                            placeholder="Correo Electrónico"
                        />
                    </div>
                    <br />
                    <button
                        type="submit"
                        className="footer_submit"
                        target="blank">
                        Enviar
                    </button>
                </form>
            </section>

            <section className="footer_copy container">
                <div className="footer_social">
                    <Link to="/" className="footer_icons">
                        <img src={IconoF} alt="Facebook" className="footer_icon_img" />
                    </Link>
                    <Link to="/" className="footer_icons">
                        <img src={IconoI} alt="Instagram" className="footer_icon_img" />
                    </Link>
                    <Link to="/" className="footer_icons">
                        <img src={IconoT} alt="Twitter" className="footer_icon_img" />
                    </Link>
                </div>

                <h3 className="footer_copyright">Realizado por: &copy; Jorge Díaz Gómez</h3>
            </section>
        </footer>
    );
}

export default Footer;