import React from "react";
import Login from "./pages/Login/Login";
import HomePage from "./pages/HomePage/HomePage";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";

import { TokenProvider } from "../../contexts/contexts";

const App = () => {
  const [token, setToken] = useState("");

  return (
    <div className="app">
      <Provider value={{ tokenFromStorage, getTokenFromStorage }}>
        <Switch>
          <TokenProvider value={{ token, setToken }}>
            <Route path="/homepage">
              <HomePage />
            </Route>

            <Route path="/">
              <Login />
            </Route>
          </TokenProvider>
        </Switch>
      </Provider>
    </div>
  );
};

export default App;
