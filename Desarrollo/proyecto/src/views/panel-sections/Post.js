import React, {Component} from 'react';
import axios from 'axios';
import Swal from "sweetalert2";

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

const options = [
  { value: 'Fisica', label: 'Fisica' },
  { value: 'Quimica', label: 'Quimica' },
  { value: 'Biologia', label: 'Biologia' },
  { value: 'Tecnologicos', label: 'Tecnologicos' },
  { value: 'Matematicos', label: 'Matematicos' }
]
let pageHeader = React.createRef();

const url = "http://localhost:3000/api/posts";

var cTitulo = document.getElementById("inputTitulo");
var cResumen = document.getElementById("inputResumen");
var cCategoria = document.getElementById("inputCategoria");
var cDescripcion = document.getElementById("inputDescripcion");
var cRecursos = document.getElementById("inputRecursos");
var cImagen = document.getElementById("inputImagen");
class Publicacion extends Component {
  state = {
    data: [],
    form: {
      titulo: '',
      resumen: '',
      categoria: '',
      descripcion: '',
      recursos: '',
      imagen: '',
      estado: ''
    }
  }

  peticionGet = () => {
    axios.get(url).then((response) => {
      this.setState({data: response.data});
    }).catch((err) => {
      console.error(err.message);
    })
  }

  peticionPost = async () => {
    if(cTitulo === "" || cResumen === "" || cCategoria === "" || cDescripcion === "" || cRecursos === "" || cImagen === ""){
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
            title: 'La publicacion se ha creado exitosamente',
            showConfirmButton: false,
            timer: 1500
        })
    }).catch(error => {
        console.log(error.message);
        Swal.fire({
            title: "Error",
            text: "No se pudo registrar la publicacion",
            icon: "error",
            button: "Aceptar"
        });
    })
    }
  }

  componentDidMount() {
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
                    name="titulo" onChange={this.handleChange} value={form.titulo}/>
                    <div id="tituloHelp" class="form-text" className="text-danger">
                      * Este campo es obligatorio
                    </div>
                    <br></br>
                    <label for="inputResumen" class="form-label">
                      Resumen
                    </label>
                    <Input type="text" class="form-control" id="inputResumen" aria-describedby="resumenHelp" 
                    name="resumen" onChange={this.handleChange} value={form.resumen}/>
                    <div id="resumenHelp" class="form-text" className="text-danger">
                      * El resumen debe contener entre 8 a 200 caracteres
                    </div>
                    <br></br>
                    <label for="inputCategoria" class="form-label">
                      Categoria
                    </label>
                    <br></br>
                    <Select options={options} classNamePrefix="Seleccionar" 
                    name="cateogoria" onChange={this.handleChange} value={form.categoria}/>
                    <div style={{
                      color: 'hsl(0, 0%, 40%)',
                      display: 'inline-block',
                      fontSize: 12,
                      fontStyle: 'italic',
                      marginTop: '1em',
                      }}
                      >
                    </div>
  
                    <br></br>
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Descripcion
                    </label>
                    <textarea class="form-control" id="inputDescripcion" rows="3"aria-describedby="descripcionHelpBlock"
                    name="descripcion" onChange={this.handleChange} value={form.descripcion}></textarea>
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
                    class="form-control" name="recursos" onChange={this.handleChange} value={form.recursos}/>
                    <div class="text-control" className="text-danger" id="inputRecursos">
                      * Debe agregar un enlace que contenga informacion adicional del experimento a publicar
                    </div>
                    <br></br>

                    <label for="inputImagen" class="form-label">
                      Imagen texto
                    </label>
                    <Input type="text" class="form-control" id="inputImagen"aria-describedby="imagenTHelp"
                    name="imagen" onChange={this.handleChange} value={form.imagen}/>
                    <div id="imagenTHelp" class="form-text" className="text-danger">
                      * Este campo es obligatorio
                    </div>
                    <br></br>

                    <div class="mb-3">
                      <label for="formFile" class="form-label">
                        Seleccione una imagen
                      </label>
                      <input class="form-control" type="file" id="formFile" aria-describedby="imagenHelp" 
                      accept=".jpg, .png, .jpeg"  />
                      <div id="imagenHelp" class="form-text" className="text-danger">
                        * Los formatos admitidos son JPG, PNG y JPEG
                      </div>
                    </div>
  
                    <Button color="info">Limpiar</Button>
                    <Button color="success" onClick={this.peticionPost} >Publicar</Button>
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
                    {this.state.data.map(post => {
                      return (
                        <tr>
                          <td>{post.imagen}</td>
                          <td>{post.titulo}</td>
                          <td>{post.categoria}</td>
                          <td>{post.resumen}</td>
                          <td>{post.descripcion}</td>
                          <td>
                          <NavLink href={post.recursos} id="enlaces" target="_blank">
                            Enlaces
                          </NavLink>
                          <UncontrolledTooltip target="#enlaces">
                            Recursos del experimento
                          </UncontrolledTooltip>
                          </td>
                          <td>
                          <Button className="btn-icon btn-round" color="warning" type="button" id="btn-editar">
                            <i className="now-ui-icons ui-2_favourite-28"></i>
                          </Button>
                          <UncontrolledTooltip target="btn-editar">
                            Editar publicacion
                          </UncontrolledTooltip>
                          <Button className="btn-icon btn-round" color="info" type="button" id="btn-eliminar">
                            <i className="now-ui-icons ui-2_favourite-28"></i>
                          </Button>
                          <UncontrolledTooltip target="btn-eliminar">
                            Eliminar publicacion
                          </UncontrolledTooltip>  
                          </td>
                        </tr>
                      )
                    })}
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
}

export default Publicacion;


/**
 * 
 * 
 
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

*/
