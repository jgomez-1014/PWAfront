import React, { useState } from 'react';
//import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const navigate = useNavigate();

    //const Usuario = async () => {

        if (user === "jorge" || pass === "123") {

            Swal.fire({
                title: 'Ha iniciado sesión Exitosamente ',
                text: 'siga pues',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            })
            navigate('/misplantas')
        }

        return (
            <div>
            <br /><br /><br /><br />
            <section className="contacto">
                
                <section className="conctacto_container container">
                    <h2 className="contacto_title">Escribe tus credenciales
                    </h2>
                    <br />
                    <form className="footer_form" onSubmit={Login}>
                        <div>
                            <input
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                                type='text'
                                className='footer_input'
                                placeholder="Nombre de usuario"
                            />
                            <br />
                            <br />
                            <input
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                                type='text'
                                className='footer_input'
                                placeholder="Correo Electrónico"
                            />
                        
                        </div>
                        <br />
                        <br />
                        <button
                            type="submit"
                            className="footer_submit"
                            target="blank">
                            Enviar
                        </button>
                    </form>
                </section>
            </section>
            <br /><br />
            </div>

        );
    }


    export default Login;
