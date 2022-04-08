import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchCandidates from "../../components/SearchCandidates/SearchCandidates";
import CandidateCard from "../../components/CandidateCard/CandidateCard";

import "./style.scss"

const Candidates = () => {

    


    return ( 
        <div className="candidates">
            <Header/>
                <div className="candidatesMain">
            <SearchCandidates/>
            <CandidateCard/> {/* candidates.map() */}
                </div>
            <Footer/>
        </div>
     );
}
 
export default Candidates;