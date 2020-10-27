import React, { Component } from 'react'
import "../Styles/Contact.css"
import "bootstrap/dist/css/bootstrap.css"
import { Button, Input } from 'reactstrap'



export default class Contact extends Component {
    render() {
        return (
            <div className="container-contact">
                <h1 id="title3">Contactanos</h1>
                <form>
                    <Input type="text" id="input" className="col-md-8 offset-md-4" required placeholder="Nombre"/>
                    <br/>
                    <br/>
                    <Input type="text" id="input" className="col-md-8 offset-md-4"required placeholder="Apellidos"/>
                    <br/>
                    <br/>
                    <Input type="email" id="input" className="col-md-8 offset-md-4"required placeholder="Email"/>
                    <br/>
                    <br/>
                    <Input type="number" id="input" className="col-md-8 offset-md-4"required placeholder="Celular"/>
                    <br/>
                    <br/>
                    <Input type="text" id="input" className="col-md-8 offset-md-4"required placeholder="Razon social"/>
                    <br/>
                    
                    <Input type="text" id="inputc" className="col-md-8 offset-md-4"required="Dejanos algun comentario" placeholder="Mensaje"/>
                    <br/>
                    
                    <Button type="submit" className="btn btn-warning">Enviar</Button>
                </form>
            </div>
        )
    }
}
