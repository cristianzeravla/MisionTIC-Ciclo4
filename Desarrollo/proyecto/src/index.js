
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

import Index from "views/Index.js";
import LoginPage from "views/pages/LoginPage.js";
import PanelPage from "views/pages/PanelPage.js";
import ViewPost from "views/pages/ViewPost.js";

import NewUser from "views/panel-sections/User.js";
import NewPost from "views/panel-sections/Post"
import NewComment from "views/panel-sections/Comments.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />}/>
        <Route path="/panel" render={(props) => <PanelPage {...props} />}/>
        <Route path="/viewPost" render={(props) => <ViewPost {...props} />}/>
        <Route path="/login" render={(props) => <LoginPage {...props} />}/>
        <Route path="/usuarios" render={(props) => <NewUser {...props} />}/>
        <Route path="/entradas" render={(props) => <NewPost {...props} />}/>
        <Route path="/comentarios" render={(props) => <NewComment {...props} />}/>
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    
  </BrowserRouter>
);

/*
import NewUser from "views/panel-sections/User.js";
import NewPost from "views/panel-sections/Post"
import NewComment from "views/panel-sections/Comments.js";

<Route
          path="/panelUsuarios"
          render={(props) => <NewUser {...props} />}
        />
        <Route
          path="/panelPublicacion"
          render={(props) => <NewPost {...props} />}
        />
        <Route
          path="/panelComentarios"
          render={(props) => <NewComment {...props} />}
        />
*/
