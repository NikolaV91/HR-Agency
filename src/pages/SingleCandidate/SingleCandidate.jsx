import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ModalForm from "../../components/ModalForm/ModalForm";
import ModalInterview from "../../components/ModalInterview/ModalInterview";

import "./style.scss"

const SingleCandidate = () => {
    return ( 
        <div className="singleCandidate">
            <Header />
            <div className="singleCandidateContainer">
            <ModalForm/>
            <ModalInterview/>
            </div>
            <Footer />
        </div>
     );
}
 
export default SingleCandidate;