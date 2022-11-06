import React from "react";
// core components
import IndexNavbar from "components/Navbars/PanelNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function Panel() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    document.title = "Panel de administracion"
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
        <DarkFooter />
      </div>
    </>
  );
}

export default Panel;
