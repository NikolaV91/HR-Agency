import React from "react";
import { Link } from "react-router-dom";
import "./style.scss"

const Header = () => {
    return ( 
        <div className="header">
            <h1>HR Agency</h1>
            <div className="headerButton">
                <Link to="/homepage/candidates"><button>Candidates</button></Link>
                <Link to="/homepage/interviews"><button>Interviews</button></Link>
            </div>
           <Link to="/"><button className="logout">Log Out</button></Link> 
        </div>
     );
}
 
export default Header;