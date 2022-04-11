import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchCandidates from "../../components/SearchCandidates/SearchCandidates";
import CandidateCard from "../../components/CandidateCard/CandidateCard";
import {candidatesContext} from "../../contexts/contexts"

import "./style.scss"

const Candidates = () => {

    const {candidates} = useContext(candidatesContext)
    


    return (
        <div className="candidates">
            <Header/>
            <div className="candidatesWrapper">
            <SearchCandidates/>
                <div className="candidatesMain">
                    {candidates.map((e)=>{
                        return <CandidateCard singleCandidate={e} />})}
                    </div>
                </div>
            <Footer/>
        </div>
     );
}
 
export default Candidates;