import React from "react";
import { SpacingCont } from "./qualityOfLife";
import { Card, Image, OffCanvas } from "../components/navbar";
import { JobPush, StatusCard } from "../components/jobs.js";


import addedRecom from "./img/addedRecom.jpg";
import profilePers from "./img/profilePers.jpg";
import resumeCheck from "./img/resumeCheck.jpg";
import main from "./img/about.jpg";

const Home = () => {
  return (
    <div class="main">
      <Image

        text="Welcome to Pennsylvannia, a state of rich history, affordable living, education, and our home as a company"
        clas="containered padded"
        imgclas="round darkened"
        textclas="shaded"
      />
      <SpacingCont amount="3" />
      <div class="container shaded round">
        <div class="card-columns col-12 d-flex justify-content-center ">
          <Image pic1={addedRecom} imgclas="round " clas="padd" />
          <div class="col-6 ">
    
            <h1 class="d-flex justify-content-center padd">
              Recently Added and Recommended Jobs
            </h1>
            <SpacingCont amount="1" />
            <h3 class="d-flex justify-content-center padd">
              - To help you find your job, we believe we need to help your job
              find YOU, through our expansive catalog and AI recommendations
            </h3>
            <SpacingCont amount="1" />
            
          </div>
          
        </div>
        <SpacingCont amount="2"/>
        <div class="d-flex justify-content-center">
          <div id="cards" class="card-columns col-12">
            <JobPush num="3" />
          </div>
        </div>
      </div>
      <SpacingCont amount="7" />
      <Image
        pic1={resumeCheck}
        text="We want to see you at your best, offering help services such as Resume Check"
        clas="container padd"
        imgclas="round "
        textclas="shaded"
      />
      <SpacingCont amount="7" />
      <div class="container shaded round">
        <div class="card-columns col-12 d-flex justify-content-center">
          <div class="col-6">
            <SpacingCont amount="1" />
            <h1 class="d-flex justify-content-center padd">Personalized Profile</h1>
            <SpacingCont amount="2" />
            <h3 class="d-flex justify-content-center padd">
              - Your search doesn't end after identifying jobs, so neither does
              ours! We help keep track of the multitude of interviews and
              questions you may have, keeping track of the stage you are in, in
              the application.
            </h3>
            
          </div>
          <Image pic1={profilePers} imgclas="round" clas="padd" />
        </div>
        <SpacingCont amount="2" />
        <div class="d-flex justify-content-center">
            <div id="cards" class="col-12">
              <StatusCard
                clas="col-12"
                title="Job"
                interviewStat="Upcoming interview on February 29th"
                estimatedTime="100 years"
              />
            </div>
          </div>
      </div>
      <div id="footer"></div>
      <SpacingCont amount="12" />
    </div>
  );
};

export default Home;
