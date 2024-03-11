import React from "react";
import { SpacingCont } from "./qualityOfLife";
import { Card, Image, OffCanvas, Inputs, Button } from "../components/navbar";
import { JobPush, StatusCard } from "../components/jobs.js";
import { getData } from "./jobListings.js"

import addedRecom from "./img/addedRecom.jpg";
import profilePers from "./img/profilePers.jpg";
import resumeCheck from "./img/resumeCheck.jpg";

const Home = () => {
  return (
    <div class="main ">


      <SpacingCont amount="13" />
      <div class="shaded hundredWidth padd">
        <div class="">
          <h2 class="d-flex justify-content-center padd">Welcome to our Offices!</h2>

        </div>

        <div class="containerAdd container padd d-flex justify-content-center">
          <select name="cars" class="shaded round shadeWhite" id="filtCat">
            <Inputs
              ids="filtCat"
              name="Search our Titles!"
              type="text"
              select="true"
              selectType="job_title"
              value=""
            />
          </select>
          <select name="cars" class="shaded round shadeWhite" id="filtType">
            <Inputs
              ids="filtType"
              name="Search for Work Schedules!"
              type="text"
              select="true"
              selectType="employment_type"
            />
          </select>
          <select
            name="cars"
            class="shaded round shadeWhite col-4"
            id="filtLoc"
          >
            <Inputs
              ids="filtLoc"
              name="Search for Locations!"
              type="text"
              select="true"
              selectType="location"
            />
          </select>
          <Inputs
            ids="filtKey"
            name="Search Keywords"
            clas="shaded round shadeWhite col-4"
            type="text"
            value=""
          />


        </div>
        <div class="padd">
          <div class="d-flex justify-content-center padd">
            <Button name="Start your Search" clas="-primary btn-lg" click={getData} />

          </div>
        </div>
      </div>
      <SpacingCont amount="10" />
      <div class="d-flex justify-content-center">
        <div class="col-3 shaded round ">
          <h3 class="d-flex justify-content-center">Or Explore Downwards</h3>
          <h3 class="d-flex justify-content-center"> ↓ </h3>
        </div>

      </div>
      <SpacingCont amount="5" />
      <div class="container shaded round col-8">
        <SpacingCont amount="2" />
        <h2 class="d-flex justify-content-center">Explore</h2>
        <SpacingCont amount="2" />
        <div class="card-columns col-12 d-flex justify-content-center ">
          <Image pic1={addedRecom} imgclas="round " clas="padd" />
          <div class="col-6 ">
            <SpacingCont amount="1" />
            <h3 class="d-flex justify-content-center padd">
              - We are proud of our immense workforce, and they share the same
              pride about their jobs
            </h3>
            <h3 class="d-flex justify-content-center padd">
              <em>
                Working at MYRYA is so gratifying! The people are nice, the
                projects are groundbreaking, and yet I never feel overworked!
              </em>
            </h3>
            <h3 class="d-flex justify-content-end padd">- Anonymous</h3>
            <SpacingCont amount="1" />
          </div>
        </div>
        <SpacingCont amount="2" />
        <h2 class="d-flex justify-content-center padd">
          Explore our gratifying jobs!
        </h2>
        <SpacingCont amount="2" />
        <div class="d-flex justify-content-center padd">
          <div id="cards" class="card-columns col-12">
            <JobPush end="3" moreInfo="false" />
          </div>
        </div>
      </div>
      <SpacingCont amount="7" />
      <div class=" shadePurple  ">
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
            <h2 class="d-flex justify-content-center padd">Discover</h2>
            <h3 class="d-flex justify-content-center padd">
              It is okay if you are unsure about us, and so you can consult our
              various employees on what is right for you
            </h3>
            <h3 class=" padd">
              We offer many services at our company, such as:
            </h3>
            <div class="padd">
              <h3> - Healthcare</h3>
              <h3> - Retirement plans (401k...)</h3>
              <h3> - Tuition Reimbursement</h3>
              <h3> - And More!</h3>
            </div>
          </div>
        </div>
      </div>
      <SpacingCont amount="7" />
      <div class="container shaded round col-8">
        <SpacingCont amount="2" />
        <h2 class="d-flex justify-content-center padd">Profile</h2>
        <SpacingCont amount="2" />
        <div class="card-columns col-12 d-flex justify-content-center">
          <div class="col-6">
            <h3 class="d-flex justify-content-center padd">
              - We understand that you have a busy day, and
            </h3>
            <h3 class="d-flex justify-content-center padd">
              - We offer salary raises and promotions frequently to encourage
              our workers to do their best. We want you to realize your true
              potential!
            </h3>
          </div>
          <Image pic1={profilePers} imgclas="round" clas="padd" />
        </div>
        <SpacingCont amount="2" />
        <h2 class="d-flex justify-content-center padd">
          View your promotions online
        </h2>
        <div class="d-flex justify-content-center padd">
          <div id="cards" class="col-12">
            <StatusCard
              clas="col-12"
              title="Senior graphic designer"
              interviewStat="Upcoming interview on February 29th"
              supervisor="Assistant Manager: Steve"
              supercont="steve@company.com"
              start="January 12"
              compDates="Resume recieved (Jan 13), Interview complete (Jan 29), "
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
