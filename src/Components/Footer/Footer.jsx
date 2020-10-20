import React, { Component } from 'react'
import "../Styles/Footer.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook,faInstagram,faGoogle} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">           
               <div className="container" id="icons-container">
               <span className="icons-font">
                    <a href="https://www.facebook.com/expresfumigaciones/"><FontAwesomeIcon id="icon-facebook" icon={faFacebook} /></a>
                    <a href="https://www.instagram.com/expresfumigaciones/"><FontAwesomeIcon id="icon-instagram" icon={faInstagram} /></a>
                    <a href="/"><FontAwesomeIcon id="icon-google"icon={faGoogle} /></a>
               </span>
               </div>
            <div className="content" id="text-container">
                    <p id="text1">Exprés Fumigaciones - Todos los derechos reservados</p>
                    <p id="text2">2020 | Medellin-Antioquia</p>
               </div> 
            </footer>
        )
    }
}
