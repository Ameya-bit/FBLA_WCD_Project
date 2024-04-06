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


      <SpacingCont amount="15" />
      <div class="homeheight">
        <div class="shaded hundredWidth padd">
          <div class="">
            <h2 class="d-flex justify-content-center padd">Welcome to our Offices!</h2>
          </div>

          {/* Greeting with inputs */}
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
        <SpacingCont amount="9" />
        <div class="d-flex justify-content-center">
          <div class="col-3 shaded round ">
            <h3 class="d-flex justify-content-center">Or Explore Downwards</h3>
            <h3 class="d-flex justify-content-center"> ↓ </h3>
          </div>

        </div>
      </div>
      <SpacingCont amount="5" />
      <div class="container shaded round col-8">
        <SpacingCont amount="2" />
        <h2 class="d-flex justify-content-center">Explore</h2>
        <SpacingCont amount="2" />
        <div class="card-columns col-12 d-flex justify-content-center ">
          <Image pic1={addedRecom} imgclas="round breaks" clas="padd" />
          <div class="col-6 ">
            <SpacingCont amount="2" />
            
            <h3 class="d-flex justify-content-center padd">
              - Find your perfect job match with ease. 
              Filter and apply to a diverse range of opportunities that align with your preferences,
            consult with our dedicated employers and employees, take advantage of our AI assistance,
             and take the first step towards a rewarding career at MYRYA.
            </h3>
            
          </div>
        </div>
        <SpacingCont amount="2" />
        <h2 class="d-flex justify-content-center padd">
          Find great jobs!
        </h2>
        <SpacingCont amount="2" />
        <div class="d-flex justify-content-center padd">
          <div id="cards" class="card-columns col-12">
            <JobPush end="3" moreInfo="true" />
          </div>
        </div>
      </div>
      <SpacingCont amount="7" />
      <div class=" shadePurple  ">
        <div class="card-columns col-12 d-flex justify-content-center">
          <Image
            pic1={resumeCheck}
            text=""
            clas=" newcenter"
            imgclas="round"
            textclas=""
          />
          <div class="col-4">
            <SpacingCont amount="1" />
            <h2 class="d-flex justify-content-center padd">Discover</h2>
            <h3 class="">
              We know the importance of finding the right job, and so it is ok to be a little skeptic.
            </h3>
            <h3 class="">
              Feel free to explore, investigate, and consider us: 
            </h3>
            <ul class="padd">
              <li><h5>Detailed information about your benefits as a MYRYA employee</h5></li>
              <li><h5>Detailed information about our jobs and departments to inform your decision</h5></li>
              <li><h5>Converse with existing employees and employers</h5></li>
              <li><h5>And More!</h5></li>
            </ul>
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
              - As a MYRYA applicant, you can keep track of application updates in your profile.
            </h3>
            <h3 class="d-flex justify-content-center padd">
              - As a MYRYA employee, we offer salary raises and promotions frequently to encourage
              our workers to do their best. We want you to realize your true
              potential!
            </h3>
          </div>
          <Image pic1={profilePers} imgclas="round" clas="padd" />
        </div>
        <SpacingCont amount="2" />
        <h2 class="d-flex justify-content-center padd">
          View Applications online
        </h2>
        <div class="d-flex justify-content-center padd">
          <div class="padd col-8">
            <div class="padd glass round black tab">
              <br />
              <thead class="">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Application Name</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">Contact Info</th>
                  <th scope="col">DeadLines</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Content Creator</td>
                  <td>5/23/2020</td>
                  <td>
                    Steve Bobs: stevebobs@company.com
                  </td>
                  <td>
                    Resume due by 5/29/2020
                  </td>
                  <td>Ongoing</td>
                </tr>
              </tbody>
              <br />
            </div>
          </div>

        </div>
        <h3 class="newcenter padd">Know exactly where you are in your application, next steps, and more through our comprehensive table</h3>

      </div>

      <div id="footer"></div>
      <SpacingCont amount="12" />
    </div>
  );
};

export default Home;
