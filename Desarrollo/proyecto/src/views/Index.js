import React from "react";
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

import Images from "./index-sections/Images.js";
import Tabs from "./index-sections/Tabs.js";
import Experimenta from "./index-sections/experimentos";
import Team from "./index-sections/team.js";



function Index() {
  //const TITLE = "Pagina principal";
  React.useEffect(() => {
    document.title = "La ciencia de manera divertida"
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Images />
          <Tabs />
          <Experimenta />
          <Team />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
