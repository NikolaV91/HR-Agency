import React from "react";
import "./style.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          console.log(res);
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
          <img src="./images/email.png" alt="" />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      <Link to="/homepage/candidates">
        <button onClick={logovanje}>Login</button>
      </Link>
    </div>
  </div>
</>
  ); 
};

export default Login;
