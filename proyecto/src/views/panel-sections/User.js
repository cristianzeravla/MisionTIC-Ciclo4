import React from "react";

import {
    Container,
    Form,
    Button,
    Row
} from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter";

function Usuarios(){
    let pageHeader = React.createRef();

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
                            <input type="text" className="form-control" id="inputNombre" aria-describedby="nombreHelp" placeholder="Ingrese su nombre" />
                            <div className="text-danger" id="nombreHelp" class="form-text">
                                * Este campo es obligatorio
                            </div>
                             <label for="inputApellido" className="form-label" />
                            <input type="text" className="form-control" id="inputApellido" aria-describedby="apellidoHelp" placeholder="Ingrese sus apellidos" /> 
                            <div class="form-text" className="text-danger" id="apellidoHelp">
                                * Este campo es obligatorio
                            </div>
                            <label className="form-label" form="inputEmail" />
                            <input type="email" id="inputEmail" aria-describedby="emailHel" className="form-control" placeholder="Ingrese un correo electronico valido" />
                            <div class="form-text" className="text-danger" id="emailHelp">
                                * Este campo es obligatorio
                            </div>  
                            <label className="form-label" for="inputPassword" />
                            <input className="form-control" id="inputPassword" type="password" placeholder="Ingrese una contraseña" aria-describedby="passwordHelp"/>  
                            <div className="text-danger" id="passwordHelp" class="form-text">
                                * La contraseña debe tener entre 4 a 12 caracteres    
                            </div>  
                            <label className="form-label" for="inputPassword1"/>
                            <input className="form-control" id="inputPassword1" type="password" placeholder="Confirmar contraseña" />            
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