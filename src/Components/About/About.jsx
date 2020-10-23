import React, { Component } from 'react'
import "../Styles/About.css"

export default class About extends Component {
    render() {
        return (
            <div className="container-about">
                <ul><li><a href="#services">Servicios</a></li></ul>
                <h1 id="title1">Por que nosotros</h1>
                   <div className="content-description">
                   <p id="text-description">
                     Tenemos los mejores precios del mercado. Nos adaptamos a su presupuesto
                    <br/>
                     Fumigación para su casa, finca, negocio, restaurante, escuelas, hospitales, etc
                    <br/>
                     Contratos bimestral, trimestral, semestral, anual 
                    <br/>
                     Acompañiamiento durante todo el proceso
                    <br/>
                    <br/>
                   En Exprés Fumigaciones realizamos el control de plagas y desinfestacion con productos
                   piretroides y cipermetrinas de la mejor calidad manejados técnicamente con un grado de
                   toxicidad |||º teniendo un gran poder de acción y residualidad, no afectan la salud de las
                   personas o mascotas; no representan daños para los alimentos, medio ambiente o el
                   mobiliario, son productos inoloros, no visibles y no generan manchas, por lo que no crean
                   incomodidad en su aplicación, contamos con 5 años de experiencia</p>
                   <p id="text-description">Nuestro trabajo incluye el certificado para su establecimiento, garantía del mismo, atención
                    permanente a todas sus necesidades e inquietudes, respectiva capacitación al personal.
                    </p>
                   </div>
            </div>
        )
    }
}
