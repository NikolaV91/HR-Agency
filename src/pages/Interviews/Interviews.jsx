import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchInterviews from "../../components/SearchInterviews/SearchInterviews"
import InterviewCard from "../../components/InterviewCard/InterviewCard";
import { interviewsContext } from "../../contexts/contexts";
import { useContext } from "react";

import "./style.scss"

const Interviews = () => {

    const {interviews} = useContext(interviewsContext)

    return ( 
        <div className="interviews">
            <Header/>
            <div className="interviewsWrapper">
            <SearchInterviews/>
                <div className="interviewsMain">
                    {interviews.map((e)=>{
                        return <InterviewCard singleInterview={e} />})}
                    </div>
                </div>
            <Footer/>
        </div>
     );
}
 
export default Interviews;