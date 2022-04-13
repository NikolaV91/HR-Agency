import React, { useState, useContext} from "react";

import "./style.scss";

import { companiesContext, candidatesContext } from "../../contexts/contexts";

function ModalUpdateForm(props) {
  const { companies } = useContext(companiesContext);
  const { candidates } = useContext(candidatesContext);

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
    <div className="modal-wrapper">
      <div className="modal-content">
        <button
          className="close-modal"
          onClick={() => props.formEditModalShouldUpdate()}
        >
          X
        </button>
       
        <p>Candidate:</p>
        <select
          name="candidate"
          defaultValue={props.interview.candidateName}
          onClick={(e) => {
            setInterviewEdit({
              ...interviewEdit,
              candidateId: e.target.value,
              candidateName: e.target.options[e.target.selectedIndex].text,
            });
          }}
        >
          {candidates.map((e) => {
            return <option key={e.id} value={e.id}>{e.name}</option>;
          })}
        </select>

        <p>Company:</p>
        <select
          name="company"
          defaultValue={props.interview.companyName}
          onClick ={(e) => {
            setInterviewEdit({
              ...interviewEdit,
              companyId: e.target.value,
              companyName: e.target.options[e.target.selectedIndex].text,
            });
          }}
        >
          {companies.map((e) => {
            return <option key={e.id} value={e.id}>{e.name}</option>;
          })}
        </select>

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
          <option>cv</option>;
          <option>hr</option>;
          <option>tech</option>;
          <option>final</option>;       
        </select>

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
          <option>passed</option>;
          <option>declined</option>;   
        </select>

        <p>Note: </p>
        <input
          type="text"
          defaultValue={props.interview.note}
          name="note"
          onChange={(e) =>
            setInterviewEdit({
              ...interviewEdit,
              note: e.target.value,
            })
          }
        />
        <br /> <br />

        <button
          onClick={() => {
            editInterview();
          }}
        >
          SUBMIT CHANGES
        </button>
      </div>
    </div>
  );
}

export default ModalUpdateForm;
