import {React} from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./pages/Login/Login";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <div className="app">
      <Switch>
          <Route path="/homepage" >
           {token ? <HomePage /> : <Redirect to="/"></Redirect>} 
          </Route>
          <Route path="/" exact>
            <Login />
          </Route>
      </Switch>
    </div>
  );
};
export default App;
