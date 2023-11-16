import React from "react";
import { SpacingCont } from "./qualityOfLife";
import { Card, Image, OffCanvas } from "../components/navbar";
import { JobPush, StatusCard } from "../components/jobs.js";

import addedRecom from "./img/addedRecom.jpg";
import profilePers from "./img/profilePers.jpg";
import resumeCheck from "./img/resumeCheck.jpg";
import main from "./img/hom.jpg";

const Home = () => {
  return (
    <div>
      <Image
        pic1={main}
        text="At {insert company} we strive to help you on every step of the way"
        clas="containered"
        imgclas="round darkened"
        textclas="shaded"
      />
      <SpacingCont amount="3" />
      <div class="card-columns col-12 d-flex justify-content-center">
        <Image pic1={addedRecom} imgclas="round darkened" />
        <div class="col-6">
          <SpacingCont amount="2" />
          <h1 class="d-flex justify-content-center">
            Recently Added and Recommended Jobs
          </h1>
          <SpacingCont amount="2" />
          <h3 class="d-flex justify-content-center">
            - To help you find your job, we believe we need to help your job
            find YOU, through our expansive catalog and AI recommendations
          </h3>
          <SpacingCont amount="2" />
          <div class="d-flex justify-content-center">
            <div id="cards" class="card-columns col-12">
              <JobPush num="3" />
            </div>
          </div>
        </div>
      </div>
      <SpacingCont amount="3" />
      <Image
        pic1={resumeCheck}
        text="We want to see you at your best, offering help services such as Resume Check"
        clas="containered"
        imgclas="round darkened"
        textclas="shaded"
      />
      <SpacingCont amount="3" />
      <div class="card-columns col-12 d-flex justify-content-center">
        <div class="col-6">
          <SpacingCont amount="1" />
          <h1 class="d-flex justify-content-center">Personalized Profile</h1>
          <SpacingCont amount="2" />
          <h3 class="d-flex justify-content-center">
            - Your search doesn't end after identifying jobs, so neither does
            ours! We help keep track of the multitude of interviews and
            questions you may have, keeping track of the stage you are in, in
            the application.
          </h3>
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
        <Image pic1={profilePers} imgclas="round darkened" />
      </div>
      <div id="footer"></div>
    </div>
  );
};

export default Home;
