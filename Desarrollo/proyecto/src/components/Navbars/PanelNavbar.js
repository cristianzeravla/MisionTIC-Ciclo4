import React from "react";
import {Link } from "react-router-dom";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand target="_blank" id="navbar-brand">
              Panel de administación
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              <div class="copyright">
                Copyright ©{" "}
                <strong>
                  <span>Todos los derechos reservados</span>
                </strong>
                .
              </div>
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  to="/usuarios"
                  tag={Link}
                  outline
                  id="panelUser"
                >
                  <i className="now-ui-icons users_single-02"></i>
                  <p>Usuarios</p>
                </NavLink>
                <UncontrolledTooltip target="#panelUser">
                  Control usuarios
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/entradas"
                  tag={Link}
                  outline
                  id="panelPost"
                >
                  <i className="now-ui-icons files_single-copy-04"></i>
                  <p>Publicaciones</p>
                </NavLink>
                <UncontrolledTooltip target="#panelPost">
                  Control publiciones
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/comentarios"
                  tag={Link}
                  outline
                  id="panelComment"
                >
                  <i className="now-ui-icons files_paper"></i>
                  <p>Comentarios</p>
                </NavLink>
                <UncontrolledTooltip target="#panelComment">
                  Control comentarios
                </UncontrolledTooltip>
              </NavItem>

              <NavItem>
                <NavLink href="https://twitter.com" target="_blank" id="twitter-tooltip">
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Siguenos en Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.facebook.com/" target="_blank" id="facebook-tooltip">
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Me gusta en Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.instagram.com/" target="_blank" id="instagram-tooltip">
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Siguenos en Instagram
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink to="/login" tag={Link} outline id="login-tooltip">
                  <i className="now-ui-icons sport_user-run"></i>
                  <p className="d-lg-none d-xl-none">Logout</p>
                </NavLink>
                <UncontrolledTooltip target="#login-tooltip">
                  Cerrar sesion
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
