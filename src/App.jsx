import React from "react";
import Login from "./pages/Login/Login";
import HomePage from "./pages/HomePage/HomePage";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import { TokenProvider } from "./contexts/contexts";
import { Redirect } from "react-router-dom";


const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  console.log(token);

  return (
    <div className="app">
      <Switch>
        <TokenProvider value={{ token, setToken }}>
          <Route path="/homepage" >
           {token ? <HomePage /> : <Redirect to="/"></Redirect>} 
          </Route>
          <Route path="/" exact>
            <Login />
          </Route>
        </TokenProvider>
      </Switch>
    </div>
  );
};
export default App;
