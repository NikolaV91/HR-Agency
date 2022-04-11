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
    }).then((res) => res.json())
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
    <div className="login">
      <h1>Hello from Logins</h1>
      <label>
        E-mail:
        <input
          type="email"
          placeholder="username"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <Link to="/homepage">
        <button onClick={logovanje}>Login</button>
      </Link>
    </div>
  );
};

export default Login;
