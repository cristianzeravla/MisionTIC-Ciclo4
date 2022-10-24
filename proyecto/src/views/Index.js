import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

import Images from "./index-sections/Images.js";
import Tabs from "./index-sections/Tabs.js";
import SignUp from "./index-sections/SignUp.js";
import Experimenta from "./index-sections/experimentos";
import Team from "./index-sections/team.js";


function Index() {
  React.useEffect(() => {
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
          <SignUp />
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;


// sections for this page
//import Images from "./index-sections/Images.js";
//import BasicElements from "./index-sections/BasicElements.js";
//import Navbars from "./index-sections/Navbars.js";

//import Pagination from "./index-sections/Pagination.js";
//import Notifications from "./index-sections/Notifications.js";
//import Typography from "./index-sections/Typography.js";
//import Javascript from "./index-sections/Javascript.js";
//import Carousel from "./index-sections/Carousel.js";
//import NucleoIcons from "./index-sections/NucleoIcons.js";
//import CompleteExamples from "./index-sections/CompleteExamples.js";

//import Examples from "./index-sections/Examples.js";
//import Download from "./index-sections/Download.js";