import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components


function Tabs() {
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
          <h2>¿Que son los experimentos cientificos?</h2>
            <Col className="ml-auto mr-auto" md="12" xl="12">
                <p className="category">
                Un experimento es todo aquel proceso complejo en el que se emplean medidas y se realizan pruebas para comprobar y estudiar algún proceso antes de ejecutarlo por completo. En él se realizan todo tipo de estudios, a fin de constatar la funcionalidad del objeto en estudio. Las teorías e hipótesis nacen a partir de los experimentos que se realizan entorno a una premisa. Los experimentos son de vital importancia en el campo científico, son parte esencial de los estudios que se realizan en un laboratorio.
                </p>
              <Card>
                <CardHeader>
                  <Nav
                    className="nav-tabs-neutral justify-content-center"
                    data-background-color="blue"
                    role="tablist"
                    tabs
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        Fisica
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        Quimica
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        Biologicos
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("4");
                        }}
                      >
                        Tecnologicos
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "5" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("5");
                        }}
                      >
                        Deportivos
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "6" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("6");
                        }}
                      >
                        Matematicos
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"pills" + pills}
                  >
                    <TabPane tabId="pills1">
                      <p>
                      Experimentar es el camino por el cual la ciencia se perfecciona. Hacerlo es poner a prueba las hipótesis más queridas y tal vez comprobar que la idea más arraigada se tenga que transformar. Los siguientes experimentos son unos sencillos que nos demuestran, entre los resultados que son constantes, que la física y la química están presentes en todo nuestro entorno.
                      </p>
                    </TabPane>
                    <TabPane tabId="pills2">
                      <p>
                      Un experimento es un procedimiento llevado a cabo para apoyar, refutar, o validar una hipótesis. Los experimentos proporcionan idea sobre causa-y-efecto por la demostración del resultado, que ocurre cuándo un factor particular es manipulado
                      </p>
                    </TabPane>
                    <TabPane tabId="pills3">
                      <p>
                      El aporte de ciertos modelos matemáticos al avance de las ciencias biológicas ha aumentado de forma dramática en la última década. Esto se debe en parte al desarrollo de los métodos computacionales, ya que éstos permiten la resolución aproximada de las ecuaciones en los modelos. Existen muchos fenómenos biológicos en los que una membrana o una fibra elástica interacciona con el fluido que la rodea. Por ejemplo, las venas son estructuras flexibles y elásticas por donde fluye la sangre. El músculo cardíaco está formado por fibras musculares elásticas que promueven el flujo de la sangre en todo el cuerpo. Los flagelos de microorganismos como bacterias y espermatozoides son fibras flexibles que permiten el movimiento del microorganismo. Los modelos matemáticos y las simulaciones numéricas que se presentan en este artículo son ejemplos de herramientas para el estudio y el entendimiento de este tipo de fenómenos.
                      </p>
                    </TabPane>
                    <TabPane tabId="pills4">
                      <p>
                      Un proyecto tecnológico, también llamado proceso tecnológico, es un proceso, definido en un plan, que se diseña y se lleva a cabo para crear o modificar un producto que sea capaz de cubrir una necesidad o una demanda de los usuarios.
                      </p>
                    </TabPane>
                    <TabPane tabId="pills5">
                      <p>
                      La Metodología de la Investigación constituye una herramienta básica de las ciencias aplicadas al deporte, indispensable para la generación de nuevos conocimientos, así como para la solución de problemas relacionados con el entrenamiento físico y con el logro de óptimos resultados a nivel competitivo. En este sentido, resulta común, que tanto entrenadores como investigadores del deporte, se formulen interrogantes tales como: ¿Cuáles son las causas del bajo rendimiento de mis atletas? ¿Qué efecto tendrá el consumo de una determinada sustancia? ¿Cómo puedo hacer más eficiente la sesión de entrenamiento? Sin embargo, estas preguntas no pueden ser respondidas correctamente sin la ejecución de un riguroso y sistemático proceso de investigación caracterizado por el empleo de una metodología que incluye el uso de diseños, técnicas e instrumentos válidos y confiables. Sólo así, los resultados obtenidos podrán ser generalizables y aplicables en la solución de los problemas científicos del deporte
                      </p>
                    </TabPane>
                    <TabPane tabId="pills6">
                      <p>
                      Los experimentos matemáticos son considerados como tipos de tareas que pueden ser utilizados para propiciar la elaboración de conjeturas y su comprobación a partir del análisis de situaciones de la vida práctica que exigen al escolar investigar y desarrollar formas de trabajo y de pensamiento matemático.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
