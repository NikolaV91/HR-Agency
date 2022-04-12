import { React, useContext } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CandidateCard from "../../components/CandidateCard/CandidateCard";
import { candidatesContext } from "../../contexts/contexts"
import { useState } from "react";

import "./style.scss";


const Candidates = () => {
    const { candidates } = useContext(candidatesContext);

    const [searchTerm, setSearchTerm] = useState("")
    console.log(searchTerm);

    return (
        <div className="candidates">
            <Header />
            <div className="candidatesWrapper">
                <div className="searchCandidates">
                    <input type="text" placeholder="Search Candidates by name" onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
                <div className="candidatesMain">
                    {candidates.filter((e) => {
                        if (searchTerm === "") {
                            return e
                        }
                        else if (e.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return e
                        }
                    }).map((e) => {
                        return <CandidateCard key={e.id} singleCandidate={e} />
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Candidates;
