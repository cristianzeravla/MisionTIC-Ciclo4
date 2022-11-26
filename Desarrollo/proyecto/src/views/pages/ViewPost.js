import React, {Component} from 'react';
import { Comment } from "semantic-ui-react";

// reactstrap components
import {
  NavLink,
  Container,
  Row,
  Col,
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
} from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import axios from 'axios';

//import CommentSections from "views/panel-sections/CommentSections.js";
let pageHeader = React.createRef();

const url="http://localhost:5000/api/comments";

class ViewPost_page extends Component {

  state={
    form:{
      nombre: '',
      apellido: '',
      correo: '',
      comentario: ''
   }
  }
  
  peticionGet=()=>{
    axios.get(url).then(response=>{
      this.setState({data: response.data});
    }).catch(error=>{
      console.log(error.message);
    })
  }
  
  peticionPost=async()=>{
    await axios.post(url,this.state.form).then(response=>{
        this.peticionGet();
      }).catch(error=>{
        console.log(error.message);
      })
  }

  modalInsertar=()=>{
  this.setState({modalInsertar: !this.state.modalInsertar});
  }

  handleChange=async e=>{
    e.persist();
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);
    }

      componentDidMount() {
        this.peticionGet();
  }


  render() {
    const { form } = this.state;

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
                  "url(" + require("assets/img/fondo-entrada1.jpg") + ")",
              }}
              ref={pageHeader}
            ></div>
            <Container>
              <div className="photo-container">
                <img alt="..." src={require("assets/img/experimentar.png")}></img>
              </div>
              <h3 className="title">Nombre experimento</h3>
              <p className="category">Categoria</p>
            </Container>
          </div>
  
          <div className="section section-descripcion">
            <Container>
              <h3 className="title text-center">¿Que haremos?</h3>
              <p>
                <strong>Resumen</strong>
              </p>
              <h3 className="title text-center">¿Que necesitamos?</h3>
  
              <h5 className="description">
                Lorem ipsum dolor sit amet, consect et elementum. Lorem ipsum
                dolor sit amet, consect
              </h5>
              <p>
                <strong>Paso a paso</strong>
              </p>
              <p>Lorem ipsum dolor sit amet, consect</p>
              <br></br>
              <p>
                <strong>Recursos</strong>
              </p>
              <p>
                <NavLink target="_blank" href="http://google.com">
                  Para mayor informacion
                </NavLink>
              </p>
            </Container>
          </div>
          <div className="section section-comentarios ">
            <Container>
              <h3 className="title text-center" dividing> Comentarios </h3>
              <Comment.Group isOpen={this.state.modalInsertar}>
                <Comment>
                  <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
                  <Comment.Content>
                    <Comment.Author as="a">Joe Henderson</Comment.Author>
                    <Comment.Text>
                      Dude, this is awesome. Thanks so much
                    </Comment.Text>
                  </Comment.Content>
                </Comment>
                <br></br>

                <Comment>
                  <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
                  <Comment.Content>
                    <Comment.Author as="a">Matt</Comment.Author>
                    <Comment.Text>
                      This has been very useful for my research. Thanks as well!
                    </Comment.Text>
                  </Comment.Content>
                </Comment>
                <br></br>
  
                <Comment>
                  <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
                  <Comment.Content>
                    <Comment.Author as="a">Jenny Hess</Comment.Author>
                    <Comment.Text>Elliot you are always so right :)</Comment.Text>
                  </Comment.Content>
                </Comment>
                <br></br>
  
              </Comment.Group>
            </Container>
          </div>
  
          <div className="section section-contact-us text-center">
            <Container>
              <h3 className="title">¿Quieres enviar un comentario?</h3>
              <p className="description">
                Para nosotros es importante saber tu punto de vista y aportes para
                este experimento
              </p>
              <Row>
                <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      name="nombre"
                      placeholder="Nombres..."
                      type="text"
                      onChange={this.handleChange}
                      value={form.nombre}
                    ></Input>
                  </InputGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons users_circle-08"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      name="apellido"
                      placeholder="Apellidos..."
                      type="text"
                      onChange={this.handleChange}
                      value={form.apellido}
                    ></Input>
                  </InputGroup>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      name="correo"
                      placeholder="Correo..."
                      type="email"
                      onChange={this.handleChange}
                      value={form.correo}
                    ></Input>
                  </InputGroup>
                  <div className="textarea-container">
                    <Input
                      cols="80"
                      name="comentario"
                      placeholder="Escribe tu comentario..."
                      rows="4"
                      type="textarea"
                      onChange={this.handleChange}
                      value={form.comentario}
                    ></Input>
                  </div>
                  <div className="send-button">
                    <Button
                      onClick={()=>this.peticionPost()}
                      block
                      className="btn-round"
                      color="info"
                      href="#"
                      //onClick={(e) => e.preventDefault()}
                      size="lg"
                    >
                      Enviar comentario
                    </Button>
                  </div>
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

export default ViewPost_page;


/**
 * 
 * 
 * 
const [firstFocus, setFirstFocus] = React.useState(false);
const [lastFocus, setLastFocus] = React.useState(false);


  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
    document.title = "Ver publicacion";
    document.body.classList.add("viewpost-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("viewpost-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });



 * 
*/