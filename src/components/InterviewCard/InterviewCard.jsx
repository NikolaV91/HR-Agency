import React from "react";


import "./style.scss"

const InterviewCard = (props) => {
   
    return (
        <div className="interviewCard">
            <h2 className="names">{props.singleInterview.companyName} <br /><span>Company</span> </h2>
            <h2 className="names">{props.singleInterview.candidateName} <br /><span>Candidates</span></h2>
            <h2 className="dates">{props.singleInterview.interviewDate} <br /><span>Date of Interview</span></h2>
            <h2 className="phase">{props.singleInterview.phase} <br /><span>Phase</span></h2>
            <h2 className={props.singleInterview.status === "passed" ? "status greenStatus" : "status redStatus"}>{props.singleInterview.status} <br /><span>Status</span></h2>
        </div>
    );
}

export default InterviewCard;