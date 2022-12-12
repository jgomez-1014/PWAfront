/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//import Swal from 'sweetalert2';

const URL = 'http://localhost:9000/contacto';

const Contacto = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const navigate = useNavigate();

    const postContacto = async (e) => {
        e.preventDefault()
        await axios.post(URL, {
            nombre: nombre,
            email: email,
            mensaje: mensaje
        })
        
        /* Swal.fire({
            title: 'Contacto Creado Exitosamente',
            text: 'Gracias, pronto lo contactaremos',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        }) */
        navigate('MensajeC')
    }

    return (
        <div>
            <section className="mapa container">

                <div className="mapa_texto">
                    <h2 className="mapa_title">Visita La Tienda de Plantas</h2>
                    <p className="mapa_detalle">Avenida General las Heras 3800, Ciudad Autonoma de Buenos Aires, Argentina</p>
                    <p className="mapa_detalle">CP: 1425</p>
                </div>

                <div class="mapa_figure">

                    <iframe className="mapa_mapa"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.875803447232!2d-58.41580168494848!3d-34.58200898046517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb57ecc2c6a8f%3A0x9194ba95832e0ccb!2sAv.%20Gral.%20Las%20Heras%203858%2C%20C1428ATP%20CABA!5e0!3m2!1ses!2sar!4v1649121033923!5m2!1ses!2sar"
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

            </section>

            <section className="contacto">

                <section className="conctacto_container container">

                    <h2 className="contacto_title">Dejanos tu consulta o comentario
                    </h2>

                    <form onSubmit={postContacto}>

                        <div className="contacto_input_div">
                            <label className="contacto_label">Nombre: </label>
                            <input
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                type='string'
                                className='contacto_input'
                                placeholder="Nombre"
                            />

                            <label className="contacto_label">Correo Electrónico: </label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="string"
                                placeholder="Email:"
                                className="contacto_input"
                            />

                            <label className="contacto_label">Escribenos tu consulta: </label>
                            <textarea
                                value={mensaje}
                                onChange={(e) => setMensaje(e.target.value)}
                                type="string"
                                className="contacto_textarea"
                                placeholder="..."
                                cols="30"
                                rows="10">
                            </textarea>

                            <button
                            type="submit"
                            value="submit"
                            className="contacto_btn"
                            target="blank">
                            Enviar
                            </button>
                        
                        </div>
                        
                    </form>
                </section>
            </section>

        </div>
    )
}

export default Contacto;
