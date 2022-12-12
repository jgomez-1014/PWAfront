import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navegacion from './partials/Navegacion';
import Footer from './partials/Footer';
import Home from "./components/Home";
import MisPlantas from "./components/Misplantas";
import Tienda from "./components/Tienda";
import Contacto from "./components/Contacto";
import MensajeC from "./components/MensajeC";
import Suscribete from "./components/MensajeC";
import Login from "./components/login";
import "./assets/css/normalize.css"
import "./assets/css/estilos.css"
import "./assets/css/estilos2.css"

function App() {
  return (
    <>
      <Navegacion />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/misplantas" element={<MisPlantas />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/contacto/MensajeC" element={<MensajeC />} />
          <Route path="/suscribete" element={<Suscribete />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;