import {React, useState} from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { TokenProvider } from "./contexts/contexts";

import Login from "./pages/Login/Login";
import HomePage from "./pages/HomePage/HomePage";

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
