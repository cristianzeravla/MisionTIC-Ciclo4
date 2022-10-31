
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import LoginPage from "views/pages/LoginPage.js";
import PanelPage from "views/pages/PanelPage.js";
import ViewPost from "views/pages/ViewPost.js";
import NewUser from "views/panel-sections/newUser.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/panel"
          render={(props) => <PanelPage {...props} />}
        />
        <Route path="/panel/newUser" render={(props) => <NewUser {...props} />} />
        <Route
          path="/viewPost"
          render={(props) => <ViewPost {...props} />}
        />
        <Route
          path="/login"
          render={(props) => <LoginPage {...props} />}
        />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>
);
