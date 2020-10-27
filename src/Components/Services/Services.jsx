import React, { Component } from 'react'
import "../Styles/Services.css"
import cucarachasmuertas from "../../images/casacucaracha.jpg"
import comejen from "../../images/comejen.jpg"
import roedores from "../../images/roedores.jpg"
import desinfeccion from "../../images/virus.jpg"
import residencial from "../../images/residencial.jpg"
import comercial from "../../images/comercial.jpg"
import industrial from "../../images/industrial.jpg"
import hoteles from "../../images/hoteles.jpg"
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap"
import "bootstrap/dist/css/bootstrap.css"
import cucarachas from "../../images/cucarachasmuertas.jpg"
import comejenter from "../../images/comejenter.jpg"
import ratota from "../../images/ratota.jpg"
import covid from "../../images/covid19.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheck} from "@fortawesome/free-solid-svg-icons"

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
                       <img src={cucarachasmuertas} className="img-cards" alt="fcc projects" />
                           <div className="card-body text-center">
                                <h5 className="card-title">Cucarachas</h5>
                                <Button className="boton" color="success" onClick={this.openModalcucarachas}>Ver más</Button> 
                           </div>
                   </div>
            </div>

            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4" id="card-1">
                   <div className="card bg-dark card-style" id="a-style">
                       <img src={comejen} className="img-cards" alt="fcc projects" />
                           <div className="card-body text-center">
                                <h5 className="card-title">Comején</h5>
                                <Button color="success" onClick={this.openModalcomejen}>Ver más</Button> 
                           </div>
                   </div>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4" id="card-1">
                   <div className="card bg-dark card-style" id="a-style">
                       <img src={roedores} className="img-cards" alt="fcc projects" />
                           <div className="card-body text-center">
                                <h5 className="card-title">Roedores</h5>
                                <Button color="success" onClick={this.openModalroedores}>Ver más</Button> 
                           </div>
                   </div>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4" id="card-1">
                   <div className="card bg-dark card-style" id="a-style">
                       <img src={desinfeccion} className="img-cards" alt="fcc projects" />
                           <div className="card-body text-center">
                                <h5 className="card-title">Desinfección</h5>
                                <Button color="success" onClick={this.openModaldesinfeccion}>Ver más</Button> 
                           </div>
                   </div>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4" id="card-1">
                   <div className="card bg-dark card-style" id="a-style">
                       <img src={residencial} className="img-cards" alt="fcc projects" />
                           <div className="card-body text-center">
                                <h5 className="card-title">Residencial</h5>
                                <Button color="success" onClick={this.openModalresidencial}>Ver más</Button> 
                           </div>
                   </div>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4" id="card-1">
                   <div className="card bg-dark card-style" id="a-style">
                       <img src={comercial} className="img-cards" alt="fcc projects" />
                           <div className="card-body text-center">
                                <h5 className="card-title">Comercial</h5>
                                <Button color="success" onClick={this.openModalcomercial}>Ver más</Button> 
                           </div>
                   </div>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4" id="card-1">
                   <div className="card bg-dark card-style" id="a-style">
                       <img src={industrial} className="img-cards" alt="fcc projects" />
                           <div className="card-body text-center">
                                <h5 className="card-title">Industrial</h5>
                                <Button color="success" onClick={this.openModalindustrial}>Ver más</Button> 
                           </div>
                   </div>
            </div>
            <div className="col-11 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-4 mb-4" id="card-1">
                   <div className="card bg-dark card-style" id="a-style">
                       <img src={hoteles} className="img-cards" alt="fcc projects" />
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
                <img src={cucarachas} id="img-services" alt="img"/>
                <p>Efectividad del 99% en el control de cucarachas dependiendo de la infestación y el área a tratar, 
                   se hace una fumigación completa a todas las superficies, pague uno y lleve tres servicios:
                </p>
                       <li><FontAwesomeIcon icon={faCheck} />  Fumigación en asperción</li>
                       <li><FontAwesomeIcon icon={faCheck} />  Fumigación en seco</li>
                       <li><FontAwesomeIcon icon={faCheck} />  Fumigación con gel insecticida</li>
                       <br/>
                       <p><strong>Garantia de 3 meses y certificado para su local o negocio.</strong> </p>  
            </ModalBody>


            <ModalFooter>
                <Button color="info" href="https://api.whatsapp.com/send?phone=573052526997&text=Hola, quiero fumigar contra las cucarachas, gracias.">Quiero contratar este servicio</Button>
                <Button color="danger" onClick={this.openModalcucarachas}>Cerrar</Button>
            </ModalFooter>

        </Modal>


        <Modal isOpen={this.state.opencomejen}>

            <ModalHeader>
                Fumigación para comején
            </ModalHeader>


            <ModalBody>
            <img src={comejenter} id="img-services" alt="img"/>
            <br/>
            <br/>
            <p>Existen mas de 40.000 especies, los Xilofagos son altamente destructivos con la madera de nuestro hogar,
                para controlarlos hacemos un proceso manejado tecnicamente que consiste en inyectar insecticida 
                por cada uno de los orificios, aplicamos inmunizante para toda la madera de su casa</p>
                <br/>
            <p><strong>Evita a tiempo el deterioro de la madera.</strong> </p>
            </ModalBody>


            <ModalFooter>
                <Button color="info" href="https://api.whatsapp.com/send?phone=573052526997&text=Hola, quiero fumigar contra el comejém, gracias.">Quiero contratar este servicio</Button>
                <Button color="danger" onClick={this.openModalcomejen}>Cerrar</Button>
            </ModalFooter>

        </Modal>


        <Modal isOpen={this.state.openroedores}>

            <ModalHeader>
            Control para Roedores
            </ModalHeader>


            <ModalBody>
            <img src={ratota} id="img-services" alt="img"/>
            <br/>
            <br/>
            <p>Las ratas y los ratones no sólo pueden causar daños en nuestro hogar o en nuestro negocio, 
                sino también graves problemas de salud para el ser humano. La salmonela, la leptospirosis, 
                la enfermedad de Weil o el hantavirus son solo varias de las enfermedades que pueden transmitir.</p>
                <br/>
            <p><strong>Contamos con ceboestaciones para su control.</strong> </p>
            </ModalBody>


            <ModalFooter>
                <Button color="info" href="https://api.whatsapp.com/send?phone=573052526997&text=Hola, quiero controlar los ratones, gracias.">Quiero contratar este servicio</Button>
                <Button color="danger" onClick={this.openModalroedores}>Cerrar</Button>
            </ModalFooter>

        </Modal>

        
        <Modal isOpen={this.state.opendesinfeccion}>

            <ModalHeader>
                Desinfección de superficies
            </ModalHeader>


            <ModalBody>
            <img src={covid} id="img-services" alt="img"/>
            <br/>
            <br/>
            <p>Utilizamos <strong>amonio cuaternario</strong> de quinta genneración.
            Este producto se utiliza para desinfectar superficies, el de quinta generación es el recomendado debido 
            a su amplio espectro bactericida, fungicida y virucida. Además, su uso es más seguro y tiene un menor impacto en el ambiente.</p>
            <p><strong>Cuida de tu salud y los que te rodean.</strong> </p>

            </ModalBody>


            <ModalFooter>
                <Button color="info" href="https://api.whatsapp.com/send?phone=573052526997&text=Hola, quiero contratar el servicio de desinfección, gracias.">Quiero contratar este servicio</Button>
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
                <Button color="info" href="https://api.whatsapp.com/send?phone=573052526997&text=Hola, quiero mas informacion sobre las areas residenciales, gracias.">Deseo más información</Button>
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
                <Button color="info" href="https://api.whatsapp.com/send?phone=573052526997&text=Hola, quiero mas informacion sobre las areas comerciales, gracias.">Deseo más información</Button>
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
                <Button color="info" href="https://api.whatsapp.com/send?phone=573052526997&text=Hola, quiero mas informacion sobre las areas industriales, gracias.">Deseo más información</Button>
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
                <Button color="info" href="https://api.whatsapp.com/send?phone=573052526997&text=Hola, quiero mas informacion para el servicio en hoteles, gracias.">Deseo más información</Button>
                <Button color="danger" onClick={this.openModalhoteles}>Cerrar</Button>
            </ModalFooter>

        </Modal>

    </>
        )
    }
}
