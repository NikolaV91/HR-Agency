import { React, useState } from "react";
import "./style.scss";

const ModalInterview = (props) => {

  return (
    <div className="modalInterview">
      <div className="modal-wrapper">
        <div className="modal-content">
          <button className="close-modal" onClick={(e)=>{
              props.modalShouldUpdate()
          }}> X </button>
          <div>
          <p>Candidate name: {props.interview.candidateName}</p>
          <p>Company name: {props.interview.companyName}</p>
          <p>Interview date: {props.interview.interviewDate}</p>
          <p>Phase: {props.interview.phase}</p>
          <p>Status: {props.interview.candidateName}</p>
          </div>
          <p>Note: {props.interview.note}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalInterview;
