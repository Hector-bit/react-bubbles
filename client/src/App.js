import React, { useState } from "react";
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/login">BubblePage</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute 
          path="/bubblepage" 
          component={BubblePage}/>
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
