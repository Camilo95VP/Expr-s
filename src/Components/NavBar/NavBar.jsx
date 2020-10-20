import React, { Component } from 'react'
import "../Styles/NavBar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
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
                        <li><a href="/" className="active">Inicio</a></li>
                        <li><a href="/">Nosotros</a></li>
                        <li><a href="/">Servicios</a></li>
                        <li><a href="/">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
