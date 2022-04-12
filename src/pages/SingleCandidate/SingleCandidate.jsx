import { React, useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ModalForm from "../../components/ModalForm/ModalForm";
import ModalInterview from "../../components/ModalInterview/ModalInterview";
import "./style.scss";
import {
  tokenContext,
  interviewsContext,
  companiesContext,
  candidatesContext,
} from "../../contexts/contexts";
const SingleCandidate = (props) => {
  const { token } = useContext(tokenContext);
  const { interviews } = useContext(interviewsContext);
  const { companies } = useContext(companiesContext);
  const { candidates } = useContext(candidatesContext);
  const { id } = useParams();
  const singleCandidate = candidates.find((e) => e.id == id);
  const singleCandidateReport = interviews.filter((e) => e.candidateId == id);
  return (
    <div className="singleCandidate">
      <Header />
      {/* <ModalForm/>
            <ModalInterview/> */}
      <div className="singleCandidateContainer">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRALZAcoGIUr4WMJpsN3PqonWdIMd1oGXpbow&usqp=CAU"></img>
        <div className="data">
          <h3>Name: {singleCandidate.name}</h3>
          <h3>Birthday: {singleCandidate.birthday}</h3>
          <h3>Education: {singleCandidate.education}</h3>
          <h3>Email: {singleCandidate.email}</h3>
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
                 <td><button>view</button></td>
                 <td><button>edit</button></td>
                 <td><button>delete</button></td>
              </tr>
              </>
            ))}
          </tbody>
        </table>
      <Footer />
    </div>
  );
};
export default SingleCandidate;