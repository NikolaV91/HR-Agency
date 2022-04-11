import { React, useContext } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchCandidates from "../../components/SearchCandidates/SearchCandidates";
import CandidateCard from "../../components/CandidateCard/CandidateCard";
import { Link } from "react-router-dom";

import "./style.scss";
import { candidatesContext } from "../../contexts/contexts";

const Candidates = () => {
  const { candidates } = useContext(candidatesContext);

  return (
    <div className="candidates">
      <Header />
      <div className="candidatesWrapper">
        <SearchCandidates />
        <div className="candidatesMain">
          {candidates.map((e) => {
            return (
              <Link key={e.id} to={`/homepage/candidates/singlecandidate/${e.id}`}>
                <CandidateCard candidates={e} />
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Candidates;
