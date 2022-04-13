import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import logo221 from "../../images/logo221.png"
import "./style.scss"

const Header = () => {
    let history = useHistory()
    const removeToken = ()=>{
        localStorage.removeItem("token")
        history.push("/")

    }
    return ( 
        <div className="header">
            <img src={logo221} alt="" />
            <div className="headerButton">
                <Link to="/homepage/candidates"><button>CANDIDATES</button></Link>
                <Link to="/homepage/interviews"><button>INTERVIEWS</button></Link>
                <button className="logout" onClick={removeToken}>LOG OUT</button>
            </div>
        </div>
     );
}
 
export default Header;