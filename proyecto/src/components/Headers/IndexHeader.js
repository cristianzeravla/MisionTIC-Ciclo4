/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

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
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/icono.ico")}
            ></img>
            <h1 className="h1-seo">Aprende experimentos cientificos de forma entretenida e interactiva.</h1>
            <h3>Este es un espacio en el que podremos aprender acerca del maravilloso mundo de la ciencia y podemos socializar acerca de ella</h3>
          </div>
          <h6 className="category category-absolute">
            Designed by{" "}
            . Coded by{" "}
            <a target="_blank">
            </a>
            .
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
