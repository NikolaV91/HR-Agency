import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import logo221 from "../../images/logo221.png"
import "./style.scss"

const Header = () => {

    const [activePage, setActivePage] = useState("candidates")

    let history = useHistory()
    const removeToken = ()=>{
        localStorage.removeItem("token")
        history.push("/")
    }

    return ( 
        <div className="header">
            <img src={logo221} alt="" />
            <div className="headerButton">
                <Link to="/homepage/candidates"><button onClick={()=>setActivePage("candidates")} className={activePage === "candidates" ? 'active' : null}>CANDIDATES</button></Link>
                <Link to="/homepage/interviews"><button onClick={()=>setActivePage("interviews")} className={activePage === "interviews" ? 'active' : null}>INTERVIEWS</button></Link>
                <button className="logout" onClick={removeToken}>LOG OUT</button>
            </div>
        </div>
     );
}
 
export default Header;