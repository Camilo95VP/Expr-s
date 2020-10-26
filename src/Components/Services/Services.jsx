import React, { Component } from 'react'
import "../Styles/Services.css"
import plagas from "../../images/plagas.jpg"
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap"
import "bootstrap/dist/css/bootstrap.css"

export default class Services extends Component {
    state={
        open: false,
    }

    openModalcucarachas= () =>{
        this.setState({opencucarachas: !this.state.opencucarachas})
    }

    openModalcomejen= () =>{
        this.setState({opencomejen: !this.state.opencomejen})
    }

    openModalroedores= () =>{
        this.setState({openroedores: !this.state.openroedores})
    }

    openModaldesinfeccion= () =>{
        this.setState({opendesinfeccion: !this.state.opendesinfeccion})
    }

    openModalresidencial= () =>{
        this.setState({openresidencial: !this.state.openresidencial})
    }
    openModalcomercial= () =>{
        this.setState({opencomercial: !this.state.opencomercial})
    }
    openModalindustrial= () =>{
        this.setState({openindustrial: !this.state.openindustrial})
    }
    openModalhoteles= () =>{
        this.setState({openhoteles: !this.state.openhoteles})
    }

    render() {
        return (
            <>
            
                <h2 className="textdark" id="title2">Servicios</h2>
            
            <div className="row col-11 m-auto pt-4" id="container-services">
            
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4" id="card-1">
                   <div className="card bg-dark card-style" id="a-style">
                       <img src={plagas} className="img-cards" alt="fcc projects" />
                           <div className="card-body text-center">
                                <h5 className="card-title">Cucarachas</h5>
                                <Button color="success" onClick={this.openModalcucarachas}>Ver más</Button> 
                           </div>
                   </div>
            </div>

            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4" id="card-1">
                   <div className="card bg-dark card-style" id="a-style">
                       <img src={plagas} className="img-cards" alt="fcc projects" />
                           <div className="card-body text-center">
                                <h5 className="card-title">Comején</h5>
                                <Button color="success" onClick={this.openModalcomejen}>Ver más</Button> 
                           </div>
                   </div>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4" id="card-1">
                   <div className="card bg-dark card-style" id="a-style">
                       <img src={plagas} className="img-cards" alt="fcc projects" />
                           <div className="card-body text-center">
                                <h5 className="card-title">Roedores</h5>
                                <Button color="success" onClick={this.openModalroedores}>Ver más</Button> 
                           </div>
                   </div>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4" id="card-1">
                   <div className="card bg-dark card-style" id="a-style">
                       <img src={plagas} className="img-cards" alt="fcc projects" />
                           <div className="card-body text-center">
                                <h5 className="card-title">Desinfección</h5>
                                <Button color="success" onClick={this.openModaldesinfeccion}>Ver más</Button> 
                           </div>
                   </div>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4" id="card-1">
                   <div className="card bg-dark card-style" id="a-style">
                       <img src={plagas} className="img-cards" alt="fcc projects" />
                           <div className="card-body text-center">
                                <h5 className="card-title">Residencial</h5>
                                <Button color="success" onClick={this.openModalresidencial}>Ver más</Button> 
                           </div>
                   </div>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4" id="card-1">
                   <div className="card bg-dark card-style" id="a-style">
                       <img src={plagas} className="img-cards" alt="fcc projects" />
                           <div className="card-body text-center">
                                <h5 className="card-title">Comercial</h5>
                                <Button color="success" onClick={this.openModalcomercial}>Ver más</Button> 
                           </div>
                   </div>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4" id="card-1">
                   <div className="card bg-dark card-style" id="a-style">
                       <img src={plagas} className="img-cards" alt="fcc projects" />
                           <div className="card-body text-center">
                                <h5 className="card-title">Industrial</h5>
                                <Button color="success" onClick={this.openModalindustrial}>Ver más</Button> 
                           </div>
                   </div>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4" id="card-1">
                   <div className="card bg-dark card-style" id="a-style">
                       <img src={plagas} className="img-cards" alt="fcc projects" />
                           <div className="card-body text-center">
                                <h5 className="card-title">Hoteles</h5>
                                <Button color="success" onClick={this.openModalhoteles}>Ver más</Button> 
                           </div>
                   </div>
            </div>
        </div>
        
        <Modal isOpen={this.state.opencucarachas}>

            <ModalHeader>
                Fumigación para cucarachas
            </ModalHeader>


            <ModalBody>

            </ModalBody>


            <ModalFooter>
                <Button color="info" href="https://api.whatsapp.com/send?phone=573052526997&text=Hola, quiero fumigar contra las cucarachas, gracias.">Contratar este servicio</Button>
                <Button color="danger" onClick={this.openModalcucarachas}>Cerrar</Button>
            </ModalFooter>

        </Modal>


        <Modal isOpen={this.state.opencomejen}>

            <ModalHeader>
                Fumigación para comején
            </ModalHeader>


            <ModalBody>

            </ModalBody>


            <ModalFooter>
                <Button color="info" href="https://api.whatsapp.com/send?phone=573052526997&text=Hola, quiero fumigar contra el comejém, gracias.">Contratar este servicio</Button>
                <Button color="danger" onClick={this.openModalcomejen}>Cerrar</Button>
            </ModalFooter>

        </Modal>


        <Modal isOpen={this.state.openroedores}>

            <ModalHeader>
                Control para Roedores
            </ModalHeader>


            <ModalBody>

            </ModalBody>


            <ModalFooter>
                <Button color="info" href="https://api.whatsapp.com/send?phone=573052526997&text=Hola, quiero controlar los ratones, gracias.">Contratar este servicio</Button>
                <Button color="danger" onClick={this.openModalroedores}>Cerrar</Button>
            </ModalFooter>

        </Modal>

        
        <Modal isOpen={this.state.opendesinfeccion}>

            <ModalHeader>
                Desinfección de superficies
            </ModalHeader>


            <ModalBody>

            </ModalBody>


            <ModalFooter>
                <Button color="info" href="https://api.whatsapp.com/send?phone=573052526997&text=Hola, quiero contratar el servicio de desinfección, gracias.">Deseo mas información</Button>
                <Button color="danger" onClick={this.openModaldesinfeccion}>Cerrar</Button>
            </ModalFooter>

        </Modal>


        <Modal isOpen={this.state.openresidencial}>

            <ModalHeader>
                Zonas que se cubren
            </ModalHeader>


            <ModalBody>

            </ModalBody>


            <ModalFooter>
                <Button color="info" href="https://api.whatsapp.com/send?phone=573052526997&text=Hola, quiero mas informacion sobre las areas residenciales, gracias.">Deseo mas información</Button>
                <Button color="danger" onClick={this.openModalresidencial}>Cerrar</Button>
            </ModalFooter>

        </Modal>


        
        <Modal isOpen={this.state.opencomercial}>

            <ModalHeader>
                Zonas que se cubren
            </ModalHeader>


            <ModalBody>

            </ModalBody>


            <ModalFooter>
                <Button color="info" href="https://api.whatsapp.com/send?phone=573052526997&text=Hola, quiero mas informacion sobre las areas comerciales, gracias.">Deseo mas información</Button>
                <Button color="danger" onClick={this.openModalcomercial}>Cerrar</Button>
            </ModalFooter>

        </Modal>


        <Modal isOpen={this.state.openindustrial}>

            <ModalHeader>
                Zonas que se cubren
            </ModalHeader>


            <ModalBody>

            </ModalBody>


            <ModalFooter>
                <Button color="info" href="https://api.whatsapp.com/send?phone=573052526997&text=Hola, quiero mas informacion sobre las areas industriales, gracias.">Deseo mas información</Button>
                <Button color="danger" onClick={this.openModalindustrial}>Cerrar</Button>
            </ModalFooter>

        </Modal>


        <Modal isOpen={this.state.openhoteles}>

            <ModalHeader>
                Fumigación en hoteles
            </ModalHeader>


            <ModalBody>

            </ModalBody>


            <ModalFooter>
                <Button color="info" href="https://api.whatsapp.com/send?phone=573052526997&text=Hola, quiero mas informacion para el servicio en hoteles, gracias.">Deseo mas información</Button>
                <Button color="danger" onClick={this.openModalhoteles}>Cerrar</Button>
            </ModalFooter>

        </Modal>

    </>
        )
    }
}
