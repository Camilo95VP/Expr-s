import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Controlador from "../../images/controladorrr.jpg"
import "../Styles/CarouselControlled.css"

export default class CarouselControlled extends Component {
    render() {
        return (
            <>
            <div className="container">
                  <div><h1 id="title"><strong>Tu ambiente, limpio y seguro</strong> </h1></div>
                  <img id="img1" className="d-block w-100" src={Controlador} alt="First slide"/>
            </div>
            </>
        )
    }
}
