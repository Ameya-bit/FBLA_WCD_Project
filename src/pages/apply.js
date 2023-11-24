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
        <div class="main">
            <SpacingCont amount="7" />
            <div class="container shaded round col-8  ">
                <SpacingCont amount="2" />
                <h2 class="d-flex justify-content-center">
                    Congratulations! You are almost there!
                </h2>
                <SpacingCont amount="2" />
                <div class="d-flex justify-content-center">
                <div class="col-10">
                    <Card 
                        title={data[i]['job_title']}
                        loc={"Location: " + data[i]["location"]}
                        emp={"Job Type: " + data[i]["employment_type"]}
                        desc={"Description: " + data[i]["job_desc"]}
                        clas="padd"
                        button="no"
                    />
                </div> 
                </div>
                 
                <SpacingCont amount="2" /> 
                <div class="d-flex justify-content-center">
                <div class="padd ">
                    <h3 class="d-flex justify-content-center padd">Personal Information: </h3>
                    <Inputs name="First Name" clas=" padd" type="text"/>
                    <Inputs name="Last Name" clas="padd" type="text"/>
                    <Inputs name="Email " clas=" padd" type="text"/>
                    <Inputs name="Phone " clas=" padd" type="text"/>

                    <h3 class="d-flex justify-content-center padd">Additional Information: </h3>
                    <Inputs name="LinkedIn Profile" clas=" padd" type="text"/>

                    <h3 class="d-flex justify-content-center padd">Enter Your Resume: </h3>
                    <Inputs name="" clas=" padd" type="file"/>
                    <h3 class="d-flex justify-content-center padd">Anything You Want To Highlight For Our Team: </h3>
                    <Inputs name="100 Word Limit" clas=" padd" type="text"/>
                </div>
                </div>
                
                
                <SpacingCont amount="2" />
                
            </div>
            <SpacingCont amount="2" /> 
        </div>
    );
};



export default Apply;