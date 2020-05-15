import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";

export default (
 <Router>
  <Fragment>
   <Switch>
    <div>
     <Route exact path='/' component={Home} />
    </div>
   </Switch>
  </Fragment>
 </Router>
);
