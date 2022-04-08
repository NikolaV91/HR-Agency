import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchInterviews from "../../components/SearchInterviews/SearchInterviews"
import InterviewCard from "../../components/InterviewCard/InterviewCard";

import "./style.scss"

const Interviews = () => {
    return ( 
        <div className="interviews">
            <h1>Hello from Interviews</h1>
            <Header/>
                <SearchInterviews/>
                <InterviewCard/> {/* reports.map() */}
            <Footer />
        </div>
     );
}
 
export default Interviews;