import React from "react";
import "./style.scss"
import {useState} from "react"
import HomePage from "../HomePage/HomePage"

const Login = (props) => {



const [email,setEmail] = useState("")
const [password, setPassword] = useState("")
// const [token, setToken]= useState(localStorage.getItem("token"))
const [enter ,setEntry] = useState(false)




const setUsername = (event) => {
    setEmail(event)}

const setPass = (event) => {
    setPassword(event)
}


const logovanje = () => {
    fetch('http://localhost:3333/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then(res => res.json()).then(res=> {if(typeof res === "string"){
        alert("Niste dobro uneli korisnicko ime ili sifru")
        
    }
    else if(typeof res === "object"){
        setEntry(true)
        localStorage.setItem("token", res.accessToken)
        // setToken(localStorage.getItem("token"))
         if (localStorage.getItem("token")){
            alert("Uspesno ste se ulogovali")
    } 
    
    }

    } )
   
        
}


// console.log(token)





return ( 
    enter ? <HomePage/> :
    <div className="login">
       
            <h1>Hello from Logins</h1> 
            <label>
                E-mail:
                <input type="email" placeholder="username" onChange={(e)=> setUsername(e.target.value)}/>
            </label>
            <label >
                Password:
            <input type="password" placeholder="password" onChange={(e)=> setPass(e.target.value)}/>
            </label>
            <button onClick={logovanje}>Login</button>
        </div>
        
     );
}
 
export default Login;