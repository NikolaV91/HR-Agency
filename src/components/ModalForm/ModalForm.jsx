import React, { useState, useContext } from "react";
import "./style.scss";

import { companiesContext, candidatesContext } from "../../contexts/contexts";

function ModalForm(props) {
  const { companies } = useContext(companiesContext);
  const { candidates } = useContext(candidatesContext);

  const token = localStorage.getItem("token");

  const [interview, setInterview] = useState({
    candidateId: 0,
    candidateName: "",
    companyId: 0,
    companyName: "",
    interviewDate: "",
    phase: "",
    status: "",
    note: "",
  });

  function submitInterview() {
    fetch(`http://localhost:3333/api/reports`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(interview),
    })
      .then((res) => res.json())
      .then(() => {
        props.formModalShouldUpdate();
        props.setShouldUpdate();
      });
  }

  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <button
          className="close-modal"
          onClick={() => props.formModalShouldUpdate()}
        >
          X
        </button>
       
        <p>Candidate:</p>
        <select
          name="candidate"
          onClick={(e) => {
            setInterview({
              ...interview,
              candidateId: e.target.value,
              candidateName: e.target.options[e.target.selectedIndex].text,
            });
          }}
        >
          <option>-</option>;
          {candidates.map((e) => {
            return <option key={e.id} value={e.id}>{e.name}</option>;
          })}
        </select>

        <p>Company:</p>
        <select
          name="company"
          onClick ={(e) => {
            setInterview({
              ...interview,
              companyId: e.target.value,
              companyName: e.target.options[e.target.selectedIndex].text,
            });
          }}
        >
          <option>-</option>;
          {companies.map((e) => {
            return <option key={e.id} value={e.id}>{e.name}</option>;
          })}
        </select>

        <p>Interview date:</p>
        <input
          type="date"
          name="interviewDate"
          onChange={(e) =>
            setInterview({
              ...interview,
              interviewDate: e.target.value,
            })
          }
        />

        <p>Phase:</p>
        <select
          name="phase"
          onClick ={(e) => {
            setInterview({
              ...interview,
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
        
        <p>Status:</p>
        <select
          name="status"
          onClick ={(e) => {
            setInterview({
              ...interview,
              status: e.target.value,
            });
          }}
        >
          <option>-</option>;
          <option>passed</option>;
          <option>declined</option>;   
        </select>

        <p>Note: </p>
        <input
          type="text"
          name="note"
          onChange={(e) =>
            setInterview({
              ...interview,
              note: e.target.value,
            })
          }
        />
        <br /> <br />
        <button
          onClick={() => {
            submitInterview();
          }}
        >
          SUBMIT NEW INTERVIEW
        </button>

      </div>
    </div>
  );
}

export default ModalForm;
