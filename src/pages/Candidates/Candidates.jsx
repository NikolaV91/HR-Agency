import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CandidateCard from "../../components/CandidateCard/CandidateCard";
import { candidatesContext } from "../../contexts/contexts"
import { useState } from "react";
import { Link } from "react-router-dom";

import "./style.scss"

const Candidates = () => {

    const { candidates } = useContext(candidatesContext)

    const [searchTerm, setSearchTerm] = useState("")

    return (
        <div className="candidates">
            <Header />
            <div className="candidatesWrapper">
                <div className="searchCandidates">
                    <input type="text" placeholder="Search Candidates by name" onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
                <div className="candidatesMain">
                    {candidates
                    .filter((e) => {
                            if (searchTerm === "") {
                                return e
                            }
                            else if (e.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return e
                            } else return null
                        })
                        .map((e) => {
                            return(
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
}

export default Candidates;