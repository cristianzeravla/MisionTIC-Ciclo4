import React, {useState } from "react";
import uniqid from "uniqid";
import axios from "axios";
import Swal from "sweetalert2";

import {
    Container,
    Form,
    Button,
    Row
} from "reactstrap";

import IndexNavbar from "components/Navbars/PanelNavbar.js";
import DarkFooter from "components/Footers/DarkFooter";

function Usuarios(){
    let pageHeader = React.createRef();

    const[nombre, setNombre] = useState('');
    const[apellido, setApellido] = useState('');
    const[correo, setCorreo] = useState('');
    const[password, setPassword] = useState('');
    //const[password1, setPassword1] = useState('');


    React.useEffect(() => {
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
                            value={nombre} onChange={(e) => {setNombre(e.target.value)}}/>
                            <div className="text-danger" id="nombreHelp" class="form-text">
                                * Este campo es obligatorio
                            </div>
                            <br></br>
                            <label for="inputApellido" className="form-label" value="Apellido">
                                Apellido
                            </label>
                            <input type="text" className="form-control" id="inputApellido" aria-describedby="apellidoHelp" placeholder="Ingrese sus apellidos" 
                            value={apellido} onChange={(e) => {setApellido(e.target.value)}}/> 
                            <div class="form-text" className="text-danger" id="apellidoHelp">
                                * Este campo es obligatorio
                            </div>
                            <br></br>
                            <label className="form-label" form="inputEmail"> 
                                Correo
                            </label>
                            <input type="email" id="inputEmail" aria-describedby="emailHel" className="form-control" placeholder="Ingrese un correo electronico valido" 
                            value={correo} onChange={(e) => {setCorreo(e.target.value)}}/>
                            <div class="form-text" className="text-danger" id="emailHelp">
                                * Este campo es obligatorio
                            </div> 
                            <br></br> 
                            <label className="form-label" for="inputPassword">
                                Contraseña
                            </label>
                            <br></br>
                            <input className="form-control" id="inputPassword" type="password" placeholder="Ingrese una contraseña" aria-describedby="passwordHelp"
                            value={password} onChange={(e) => {setPassword(e.target.value)}}/>  
                            <div className="text-danger" id="passwordHelp" class="form-text">
                                * La contraseña debe tener entre 4 a 12 caracteres    
                            </div> 
                            <br></br> 
                                
                            <Button color="info">Limpiar</Button>
                            <Button color="success">Registrarse</Button>
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
                                <tr>
                                    <td>Carlos</td>
                                    <td>Vasquez</td>
                                    <td>email@email.com</td>
                                    <td>
                                    <Button className="btn-icon btn-round" color="warning" type="button">
                                        <i className="now-ui-icons ui-2_favourite-28"></i>
                                    </Button>
                                    <Button className="btn-icon btn-round" color="info" type="button">
                                        <i className="now-ui-icons ui-2_favourite-28"></i>
                                    </Button>
                                    </td>
                                </tr>
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

export default Usuarios;
/*
<label className="form-label" for="inputPassword1">
                                Confirmar contraseña
                            </label>
                            <input className="form-control" id="inputPassword1" type="password" placeholder="Confirmar contraseña" 
                            value={password1} onChange={(e) => {setPassword1(e.target.value)}}/>    
                            <br></br>    
*/