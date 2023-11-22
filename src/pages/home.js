import React from "react";
import { SpacingCont } from "./qualityOfLife";
import { Card, Image, OffCanvas } from "../components/navbar";
import { JobPush, StatusCard } from "../components/jobs.js";


import addedRecom from "./img/addedRecom.jpg";
import profilePers from "./img/profilePers.jpg";
import resumeCheck from "./img/resumeCheck.jpg";

const Home = () => {
  return (
    <div class="main">
      <Image

        text="johb"
        clas="containered padded"
        imgclas="round darkened"
        textclas="shaded padd"
      />
      <SpacingCont amount="3" />
      <div class="container shaded round ">
        <SpacingCont amount="2" />
        <h2 class="d-flex justify-content-center">
        We are with You
        </h2>
        <SpacingCont amount="2" />
        <div class="card-columns col-12 d-flex justify-content-center ">
          <Image pic1={addedRecom} imgclas="round " clas="padd" />
          <div class="col-6 ">
            <SpacingCont amount="1" />
            <h1 class="d-flex justify-content-center padd">
              - We are proud of our immense workforce, and they share the same pride about their jobs
            </h1>
            <h3 class="d-flex justify-content-center padd"><em>
              Working at (insert company) is so gratifying! The people are nice, the projects are groundbreaking, and yet I never feel overworked!  
              </em></h3>
            <h3 class="d-flex justify-content-end padd">
              - Anonymous
            </h3>
            <SpacingCont amount="1" />
            
          </div>
          
        </div>
        <SpacingCont amount="2"/>
        <h2 class="d-flex justify-content-center padd">
          Sneak a peak at our employee's pride
        </h2>
        <SpacingCont amount="2"/>
        <div class="d-flex justify-content-center padd">
          <div id="cards" class="card-columns col-12">
            <JobPush num="3" />
          </div>
        </div>
      </div>
      <SpacingCont amount="7" />
      <div class=" shaded round">
        <div class="card-columns col-12 d-flex justify-content-center">
          <Image
            pic1={resumeCheck}
            text=""
            clas="container padd"
            imgclas="round"
            textclas=""
          />
          <div>
            <SpacingCont amount="1" />
            <h2 class="d-flex justify-content-center padd">
              We like helping you
            </h2>
            <h3 class="d-flex justify-content-center padd">
              - We look after you before you're with us (such as with Resume Check), to make sure your a stellar candidate
            </h3>
            <h3 class="d-flex justify-content-center padd">
              - We look after you after you've joined us (with Healthcare, Retirement Plans, and Education Reimbursement), to make sure you stay a stellar collegue
            </h3>
          </div>
        </div>
      </div>
      <SpacingCont amount="7" />
      <div class="container shaded round">
        <SpacingCont amount="2" />
        <h2 class="d-flex justify-content-center padd">Personalized Profile</h2>
        <SpacingCont amount="2" />
        <div class="card-columns col-12 d-flex justify-content-center">
          <div class="col-6">
            <h3 class="d-flex justify-content-center padd">
              - We understand if you feel that your job isn't where you want to be, which is why we implement our Level Up system
            </h3>
            <h3 class="d-flex justify-content-center padd">
              - We offer salary raises, promotions, and more, frequently to encourage our workers to do their best. These are through our promotion trackers
            </h3>
          </div>
          <Image pic1={profilePers} imgclas="round" clas="padd" />
        </div>
        <SpacingCont amount="2" />
        <h2 class="d-flex justify-content-center padd">
          Promotion/Application Trackers
        </h2>
        <div class="d-flex justify-content-center padd">
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
