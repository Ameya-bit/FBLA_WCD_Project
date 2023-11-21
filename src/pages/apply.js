import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { Inputs, Card, Image } from "../components/navbar";
import { JobPush } from "../components/jobs";
import data from "../data/jobs.json";

import addedRecom from "./img/addedRecom.jpg";
import profilePers from "./img/profilePers.jpg";
import resumeCheck from "./img/resumeCheck.jpg";

const Apply = () => {
    const queryParameters = new URLSearchParams(window.location.search)
    const i = queryParameters.get("applicationNumber")
    return (
        <div class="joblist">
            <SpacingCont amount="7" />
            <div class="container shaded round col-8">
                <SpacingCont amount="2" />
                <h2 class="d-flex justify-content-center">
                    Congratulations! You are almost there!
                </h2>
                <SpacingCont amount="2" />
                <div class="col-8 ">
                    <Card 
                        title={data[i]['job_title']}
                        loc={"Location: " + data[i]["location"]}
                        emp={"Job Type: " + data[i]["employment_type"]}
                        desc={"Description: " + data[i]["job_desc"]}
                        clas="padd"
                    />
                </div>  
                <SpacingCont amount="2" /> 
                <div class="padd">
                    <Inputs name="First Name" clas="col-6"/>
                    <Inputs name="Last Name" clas="col-6"/>
                    <Inputs name="Email " clas="col-6"/>
                </div>
                
                <SpacingCont amount="2" />
                
            </div>
            <SpacingCont amount="2" /> 
        </div>
    );
};

function param() {
    const queryParameters = new URLSearchParams(window.location.search)
    const type = queryParameters.get("type")
    const name = queryParameters.get("name")
}

export default Apply;