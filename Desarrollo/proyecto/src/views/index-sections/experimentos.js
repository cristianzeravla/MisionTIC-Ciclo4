import React from "react";

import { Link } from "react-router-dom";
// reactstrap components
import {
  TabContent,
  TabPane,
  Nav,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";

// core components

function Navbars() {
  return (
    <>
      <div className="section" id="sectionExperimentos">
          <Container>
          <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h4 className="title text-center">Experimenta</h4>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    
                  </Nav>
                </div>
              </Col>
              <br></br>
              <p>Este es el espacio en el que podemos averiguar cómo experimentar en el mundo de la ciencia, el espacio donde todo puede salir muy bien o muy mal.</p>
              <br></br>
              <TabContent className="gallery" >
                <TabPane>
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg1.jpg")}
                        ></img>
                        <Button
                          block
                          className="btn-round "
                          color="info"
                          to="/viewPost"
                          tag={Link}
                          outline
                          size="sm"
                        >
                        <i className="now-ui-icons arrows-1_minimal-up">
                        </i>
                        <br></br>
                        Ver publicacion
                      </Button>
                      
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg3.jpg")}
                        ></img>
                        <Button
                          block
                          className="btn-round"
                          color="info"
                          to="/viewPost"
                          tag={Link}
                          outline
                          size="sm"
                        >
                        <i className="now-ui-icons arrows-1_minimal-up">
                        </i>
                        <br></br>
                        Ver publicacion
                        </Button>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg")}
                        ></img>
                        <Button
                          block
                          className="btn-round"
                          color="info"
                          to="/viewPost"
                          tag={Link}
                          outline
                          size="sm"
                        >
                        <i className="now-ui-icons arrows-1_minimal-up">
                        </i>
                        <br></br>
                        Ver publicacion
                        </Button>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                        <Button
                          block
                          className="btn-round"
                          color="info"
                          to="/viewPost"
                          tag={Link}
                          outline
                          size="sm"
                        >
                        <i className="now-ui-icons arrows-1_minimal-up">
                        </i>
                        <br></br>
                        Ver publicacion
                    </Button>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
              <Col className="ml-auto mr-auto" md="6">
                    
              </Col>
            </Row>
          </Container>
      </div>
    </>
  );
}

export default Navbars;
