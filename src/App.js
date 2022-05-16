import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
            <Header />
        <Switch>
        <Route exact path='/'>
            <Home />
          </Route>
          <Route  path='/checkout'>
            <Checkout/>
          </Route>
          <Route  path='/login'>
            <h1>Welcome to login</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
