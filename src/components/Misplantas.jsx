/* eslint-disable no-sequences */
import React from "react";
import IMG from "../assets/images/planta1.jpg"
import IMG2 from "../assets/images/planta2.jpg"
import IMG3 from "../assets/images/planta4.jpg"

const Tienda = () => {

    return (
        <>
            <section className="fondomisplantas">
                <section className="misplantas container">
                    <h2 className="title">Estas son las Plantas que has adquirido en nuestra tienda</h2>
                    <div className="misplantas_table">

                        <div className="misplantas_element">
                            <h4 className="misplantas_name">Planta 01</h4>
                            <h3 className="misplantas_price">Nombre</h3>
                            <img className="misplantas_image" src={IMG} alt="Miplanta1" />
                            <div className="misplantas_items">
                                <p className="misplantas_detalles">Planta para interiores</p>
                                <h6 className="misplantas_detalles">Fecha Compra: 01/01/2022</h6>
                            </div>
                        </div>

                        <div className="misplantas_element">
                            <h4 className="misplantas_name">Planta 22</h4>
                            <h3 className="misplantas_price">Nombre</h3>
                            <img className="misplantas_image" src={IMG2} alt="Miplanta2" />
                            <div className="misplantas_items">
                                <p className="misplantas_detalles">Planta para interiores</p>
                                <h6 className="misplantas_detalles">Fecha Compra: 01/01/2022</h6>
                            </div>
                        </div>

                        <div className="misplantas_element">
                            <h4 className="misplantas_name">Planta 33</h4>
                            <h3 className="misplantas_price">Nombre</h3>
                            <img className="misplantas_image" src={IMG3} alt="Miplanta2" />
                            <div className="misplantas_items">
                                <p className="misplantas_detalles">Planta para interiores</p>
                                <h6 className="misplantas_detalles">Fecha Compra: 01/01/2022</h6>
                            </div>
                        </div>
                    </div>
                </section>
            </section >
            
        </>
    )
}

export default Tienda;
