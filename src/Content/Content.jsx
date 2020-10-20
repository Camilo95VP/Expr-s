import React, { Component } from 'react'
import About from '../Components/About/About'
import CarouselControlled from '../Components/Carousel/CarouselControlled'
import Contact from '../Components/Contact/Contact'
import NavBar from '../Components/NavBar/NavBar'
import Services from '../Components/Services/Services'
import swal from 'sweetalert';
import Footer from '../Components/Footer/Footer'

export default class Content extends Component {
componentDidMount(){
    swal({
        title: "Hola,",
        text: "Bienvenid@ a Exprés Fumigaciones, puedes solicitar información o agendar cualquier servicio a través nuestro botón de WhatsApp",
        icon: "success",
        button: "Gracias!",
      });
}

    render() {
        return (
        <div id="home-container">
            <div id="Nav">
                <NavBar/>
            </div>
            <div id="carousel">
                <CarouselControlled/>
            </div>
            <div id="about">
                <About/>
            </div>
            <div id="services">
                <Services/>
            </div>
            <div id="contact">
                <Contact/>
            </div>
            <div id="footer">
                <Footer/>
            </div>
        </div>
      )
    }
}
