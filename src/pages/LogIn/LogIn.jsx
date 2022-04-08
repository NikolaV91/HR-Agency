import React from "react";
import "./style.scss"
import {useState} from "react"

const Login = (props) => {



const [email,setEmail] = useState("")
const [password, setPassword] = useState("")


const setUsername = (input) => {
    setEmail(input)
}

const setPass = (input) => {
    setPassword(input)
}





console.log(email);
console.log(password)


return ( 
    <div className="login">
            <h1>Hello from Login2</h1> 
            <label>
                Username:
                <input type="email" placeholder="username" onChange={(e)=> setUsername(e.target.value)}/>
            </label>
            <label >
                Password:
            <input type="password" placeholder="password" onChange={(e)=> setPass(e.target.value)}/>
            </label>
        </div>
     );
}
 
export default Login;