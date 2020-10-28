import React, { Component } from 'react'
import "../Styles/Contact.css"
import "bootstrap/dist/css/bootstrap.css"
import { Button, Input } from 'reactstrap'
import axios from "axios"
import swal from "sweetalert"

export default class Contact extends Component {
    state = {
        user:"",
        nombre:"",
        apellidos:"",
        email:"",
        celular:"",
        razonSocial:"",
        mensaje:""
    }

    async componentDidMount() {
        const res = await axios.get("http://localhost:3000/user");
        this.setState({ user: res.data })
        console.log(this.state.user)
    }
    onChangeNombre = (e) => {
        this.setState({
            nombre: e.target.value
        })
    }
    onChangeApellidos = (e) => {
        this.setState({
            apellidos: e.target.value
        })    
    }
    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    onChangeCelular = (e) => {
        this.setState({
            celular: e.target.value
        })
    }
    onChangeRazonSocial = (e) => {
        this.setState({
            razonSocial: e.target.value
        })
    }
    onChangeMensaje = (e) => {
        this.setState({
            mensaje: e.target.value
        })
    }
    onSubmit = async e => {
        e.preventDefault();
        const res = axios.post("http://localhost:3000/user", {
            nombre: this.state.nombre,
            apellidos: this.state.apellidos,
            email: this.state.email,
            celular: this.state.celular,
            razonSocial: this.state.razonSocial,
            mensaje: this.state.mensaje
        })
        console.log(res)
        e.target.reset()
    
    if (res.data === this.nombre){
        swal({
            title: `${this.state.nombre},`,
            text: `Gracias por registrar tus datos, te estaremos contactando pronto.`,
            icon: "success"
        });
      }
    }
    render() {
        return (
            <div className="container-contact">
                <h1 id="title3">Envianos un mensaje</h1>
                <form onSubmit={this.onSubmit}>
                    <Input type="text" id="input" onChange={this.onChangeNombre} className="col-md-8 offset-md-4" required placeholder="Nombre"/>
                    <br/>
                   
                    <Input type="text" id="input" onChange={this.onChangeApellidos} className="col-md-8 offset-md-4"required placeholder="Apellidos"/>
                    <br/>
                    
                    <Input type="email" id="input" onChange={this.onChangeEmail} className="col-md-8 offset-md-4"required placeholder="Email"/>
                    <br/>
                    
                    <Input type="number" id="input" onChange={this.onChangeCelular} className="col-md-8 offset-md-4"required placeholder="Celular"/>
                    <br/>
                    
                    <Input type="text" id="input" onChange={this.onChangeRazonSocial} className="col-md-8 offset-md-4"required placeholder="Razon social"/>
                    <br/>
                    
                    <Input type="text" id="inputc" onChange={this.onChangeMensaje} className="col-md-8 offset-md-4"required="Dejanos algun comentario" placeholder="Mensaje"/>
                    <br/>
                    
                    <Button type="submit" className="btn btn-warning">Enviar</Button>
                </form>
            </div>
        )
    }
}
