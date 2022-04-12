import React, { useContext } from "react";
import "./style.scss";
import { useState } from "react";

import {tokenContext} from "../../contexts/contexts"
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setToken} = useContext(tokenContext)
  let history = useHistory()

  const logovanje = () => {
    console.log(logovanje);
    fetch("http://localhost:3333/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (typeof res === "string") {
          alert("Niste dobro uneli korisnicko ime ili sifru");
        }
        if (typeof res === "object") {
          localStorage.setItem("token", res.accessToken);
          setToken(res.accessToken)
          history.push("/homepage/candidates/")
          if (localStorage.getItem("token")) {
            alert("Uspesno ste se ulogovali");
          }
        }
      });
  };

  return (
<>
  <div className="loginWrapper">
  <div className="loginDarkDiv">
    <div className="textDiv">
    <p> <span>H</span>ELLO <span>R</span>OOKIES <br/> WELCOME TO WORLD OF OPPORTUNITIES! </p>
    </div> 
  </div>
    <div className="loginLightDiv">
      <h1>SIGN IN</h1>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          />
          <img src="" alt="" />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      
        <button onClick={logovanje}>Login</button>
      
    </div>
  </div>
</>
  ); 
};

export default Login;
