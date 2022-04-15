import { React, useContext, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ModalForm from "../../components/ModalForm/ModalForm";
import ModalInterview from "../../components/ModalInterview/ModalInterview";
import ModalUpdateForm from "../../components/ModalUpdateForm/ModalUpdateForm";
// import garbageClosed from "../../images/garbageClosed.png";
// import garbageOpen from "../../images/garbage-open.png"
// import editIcon from "../../images/edit-icon.png";
// import viewIcon from "../../images/view-icon.png";


import "./style.scss";

import {
  interviewsContext,
  candidatesContext,
} from "../../contexts/contexts";

const SingleCandidate = (props) => {
  const { interviews } = useContext(interviewsContext);
  const { candidates } = useContext(candidatesContext);

  const token = localStorage.getItem("token");

  const [interviewModal, seInterviewModal] = useState(false); // za view
  function modalShouldUpdate(report) {
    seInterviewModal(report)
  }

  const [formModal, setFormModal] = useState(false); // za create
  function formModalShouldUpdate() {
    setFormModal(!formModal)
  }

  const [formModalUpdate, setFormModalUpdate] = useState(false); // za edit
  function formEditModalShouldUpdate(report) {
    setFormModalUpdate(report)
  }

  const { id } = useParams();
  const singleCandidate = candidates.find((e) => e.id == id);
  console.log(singleCandidate)
  const singleCandidateReport = interviews.filter((e) => e.candidateId == id);
  console.log(singleCandidateReport)

  function deleteInterview(e) {
    fetch(`http://localhost:3333/api/reports/${e.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    })
      .then((res) => res.json())
      .then(() => props.setShouldUpdate());
  }

  console.log(singleCandidate);

  if (!singleCandidate) {
    return null
  }

  if (singleCandidate) {
    console.log(singleCandidate)
    return (
      <div className="singleCandidate">
      <Header />
        <div className="singleCandidateContainer">
          <div className="data">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" alt="imageAvatar"></img>
            <div className="dataDetails">
            <h3> <span>Name:</span>  <br />  {singleCandidate.name}</h3>
            <h3> <span>Birthday:</span>  <br />  {singleCandidate.birthday.slice(4,16)}</h3>
            </div>
            <div className="dataDetails">
            <h3> <span>Education:</span> <br />{singleCandidate.education}</h3>
            <h3> <span>Email:</span> <br />{singleCandidate.email}</h3>
            </div>
          </div>
        </div>
        <h1>Interviews</h1>
        <table>
          <tbody>
            <tr>
              <th id="firstTH">Company name</th>
              <th>Interview date</th>
              <th>Phase</th>
              <th>Status</th>
              <th>View notes</th>
              <th>Edit interview</th>
              <th id="lastTH">Delete Interview</th>
            </tr>
            {singleCandidateReport.map((e) => (
              <>
                <tr className="onHover">
                  <td>{e.companyName}</td>
                  <td>{e.interviewDate}</td>
                  <td>{e.phase}</td>
                  <td>{e.status}</td>
                  <td>
                    <button className="view" onClick={() => { modalShouldUpdate(e) }}>  </button>
                  </td>
                  <td>
                    <button className="edit" onClick={() => { formEditModalShouldUpdate(e) }}> </button>
                  </td>
                  <td>
                    <button className="garbage" onClick={() => deleteInterview(e)}>
                     {/* <div ></div> */}
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>

        {interviewModal && <ModalInterview interview={interviewModal} modalShouldUpdate={modalShouldUpdate} />}
        {formModalUpdate && <ModalUpdateForm interview={formModalUpdate} formEditModalShouldUpdate={formEditModalShouldUpdate} setShouldUpdate={props.setShouldUpdate} />}

        <button className="newInterviewBTN" onClick={(e) => { formModalShouldUpdate() }}>CREATE INTERVIEW</button>
        {formModal && <ModalForm formModalShouldUpdate={formModalShouldUpdate} setShouldUpdate={props.setShouldUpdate} singleCandidate={singleCandidate}/>}

        <Footer />
      </div>
    );
  }



};

export default SingleCandidate;
