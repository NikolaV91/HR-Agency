import React from "react";
import { Link } from "react-router-dom";
import "./style.scss"

const Header = () => {
    const removeToken = ()=>{
        localStorage.removeItem("token")
    }
    return ( 
        <div className="header">
            <h1>HR Agency</h1>
            <div className="headerButton">
                <Link to="/homepage/candidates"><button>Candidates</button></Link>
                <Link to="/homepage/interviews"><button>Interviews</button></Link>
                <Link to="/"><button className="logout" onClick={removeToken}>Log Out</button></Link> 
            </div>
        </div>
     );
}
 
export default Header;