import React, {Component} from "react";
import axios from "axios";
import Swal from "sweetalert2";

import {
    Container,
    Form,
    Button,
    Row,
    UncontrolledTooltip
} from "reactstrap";

import IndexNavbar from "components/Navbars/PanelNavbar.js";
import DarkFooter from "components/Footers/DarkFooter";

let pageHeader = React.createRef();

const url = "http://localhost:3000/api/users";
var cNombre = document.getElementById("inputNombre");
var cApellido = document.getElementById("inputApellido");
var cCorreo = document.getElementById("inputEmail");
var cPassword = document.getElementById("inputPassword");
class Usuarios extends Component {
    state = {
        data: [],
        form: {
            nombre: '',
            apellido: '',
            correo: '',
            password: ''
        }
    }

    peticionGet = () => {
        axios.get(url).then(response => {
            this.setState({data: response.data});
        }).catch(error => {
            console.log(error.message);
        })
    }

    peticionPost = async () => {
        if(cNombre === "" || cApellido === "" || cCorreo === "" || cPassword === ""){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios!',
            })
        }else{
            await axios.post(url, this.state.form).then(response => {
                this.peticionGet();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Usuario creado correctamente',
                    showConfirmButton: false,
                    timer: 1500
                })
            }).catch(error => {
                console.log(error.message);
                Swal.fire({
                    title: "Error",
                    text: "No se pudo registrar el usuario",
                    icon: "error",
                    button: "Aceptar"
                });
            })
        }
    }

    componentDidMount(){
        this.peticionGet();
    }

    handleChange = async e => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    render() {
        const {form} = this.state;
        return (
            <>
            <IndexNavbar />
            <div className="wrapper">
                <div className="page-header clear-filter page-header-small" filter-color="blue">
                    <div className="page-header-image"
                    style={{ backgroundImage:
                     "url(" + require("assets/img/banner-panel.jpg") + ")",
                     }} ref={pageHeader}>
                    </div>
                </div>
                <div className="section section-formulario">
                    <Container>
                        <div id="inputs">
                            <h3><strong> Usuarios </strong></h3>
                        </div>
                        <p className="category"> Agregar nuevo usuario</p>
                        <Row>
                            <Form>
                                <label for ="inputNombre" className="form-label">
                                    Nombre
                                </label> 
                                <input type="text" className="form-control" id="inputNombre" aria-describedby="nombreHelp" placeholder="Ingrese su nombre" 
                                name="nombre" onChange={this.handleChange} value={form.nombre}/>
                                <div className="text-danger" id="nombreHelp" class="form-text">
                                    * Este campo es obligatorio
                                </div>
                                <br></br>
                                <label for="inputApellido" className="form-label" value="Apellido">
                                    Apellido
                                </label>
                                <input type="text" className="form-control" id="inputApellido" aria-describedby="apellidoHelp" placeholder="Ingrese sus apellidos" 
                                name="apellido" onChange={this.handleChange} value={form.apellido}/> 
                                <div class="form-text" className="text-danger" id="apellidoHelp">
                                    * Este campo es obligatorio
                                </div>
                                <br></br>
                                <label className="form-label" form="inputEmail"> 
                                    Correo
                                </label>
                                <input type="email" id="inputEmail" aria-describedby="emailHel" className="form-control" placeholder="Ingrese un correo electronico valido" 
                                name="correo" onChange={this.handleChange} value={form.correo}/>
                                <div class="form-text" className="text-danger" id="emailHelp">
                                    * Este campo es obligatorio
                                </div> 
                                <br></br> 
                                <label className="form-label" for="inputPassword">
                                    Contraseña
                                </label>
                                <br></br>
                                <input className="form-control" id="inputPassword" type="password" placeholder="Ingrese una contraseña" aria-describedby="passwordHelp"
                                name="password" onChange={this.handleChange} value={form.password}/>  
                                <div className="text-danger" id="passwordHelp" class="form-text">
                                    * La contraseña debe tener entre 4 a 12 caracteres    
                                </div> 
                                <br></br> 
                                    
                                <Button color="info">Limpiar</Button>
                                <Button color="success" onClick={this.peticionPost}>Registrarse</Button>
                            </Form>
                        </Row>
                    </Container>
                </div>
                <div className="section section-tables-active">
                    <Container>
                        <p className="category" name="t_Usuarios" value="Tabla de usuarios registrador"/>
                        <Row>
                            <table class="table">
                                <thead class="table-dark">
                                    <tr>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Apellido</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.map(user => {
                                    return (
                                            <tr>
                                                <td>{user.nombre}</td>
                                                <td>{user.apellido}</td>
                                                <td>{user.correo}</td>
                                                <td>
                                                    <Button className="btn-icon btn-round" color="warning" type="button" id="btn-editar">
                                                        <i className="now-ui-icons ui-2_favourite-28"></i>
                                                    </Button>
                                                    <UncontrolledTooltip target="btn-editar">
                                                        Editar registro usuario
                                                    </UncontrolledTooltip>
                                                    <Button className="btn-icon btn-round" color="info" type="button" id="btn-eliminar">
                                                        <i className="now-ui-icons ui-2_favourite-28"></i>
                                                    </Button>
                                                    <UncontrolledTooltip target="btn-eliminar">
                                                        Eliminar registro usuario
                                                    </UncontrolledTooltip>                                                    
                                                </td>
                                            </tr>
                                        )
                                    })}                                    
                                </tbody>
                                <tfooter>
                                    
                                </tfooter>
                            </table> 
                        </Row>
                    </Container>
                </div>
            </div>
            <DarkFooter />
            </>
        );
    }
}

export default Usuarios;
/*

   useEffect(() => {
            document.title = "Panel Usuarios"
            document.body.classList.add("Usuarios");
            document.body.classList.add("sidebar-collapse");
            document.documentElement.classList.remove("nav-open");
            window.scrollTo(0, 0);
            document.body.scrollTop = 0;
    
            return function cleanup() {
                document.body.classList.remove("Usuarios");
                document.documentElement.classList.remove("sidebar-collapse");
            };
        }, []);






<label className="form-label" for="inputPassword1">
                                Confirmar contraseña
                            </label>
                            <input className="form-control" id="inputPassword1" type="password" placeholder="Confirmar contraseña" 
                            value={password1} onChange={(e) => {setPassword1(e.target.value)}}/>    
                            <br></br>    






peticionPost = async () => {
        if(cNombre === "" || cApellido === "" || cCorreo === "" || cPassword === ""){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios!',
            })
        }else{
            if(cNombre == null || cApellido == null || cCorreo == null || cPassword == null){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Debe llenar el formulario!',
                })
            }else{
                await axios.post(url, this.state.form).then(response => {
                    this.peticionGet();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Usuario creado correctamente',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }).catch(error => {
                    console.log(error.message);
                    Swal.fire({
                        title: "Error",
                        text: "No se pudo registrar el usuario",
                        icon: "error",
                        button: "Aceptar"
                    });
                })
            }
        }
    }                            
*/