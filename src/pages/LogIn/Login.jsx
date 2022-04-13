import React, { useContext } from "react";
import "./style.scss";
import { useState } from "react";
import emailOfc from "../../images/emailOfc.png";
import icon2 from "../../images/icon2.png";
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
      <div className="signInDiv">
        <input id="inputEmail" 
          type="email"
          placeholder="Email"
          pattern="[a-z]*"
          onChange={(e) => setEmail(e.target.value)}
          />
        <img src={emailOfc} alt="" />
        </div>
        <div className="signInDiv">
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          />
          <img src={icon2} alt="" />
          </div>
      
        <button onClick={logovanje} >LOGIN</button>
      
    </div>
  </div>
</>
  ); 
};

export default Login;
