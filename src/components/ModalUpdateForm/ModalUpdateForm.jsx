import React, { useState, useContext} from "react";

import "./style.scss";

function ModalUpdateForm(props) {

  const token = localStorage.getItem("token");

  const [interviewEdit, setInterviewEdit] = useState({
    candidateId: props.interview.candidateId,
    candidateName: props.interview.candidateName,
    companyId: props.interview.companyId,
    companyName: props.interview.companyName,
    interviewDate: props.interview.interviewDate,
    phase: props.interview.phase,
    status: props.interview.status,
    note: props.interview.note,
  });

  function editInterview() {
    fetch(`http://localhost:3333/api/reports/${props.interview.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(interviewEdit),
    })
      .then((res) => res.json())
      .then(() => {
        props.formEditModalShouldUpdate();
        props.setShouldUpdate();
      });
  }

  return (
    <div className="modal-wrapperUpdate">
      <div className="modal-content">  
        <h2>Update Interview Form</h2>
       <div className="pWrapper">
        <p>Interview date:</p>
        <input
          type="date"
          name="interviewDate"
          defaultValue={props.interview.interviewDate}
          onChange={(e) =>
            setInterviewEdit({
              ...interviewEdit,
              interviewDate: e.target.value,
            })
          }
          />
          </div>

          <div className="pWrapper">
        <p>Phase:</p>
        <select
          name="phase"
          defaultValue={props.interview.phase}
          onClick ={(e) => {
            setInterviewEdit({
              ...interviewEdit,
              phase: e.target.value,
            });
          }}
          >
          <option>-</option>;
          <option>cv</option>;
          <option>hr</option>;
          <option>tech</option>;
          <option>final</option>;       
        </select>
          </div>

      <div className="pWrapper">
        <p>Status:</p>
        <select
          name="status"
          defaultValue={props.interview.status}
          onClick ={(e) => {
            setInterviewEdit({
              ...interviewEdit,
              status: e.target.value,
            });
          }}
          >
          <option>-</option>;
          <option>passed</option>;
          <option>declined</option>;   
        </select>
      </div>

      <div className="textAreaDiv">
        <p>Note: </p>
        <textarea 
          type="text"
          defaultValue={props.interview.note}
          name="note"
          onChange={(e) =>
            setInterviewEdit({
              ...interviewEdit,
              note: e.target.value,
            })
          }
        ></textarea>
      </div>
        <br /> <br />

        <div className="formHeader">
        <button className="submitBtn"
          onClick={() => {
            editInterview();
          }}
        >
          SUBMIT
        </button>

        <button
          className="closeBtn"
          onClick={() => props.formEditModalShouldUpdate()}
          >
          Cancel
        </button>
      </div>

        
      </div>
    </div>
  );
}

export default ModalUpdateForm;
