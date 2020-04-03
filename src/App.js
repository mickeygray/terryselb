import React, { Fragment } from "react";
import {
 useLocation,
 BrowserRouter as Router,
 Switch,
 Route
} from "react-router-dom";
import Home from "./components/Home";

import "./App.css";

const App = () => {
 return (
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
};

export default App;
