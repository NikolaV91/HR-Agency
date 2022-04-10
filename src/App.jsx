import React from "react";
import Login from "./pages/Login/Login";
import HomePage from "./pages/HomePage/HomePage"
import { Switch, Route } from "react-router-dom";
import { useState,} from "react";





const App = () => {

  const tokenHolder = React.createContext(null)
  const Provider = tokenHolder.Provider

  
  const [tokenFromStorage,getTokenFromStorage] = useState(localStorage.getItem("token"))

  console.log(tokenFromStorage)
  

  return (
    <div className="app">
      
      <Provider value={{tokenFromStorage,getTokenFromStorage}}>
      <Switch>
        <Route path="/homepage">
          <HomePage />
        </Route>
        
        <Route path="/">
          <Login />
        </Route>
      </Switch>
      </Provider>
   
  </div>
  );
}

export default App;