import { React, useContext, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ModalForm from "../../components/ModalForm/ModalForm";
import ModalInterview from "../../components/ModalInterview/ModalInterview";
import ModalUpdateForm from "../../components/ModalUpdateForm/ModalUpdateForm"


import "./style.scss";

import {
  interviewsContext,
  candidatesContext,
} from "../../contexts/contexts";

const SingleCandidate = (props) => {
  const { interviews } = useContext(interviewsContext);
  const { candidates } = useContext(candidatesContext);

  const token = localStorage.getItem("token");

  const [interviewModal, seInterviewModal] = useState(false);
  function modalShouldUpdate() {
    seInterviewModal(!interviewModal)
  }

  const [formModal, setFormModal] = useState(false);
  function formModalShouldUpdate() {
    setFormModal(!formModal)
  }

  const [formModalUpdate, setFormModalUpdate] = useState(false);
  function formEditModalShouldUpdate() {
    setFormModalUpdate(!formModalUpdate)
  }

  const {id} = useParams();
  const singleCandidate = candidates.find((e) => e.id == id);
  const singleCandidateReport = interviews.filter((e) => e.candidateId == id);

  function deleteInterview (e) {
    fetch(`http://localhost:3333/api/reports/${e.id}`,{
      method : "DELETE",
      headers : {
        Authorization: `Bearer ${token}`,
        "Content-Type" : "application/json",
      }
    })
    .then((res)=>res.json())
    .then(() => props.setShouldUpdate());
  }

  console.log(singleCandidate);

  if(!singleCandidate){
    return null
  }

  if(singleCandidate){
    console.log(singleCandidate)
    return (
      <div className="singleCandidate">
        <Header />
    
        <div className="singleCandidateContainer">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg" alt="imageAvatar"></img>
          <div className="data">
            <h3>Name: <br /> {singleCandidate.name}</h3>
            <h3>Birthday: <br /> {singleCandidate.birthday}</h3>
            <h3>Education: <br /> {singleCandidate.education}</h3>
            <h3>Email: <br /> {singleCandidate.email}</h3>
          </div>
        </div>
  
        <table>
          <tbody>
            <tr>
              <th>Company name</th>
              <th>Interview date</th>
              <th>Phase</th>
              <th>Status</th>
              <th>View notes</th>
              <th>Edit interview</th>
              <th>Delete Interview</th>
            </tr>
            {singleCandidateReport.map((e) => (
              <>
                <tr>
                  <td>{e.companyName}</td>
                  <td>{e.interviewDate}</td>
                  <td>{e.phase}</td>
                  <td>{e.status}</td>
                  <td>
                    <button onClick={()=>{modalShouldUpdate()}}>view</button>
                    {interviewModal && <ModalInterview interview={e} modalShouldUpdate={modalShouldUpdate}/>}
                  </td>
                  <td>
                    <button onClick={()=>{formEditModalShouldUpdate()}}>edit</button>
                    {formModalUpdate && <ModalUpdateForm interview={e} formEditModalShouldUpdate={formEditModalShouldUpdate} setShouldUpdate={props.setShouldUpdate}/>}
                  </td>
                  <td>
                    <button onClick={()=>deleteInterview(e)}>delete</button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
  
        <button onClick={(e)=>{formModalShouldUpdate()}}>CREATE INTERVIEW</button>
        {formModal && <ModalForm formModalShouldUpdate={formModalShouldUpdate} setShouldUpdate={props.setShouldUpdate}/>}
  
        <Footer />
      </div>
    );
  }



};

export default SingleCandidate;
