/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <div className="copyright" id="copyright">
        Copyright © {new Date().getFullYear()}, Todos los derechos reservados{" "}
          . Coded by{" "}
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
