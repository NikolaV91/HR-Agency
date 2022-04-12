import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.scss"

const Header = () => {
    let history = useHistory()
    const removeToken = ()=>{
        localStorage.removeItem("token")
        history.push("/")

    }
    return ( 
        <div className="header">
            <h1>HR Agency</h1>
            <div className="headerButton">
                <Link to="/homepage/candidates"><button>Candidates</button></Link>
                <Link to="/homepage/interviews"><button>Interviews</button></Link>
                <button className="logout" onClick={removeToken}>Log Out</button>
            </div>
        </div>
     );
}
 
export default Header;