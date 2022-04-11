import React from "react";
import Login from "./pages/Login/Login";
import HomePage from "./pages/HomePage/HomePage"
import { Switch, Route } from "react-router-dom";
import { useState,} from "react";





const App = () => {

 

  
  
  

  return (
    <div className="app">
      
      
      <Switch>
        <Route path="/homepage">
          <HomePage />
        </Route>
        
        <Route path="/">
          <Login />
        </Route>
      </Switch>
     
   
  </div>
  );
}

export default App;