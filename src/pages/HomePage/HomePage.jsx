import { React, useState, useEffect } from "react";
import Candidates from "../Candidates/Candidates";
import Interviews from "../Interviews/Interviews";
import SingleCandidate from "../SingleCandidate/SingleCandidate";
import { Switch, Route } from "react-router-dom";
import "./style.scss";

import {
  CandidatesProvider,
  InterviewsProvider,
  CompaniesProvider,
  ActivePageProvider,
} from "../../contexts/contexts";

const HomePage = () => {
  const [candidates, setCandidates] = useState([]);
  const [interviews, setInterviews] = useState([]);
  const [companies, setCompanies] = useState([]);

  const [shouldUpdate, setUpdate] = useState(false);

  const [activePage, setActivePage] = useState("candidates")

  useEffect(() => {
    fetch("http://localhost:3333/api/candidates")
      .then((res) => res.json())
      .then((data) => setCandidates(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3333/api/reports")
      .then((res) => res.json())
      .then((data) => setInterviews(data));
  }, [shouldUpdate]);

  useEffect(() => {
    fetch("http://localhost:3333/api/companies")
      .then((res) => res.json())
      .then((data) => setCompanies(data));
  }, []);

  function setShouldUpdate() {
    setUpdate(!shouldUpdate)
  }

  return (
    <div className="homePage">
      <Switch>
        <ActivePageProvider value={{activePage, setActivePage}}>
        <CandidatesProvider value={{ candidates, setCandidates }}>
          <InterviewsProvider value={{ interviews, setInterviews }}>
            <CompaniesProvider value={{ companies, setCompanies }}>
            
              <Route path="/homepage/candidates/singlecandidate/:id">
                <SingleCandidate setShouldUpdate={setShouldUpdate}/>
              </Route>
              <Route path="/homepage/candidates">
                <Candidates />
              </Route>
              <Route path="/homepage/interviews">
                <Interviews setShouldUpdate={setShouldUpdate} />
              </Route>

            </CompaniesProvider>
          </InterviewsProvider>
        </CandidatesProvider>
        </ActivePageProvider>
      </Switch>
    </div>
  );
};
export default HomePage;
