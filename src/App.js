import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {auth} from './firebase';
import { useStateValue } from "./StateProvider";


function App() {
const [state,dispatch]=useStateValue();

useEffect(()=>{
  auth.onAuthStateChanged(authUser=>{
    console.log("The user is auth user",authUser);
    if(authUser){
      dispatch({
        type:"SET_USER",
        user:authUser
      })

    }
    else{
       
    }
  })

},[])


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
