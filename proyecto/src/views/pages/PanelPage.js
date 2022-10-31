import React from "react";
// reactstrap components
import { Container, Form, Button, Input, Row} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/PanelNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function Panel() {
  let pageHeader = React.createRef();
  //const [leftFocus, setLeftFocus] = React.useState(false);

  //const [firstFocus, setFirstFocus] = React.useState(false);
  //const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("Panel");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("Panel");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
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
            <div id="inputs">
              <h4>Publicaciones</h4>
              <p className="category">Agregar nueva entrada</p>
              <Row>
                <Form>
                  <label for="inputTitulo" class="form-label">
                    Titulo
                  </label>
                  <Input
                    type="text"
                    class="form-control"
                    id="inputTitulo"
                    aria-describedby="tituloHelp"
                  />
                  <div id="tituloHelp" class="form-text">
                    * Este campo es obligatorio
                  </div>
                  <label for="inputResumen" class="form-label">
                    Resumen
                  </label>
                  <Input
                    type="text"
                    class="form-control"
                    id="inputResumen"
                    aria-describedby="resumenHelp"
                  />
                  <label for="inputCategoria" class="form-label">
                    Categoria
                  </label>
                  <Input type="text" class="form-control" id="inputCategoria" />

                  <label for="inputPassword5" class="form-label">
                    Descripcion
                  </label>
                  <input
                    type="text"
                    id="inputPassword5"
                    class="form-control"
                    aria-describedby="passwordHelpBlock"
                  />
                  <div id="passwordHelpBlock" class="form-text">
                    Your description must be 8-20 characters long, contain
                    letters and numbers, special characters, or emoji.
                  </div>

                  <Button color="info">Limpiar</Button>
                  <Button color="success">Publicar</Button>
                </Form>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-tables">
          <Container>
            <Row>
              <table class="table">
                <thead class="table-dark">
                  <tr>
                    <th scope="col">Imagen</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Resumen</th>
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
                        color="danger"
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
                  <tr>
                    <th scope="row">2</th>
                    <td>Test de titulo2</td>
                    <td>test2</td>
                    <td>Aqui se ingresa el texto completo</td>
                  </tr>
                </tbody>
              </table>
            </Row>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Panel;
