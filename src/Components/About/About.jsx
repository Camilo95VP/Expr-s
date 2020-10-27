import React, { Component } from 'react'
import "../Styles/About.css"
import {Animated} from "react-animated-css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHandHoldingUsd, faHandshake, faHouseDamage, faPencilAlt, faPeopleCarry } from "@fortawesome/free-solid-svg-icons"

export default class About extends Component {

    render() {
        return (
            <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            <div className="container-about">
                 
                <ul><li><a href="#services">Servicios</a></li></ul>
                <h1 id="title1">Por que nosotros</h1>
                
                   <div className="content-description">
                   
                   <p id="text-description">
                    <FontAwesomeIcon icon={faHandHoldingUsd}/> Tenemos los mejores precios del mercado. Nos adaptamos a su presupuesto
                    <br/>
                    <FontAwesomeIcon icon={faHouseDamage}/> Fumigación para su casa, finca, negocio, restaurante, escuelas, hospitales, etc
                    <br/>
                    <FontAwesomeIcon icon={faPencilAlt}/> Contratos bimestral, trimestral, semestral, anual 
                    <br/>
                    <FontAwesomeIcon icon={faPeopleCarry}/> Acompañiamiento durante todo el proceso
                    <br/>
                    <FontAwesomeIcon icon={faHandshake}/> Certificados para hacer el control de plagas
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
            </Animated>
        )
    }
}
