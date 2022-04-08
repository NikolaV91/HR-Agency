import React from "react";
import { Link } from "react-router-dom";
import "./style.scss"


const CandidateCard = () => {
    return (
        <Link to="/homepage/singlecandidate">
            <div>Hello from Candidate Card</div>
        </Link>
     );
}
 
export default CandidateCard;