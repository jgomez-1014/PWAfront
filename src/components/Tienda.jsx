/* eslint-disable no-sequences */
import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const Tienda = () => {

    const [plantas, setPlantas] = useState([]);

    //const URL = 'http://localhost:9000/tienda';
    const URL = 'https://pwaback-production.up.railway.app/tienda';

    const getPlantas = async () => {
        try {
            const { data } = await axios.get(URL);
            setPlantas(data.planta);
            console.log(data.planta);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPlantas()
    }, [])

    return (

        <>
            <section className="fondotienda">
                <section className="tienda container">
                    <h2 className="tienda_title" id="title">Estas son las plantas publicadas hoy, que tengas suerte:</h2>
                    <div className="tienda_table">

                        {plantas.map((planta) => (
                            
                            <div className="tienda_element" key={planta._id}>

                                <h4 className="tienda_name">{planta.nombreT}</h4>

                                <h3 className="tienda_price">Precio: {planta.precioT}</h3>

                                <img className="tienda_image" src={planta.imgT} alt="imagenCard" width="200"
                                    height="200" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice"
                                    focusable="false" />

                                <div className="tienda_items">
                                    <p className="tienda_detalles">{planta.detalleT}</p>
                                    <h6 className="tienda_detalles">fecha: {planta.fechaT}</h6>
                                    <Link to="" className="tienda_btn">!La Quiero!</Link>
                                </div>

                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </>
    )
}

export default Tienda;

