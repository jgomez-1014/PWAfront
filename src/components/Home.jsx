import React from 'react';
import { Link } from "react-router-dom";

import IconoGota from "../assets/iconos/gota.svg"
import IconoHoja from "../assets/iconos/hoja.svg"
import IconoMano from "../assets/iconos/mano.svg"
import Planta1 from "../assets/images/planta1.jpg"
import Planta2 from "../assets/images/planta2.jpg"
import Planta3 from "../assets/images/planta3.jpg"


function Home() {
    return (
        <>
            
            <section className="home2">
                <section className="home_container container">
                    <h1 className="home_title">Bienvenidos a la mejor tienda de Plantas</h1>
                    <p className="home_paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates veritatis
                        consectetur aliquam harum sapiente recusandae non eligendi delectus numquam quasi. Nisi quae dignissimos
                        odit, temporibus fugit soluta ipsa similique suscipit.</p>
                    <Link to="#promos" className="btn">!Ver promociones!</Link>
                </section>
            </section>

            <main>
                <section className="container tips">
                    <h2 className="title_tips">Estos son los consejos del dia</h2>
                    <div className="tips_main">

                        <article className="tips_icons">
                            <img src={IconoGota} alt="iconoGotaHome" className="tips_icon_svg" />
                            <h3 className="tips_subtitle">Riego</h3>
                            <p className="tips_paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellat
                                culpa iste odit reiciendis explicabo dolore dolor asperiores similique odit reiciendis explicabo
                                dolore dolor asperiores similique.</p>
                        </article>

                        <article className="tips_icons">
                            <img src={IconoHoja} alt="IconoHojaHome" className="tips_icon_svg" />
                            <h3 className="tips_subtitle">Sustratos</h3>
                            <p className="tips_paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellat
                                culpa iste odit reiciendis explicabo dolore dolor asperiores similique odit reiciendis explicabo
                                dolore dolor asperiores similique.</p>
                        </article>

                        <article className="tips_icons">
                            <img src={IconoMano} alt="IconoManoHome" className="tips_icon_svg" />
                            <h3 className="tips_subtitle">Cuidados</h3>
                            <p className="tips_paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellat
                                culpa iste odit reiciendis explicabo dolore dolor asperiores similique odit reiciendis explicabo
                                dolore dolor asperiores similique.</p>
                        </article>
                    </div>
                </section>

                <section className="fondopromos">
                    <section className="promos container" id="promos">
                        <h2 className="title">Te presentamos las ofertas semanales</h2>
                        <div className="promos_table">

                            <div className="promo_element">
                                <h4 className="promo_name">Planta 1</h4>
                                <h3 className="promo_price">Ahora por $300</h3>
                                <img className="promo_image" src={Planta1} alt="Planta1Home" />
                                <div className="promo_items">
                                    <h4 className="promo_detalles promo_detalles_bef">Antes $500</h4>
                                    <p className="promo_detalles">Planta para interiores</p>
                                    <h6 className="promo_detalles">Envios a todo el pais</h6>
                                </div>
                                <Link to="#promos" class="promo_btn">!Comprar!</Link>
                            </div>

                            <div className="promo_element promo_element_best">
                                <h4 className="promo_name">Planta 2</h4>
                                <h3 className="promo_price">Ahora por $150</h3>
                                <img className="promo_image" src={Planta2} alt="Planta2Home" />
                                <div className="promo_items">
                                    <h4 className="promo_detalles promo_detalles_bef">Antes $500</h4>
                                    <p className="promo_detalles">Planta para interiores</p>
                                    <h6 className="promo_detalles">Envios a todo el pais</h6>
                                </div>
                                <a href="#promos" class="promo_btn">!Comprar!</a>
                            </div>

                            <div class="promo_element">
                                <h4 class="promo_name">Planta 3</h4>
                                <h3 class="promo_price">Ahora por $250</h3>
                                <img class="promo_image" src={Planta3} alt="Planta3Home" />
                                <div class="promo_items">
                                    <h4 class="promo_detalles promo_detalles_bef">Antes $400</h4>
                                    <p class="promo_detalles">Planta para interiores</p>
                                    <h6 class="promo_detalles">Envios a todo el pais</h6>
                                </div>
                                <a href="#promos" class="promo_btn">!Comprar!</a>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
            <br />
        </>
    );
}

export default Home;