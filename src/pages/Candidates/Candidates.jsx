import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchCandidates from "../../components/SearchCandidates/SearchCandidates";
import CandidateCard from "../../components/CandidateCard/CandidateCard";

import "./style.scss"

const Candidates = () => {
    return ( 
        <div className="candidates">
            <h1>Hello from Candidats</h1>
            <Header/>
            <SearchCandidates/>
            <CandidateCard/> {/* candidates.map() */}
            <Footer/>
        </div>
     );
}
 
export default Candidates;