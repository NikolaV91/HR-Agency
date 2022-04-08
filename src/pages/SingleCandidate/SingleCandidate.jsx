import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ModalForm from "../../components/ModalForm/ModalForm";
import ModalInterview from "../../components/ModalInterview/ModalInterview";

import "./style.scss"

const SingleCandidate = () => {
    return ( 
        <div className="singleCandidate">
            <h1>Hello from SingleCandidate</h1>
            <Header />
            <ModalForm/>
            <ModalInterview/>
            <Footer />
        </div>
     );
}
 
export default SingleCandidate;