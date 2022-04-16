import { React, useState } from "react";
import "./style.scss";

const ModalInterview = (props) => {

  return (
    <div className="modalInterview">
      <div className="modal-wrapper">
        <div className="modal-content">
          <button className="close-modal" onClick={(e)=>{
              props.modalShouldUpdate()
          }}>Close</button>
          <div>
          <p> <span>Candidate name:</span>  {props.interview.candidateName}</p>
          <p> <span>Company name:</span> {props.interview.companyName}</p>
          <p> <span>Interview date:</span> {props.interview.interviewDate}</p>
          <p> <span>Phase:</span> {props.interview.phase}</p>
          <p> <span>Status:</span> {props.interview.status}</p>
          </div>
          <p className="note">Notes:</p>
          <textarea>{props.interview.note}</textarea>
        </div>
      </div>
    </div>
  );
};

export default ModalInterview;
