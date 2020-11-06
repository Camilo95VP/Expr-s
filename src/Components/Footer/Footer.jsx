import React, { Component } from 'react'
import "../Styles/Footer.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook,faInstagram,faGoogle} from "@fortawesome/free-brands-svg-icons";
import firma from "../../images/firma.jpg"

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">           
               <div className="container" id="icons-container">
               <span className="icons-font">
                    <a href="https://www.facebook.com/expresfumigaciones/"><FontAwesomeIcon id="iconn-facebook" icon={faFacebook} /></a>
                    <a href="https://www.instagram.com/expresfumigaciones/"><FontAwesomeIcon id="iconn-instagram" icon={faInstagram} /></a>
                    <a href="/"><FontAwesomeIcon id="iconn-google"icon={faGoogle} /></a>
               </span>
               </div>
            <div className="content" id="text-container">
                    <img src={firma} alt="im" id="firma"/>
                    <p id="text1">Exprés Fumigaciones ~ Todos los derechos reservados</p>
                    <p id="text2">2020 © | Medellin-Antioquia</p>
               </div> 
            </footer>
        )
    }
}
