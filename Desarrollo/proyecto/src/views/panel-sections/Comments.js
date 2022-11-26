import React, {Component} from 'react';

import { 
  Container, 
  Button,
  Row,
  Col 
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/PanelNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

let pageHeader = React.createRef();
class Comentarios extends Component {
  

  render() {
    
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <div
            className="page-header clear-filter page-header-small"
            filter-color="blue"
          >
            <div
              className="page-header-image"
              style={{
                backgroundImage:
                  "url(" + require("assets/img/banner-panel.jpg") + ")",
              }}
              ref={pageHeader}
            ></div>
          </div>
          <div className="section section-form">
            <Container>
              <h3>
                <strong>Comentarios</strong>
              </h3>
              <p className="category">Tabla comentarios activos</p>
              <Row>
              <table class="table">
                  <thead class="table-dark">
                    <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Apellido</th>
                      <th scope="col">Correo</th>
                      <th scope="col">Comentario</th>
                      <th scope="col">Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Test de titulo</td>
                      <td>test</td>
                      <td>Aqui se ingresa el texto completo</td>
                      <td>
                        <Button
                          className="btn-icon btn-round"
                          color="warning"
                          type="button"
                        >
                          <i className="now-ui-icons ui-2_favourite-28"></i>
                        </Button>
                        <Button
                          className="btn-icon btn-round"
                          color="info"
                          type="button"
                        >
                          <i className="now-ui-icons ui-2_favourite-28"></i>
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Row>
            </Container>
          </div>
          <div className="section section-post-undefined">
            <Container>
              <p className="category">Tabla entradas inactivas</p>
              <Row>
              <Col md="6">
                <table class="table">
                  <thead class="table-dark">
                    <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Correo</th>
                      <th scope="col">Comentario</th>
                      <th scope="col">Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Test de titulo</td>
                      <td>Aqui se ingresa el texto completo</td>
                      <td>
                        <Button
                          className="btn-icon btn-round"
                          color="success"
                          type="button"
                        >
                          <i className="now-ui-icons ui-2_favourite-28"></i>
                        </Button>
                        <Button
                          className="btn-icon btn-round"
                          color="danger"
                          type="button"
                        >
                          <i className="now-ui-icons ui-2_favourite-28"></i>
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                </Col>
              </Row>
            </Container>
          </div>
          <DarkFooter />
        </div>
      </>
    );
  }

}


export default Comentarios;


/**
 * 
 * 
 * 
React.useEffect(() => {
    document.title = "Panel Comentarios"
    document.body.classList.add("Comentarios");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("Comentarios");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);


 *
*/