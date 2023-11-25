import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { Inputs, Card, Button } from "../components/navbar";
import { JobPush } from "../components/jobs";
import data from "../data/jobs.json";

const queryParameters = new URLSearchParams(window.location.search)
const i = queryParameters.get("jobNum")
const jobListings = () => {
  if(i == undefined)
    {
        return(
            <div class="main padd">
                <SpacingCont amount="14" />
                <div class="container shaded round col-8  ">
                    <SpacingCont amount="2" />
                    <h3 class="d-flex justify-content-center">
                    How'd you get here?
                    </h3>
                    <h2 class="d-flex justify-content-center">
                    ¯\_(ツ)_/¯
                    </h2>
                    <h3 class="d-flex justify-content-center">
                        Click on the navbar to get back on track
                    </h3>
                    <SpacingCont amount="2" />
                </div>
                <SpacingCont amount="14" /> 
            </div>
        )
    }
  else{
    return (
      <div class="main ">
        <SpacingCont amount="5" />
        <h2 class="d-flex justify-content-center">Search for Jobs</h2>
        <SpacingCont amount="1" />
        <div class="card-columns d-flex justify-content-center padd">
          <div class="shaded container round col-4 padd">
            <h1 class="d-flex justify-content-center padd">Filters: </h1>
            <div class="padd card-columns">
              <Inputs name="Category" type="text"/>
              <Inputs name="Location" type="text"/>
              <Inputs name="Type" type="text"/>
            </div>
            
            <div id="jobslist" class=" container round border scroll padd">
              <JobPush end="12"/>
            </div>
          </div>
        
          <JobFullData />
          
        </div>
        <SpacingCont amount="5" />
      </div>
    );
  }
  
};

function JobFullData(){
  if(i == 0)
  {
    return(
      <div id="filters" class="col-8 container round shaded padd">
        <h1 class="centered">Please select a Job Card from the left</h1>
      </div>
    )
  }
  else{
    return (
      <div id="filters" class="col-8 container round shaded">
        <div class="padd">
          <h1 class="d-flex justify-content-center padd">{data[i]["job_title"]}</h1>
          <SpacingCont amount="2"/>
          <h3>Department: {data[i]["department"]}</h3>
          <SpacingCont amount="1"/>
          <h3>Job Description: {data[i]["job_desc"]}</h3>
          <SpacingCont amount="1"/>
          <h3>Location: {data[i]["location"]}</h3>
          <SpacingCont amount="1"/>
          <h3>Type: {data[i]["employment_type"]}</h3>
          <SpacingCont amount="1"/>
          <h3>Salary: {data[i]["salary"]}</h3>
          <SpacingCont amount="1"/>
          <h3>Requirements: </h3>
          <h3> - {data[i]["job_requirement"]}</h3>
          <SpacingCont amount="3"/>
          <div class="d-flex justify-content-center">
            <Button link={"/Apply?applicationNumber=" + i} clas="-primary btn-lg col-8 " name="Apply Now"/>

          </div>
        </div>
      </div>
    )
  }
}

export default jobListings;
