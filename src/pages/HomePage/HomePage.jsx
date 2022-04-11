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
} from "../../contexts/contexts";

const HomePage = () => {
  const [candidates, setCandidates] = useState([]);
  const [interviews, setInterviews] = useState([]);
  const [companies, setCompanies] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3333/api/candidates")
      .then((res) => res.json())
      .then((data) => setCandidates(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3333/api/reports")
      .then((res) => res.json())
      .then((data) => setInterviews(data));
  }, []);

  console.log(candidates);
  console.log(interviews);

  return (
    <div className="homePage">
      <Switch>
        <CandidatesProvider value={{ candidates, setCandidates }}>
          <InterviewsProvider value={{ interviews, setInterviews }}>
            <CompaniesProvider value={{ companies, setCompanies }}>
              <Route path="/homepage/candidates">
                <Candidates />
              </Route>
              <Route path="/homepage/interviews">
                <Interviews />
              </Route>
              <Route path="/homepage/singlecandidate">
                <SingleCandidate />
              </Route>
            </CompaniesProvider>
          </InterviewsProvider>
        </CandidatesProvider>
      </Switch>
    </div>
  );
};
export default HomePage;
