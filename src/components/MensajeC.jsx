import { Link } from "react-router-dom";


function ContactoConfirmacion() {
    
    return (
        <>
        <br /><br />
            <section class="mapa container">
                <div class="mapa_texto">
                    <h1>Hola, bienvenido a: <h2 class="mapa_title"> Tienda de Plantas</h2></h1>
                    <p class="mapa_detalle">Te has suscrito a nuestras promociones</p>
                    <br />
                    <Link to="/">
                        <button class="contacto_btn">Volver al inicio</button>
                    </Link>
                </div>
            </section>
            <br /><br />
        </>
    );
}

export default ContactoConfirmacion;





