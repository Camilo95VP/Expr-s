import React, { Component } from 'react'
import "../Styles/NavBar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars, faArrowUp, faArrowDown} from "@fortawesome/free-solid-svg-icons"
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import ImgExpres from "../../images/Expressinfondo.png"

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <input type="checkbox" id="check"/>
                    <label htmlFor="check" className="checkbtn">
                        <i> <FontAwesomeIcon icon={faBars} /> </i>
                    </label>
                    <img src={ImgExpres} className="logo" alt="img" ></img>
                    <ul>
                        <li><a href="#home-container" className="active">Inicio</a></li>
                        <li><a href="#about">Nosotros</a></li>
                        <li><a href="#services">Servicios</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </nav>
                <a href="#home-container" className="arrow"><i><FontAwesomeIcon icon={faArrowUp} /> </i> </a>
                <a href="https://api.whatsapp.com/send?phone=573052526997&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20." className="float" target="_blank">
                <i> <FontAwesomeIcon icon={faWhatsapp} /> </i></a>
                <a href="#footer" className="arrow-down"><i><FontAwesomeIcon icon={faArrowDown} /> </i> </a>
            </div>
        )
    }
}
