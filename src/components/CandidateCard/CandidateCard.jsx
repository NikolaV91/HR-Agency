import React from "react";
import "./style.scss";



const CandidateCard = (props) => {

    return (
        <div className="candidateCard">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" alt="" />
            <h1>{props.candidates.name}</h1>
            <h3>{props.candidates.email}</h3>
        </div>
    );
}

export default CandidateCard;