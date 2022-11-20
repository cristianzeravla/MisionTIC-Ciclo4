import React, {useState} from "react";
import uniquid from 'uniqid';
import axios from 'axios';
// reactstrap components
import { 
  Container, 
  Form, 
  Button, 
  Input, 
  Row,
  Col,
  NavLink,
  UncontrolledTooltip
} from "reactstrap";

import Select from "react-select";

// core components
import IndexNavbar from "components/Navbars/PanelNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function Publicacion() {

  const[titulo, setTitulo] = useState('')
  const[resumen, setResumen] = useState('')
  const[categoria, setCategoria] = useState('')
  const[descripcion, setDescripcion] = useState('')
  const[recursos, setRecursos] = useState('')
  const[imagen, setImagen] = useState('')
  //const[estado, setEstado] = React.useState('')


  function sendPost(){
    var entrada = {
      titulo: titulo,
      resumen: resumen,
      categoria: categoria,
      descripcion: descripcion,
      recursos: recursos,
      imagen: imagen,
      identrada: uniquid()
    }
    console.log(entrada)

    axios.post('api/entradas/sendPost', entrada)
    .then(res => {
      alert(res.data)
    })
    .then(err => {
      console.log(err)
      alert('Error al crear entrada')
    })
  }

  const Checkbox = ({ children, ...props }: JSX.IntrinsicElements['input']) => (
    <label style={{ marginRight: '1em' }}>
      <input type="checkbox" {...props} />
      {children}
    </label>
  );
  const [isClearable, setIsClearable] = React.useState(true);
  const options = [
    { value: 'Fisica', label: 'Fisica' },
    { value: 'Quimica', label: 'Quimica' },
    { value: 'Biologia', label: 'Biologia' }
  ]
  let pageHeader = React.createRef();
  //const [leftFocus, setLeftFocus] = React.useState(false);

  //const [firstFocus, setFirstFocus] = React.useState(false);
  //const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.title = "Panel de entradas"
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
              <h3>
                <strong>Publicaciones</strong>
              </h3>
              <p className="category">Agregar nueva entrada</p>
              <Row>
                <Form>
                  <label for="inputTitulo" class="form-label">
                    Titulo
                  </label>
                  <Input type="text" class="form-control" id="inputTitulo"aria-describedby="tituloHelp"
                  value={titulo} onChange={(e) => {setTitulo(e.target.value)}}  />
                  <div id="tituloHelp" class="form-text" className="text-danger">
                    * Este campo es obligatorio
                  </div>
                  <br></br>
                  <label for="inputResumen" class="form-label">
                    Resumen
                  </label>
                  <Input type="text" class="form-control" id="inputResumen" aria-describedby="resumenHelp" 
                  value={resumen} onChange={(e) => {setResumen(e.target.value)}} />
                  <div id="resumenHelp" class="form-text" className="text-danger">
                    * El resumen debe contener entre 8 a 200 caracteres
                  </div>
                  <br></br>
                  <label for="inputCategoria" class="form-label">
                    Categoria
                  </label>
                  <br></br>

                  <Select options={options} name="categoria" isClearable={isClearable} classNamePrefix="Seleccionar" 
                  value={categoria} onChange={(e) => {setCategoria(e.target.value)}}/>
                  <div style={{
                    color: 'hsl(0, 0%, 40%)',
                    display: 'inline-block',
                    fontSize: 12,
                    fontStyle: 'italic',
                    marginTop: '1em',
                    }}
                    >
                    <Checkbox
                      checked={isClearable}
                      onChange={() => setIsClearable((state) => !state)}>
                      Eliminar seleccion
                    </Checkbox>
                  </div>

                  <br></br>
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Descripcion
                  </label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"aria-describedby="descripcionHelpBlock"
                  value={descripcion} onChange={(e) => {setDescripcion(e.target.value)}}></textarea>
                  <div id="descripcionHelpBlock" class="form-text" className="text-danger">
                    Tu descripcion debe contener de 8 a 255 caracteres de largo,
                    puede contener letras, numeros, caracteres especiales y
                    enlaces o emoji
                  </div>
                  <br></br>
                  <label for="inputRecursos" className="control-label">
                    Recursos adicionales
                  </label>
                  <Input type="url" placeholder="Ingrese una url del experimento" aria-describedby="recursosHelp" id="inputRecursos" 
                  class="form-control"value={recursos} onChange = {(e) => {setRecursos(e.target.value)}}/>
                  <div class="text-control" className="text-danger" id="inputRecursos">
                    * Debe agregar un enlace que contenga informacion adicional del experimento a publicar
                  </div>
                  <br></br>
                  <div class="mb-3">
                    <label for="formFile" class="form-label">
                      Seleccione una imagen
                    </label>
                    <input class="form-control" type="file" id="formFile" aria-describedby="imagenHelp" 
                    accept=".jpg, .png, .jpeg" value={imagen} onChange={(e) => {setImagen (e.target.value)}} />
                    <div id="imagenHelp" class="form-text" className="text-danger">
                      * Los formatos admitidos son JPG, PNG y JPEG
                    </div>
                  </div>

                  <Button color="info">Limpiar</Button>
                  <Button color="success" onClick={sendPost}>Publicar</Button>
                </Form>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-tables">
          <Container>
            <p className="category">Tabla entradas activas</p>
            <Row>
              <table class="table">
                <thead class="table-dark">
                  <tr>
                    <th scope="col">Imagen</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Resumen</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Recursos</th>
                    <th scope="col">Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Test de titulo</td>
                    <td>test</td>
                    <td>Se agrega un resumen para la publicacion</td>
                    <td>Aqui se ingresa el texto completo</td>
                    <td>
                      <NavLink href="https://aofirs.org/articles/google-dork-list" id="enlaces" target="_blank">
                        Enlaces
                      </NavLink>
                      <UncontrolledTooltip target="#enlaces">
                        Recursos del experimento
                      </UncontrolledTooltip>
                    </td>
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
                    <th scope="col">Imagen</th>
                    <th scope="col">Titulo</th>
                    <th scope="col">Resumen</th>
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

export default Publicacion;
