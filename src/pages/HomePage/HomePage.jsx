import React from "react";
import Candidates from "../Candidates/Candidates";
import Interviews from "../Interviews/Interviews";
import SingleCandidate from "../SingleCandidate/SingleCandidate";
import { Switch, Route } from "react-router-dom";

import "./style.scss";

const HomePage = () => {
    return ( 
        <div className="homePage">
            <h1>Hello from HomePage</h1>
            <Switch>
                <Route path="/homepage/candidates">
                    <Candidates />
                </Route>
                <Route path="/homepage/interviews">
                    <Interviews />
                </Route>
                <Route path="/homepage/singlecandidate">
                    <SingleCandidate />
                </Route>
            </Switch>
        </div>
     );
}
export default HomePage;