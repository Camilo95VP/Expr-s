import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Controlador from "../../images/portadaedit.jpg"
import "../Styles/CarouselControlled.css"
import {Animated} from "react-animated-css";

export default class CarouselControlled extends Component {
    render() {
        return (
            <div className="contenedor">
            
                  {/*<div><h1 id="title"><strong>Tu ambiente, limpio y seguro</strong> </h1></div>*/}
                  <Animated animationIn="bounceIn" animationOut="rubberBand" animationInDuration={1800} animationOutDuration={1800} isVisible={true}>
                  <img id="img1" className="d-block w-100" src={Controlador} alt="First slide"/>
                  </Animated>
            
            </div>
        )
    }
}
