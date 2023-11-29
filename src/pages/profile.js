import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { Inputs, Card } from "../components/navbar";
import { JobPush, StatusCard } from "../components/jobs";

import User from "./img/user.jpg";

const jobListings = () => {
  return (
    <div class="main">
      <SpacingCont amount="7" />
      <div class="card-columns d-flex justify-content-center">
        <div class="col-8">
          <h1 class="d-flex justify-content-center shaded round">
            Welcome to your Profile
          </h1>
          <div id="filters" class=" container scroll shaded padd round">
            <StatusCard
              clas="col-12"
              title="Accountant"
              interviewStat="Upcoming interview on February 29th"
              supervisor="Assistant Manager: Steve"
              supercont="steve@company.com"
              start="Dec 1"
              compDates="Resume recieved (Dec 1) "
              estimatedTime="10 days"
            />
            <StatusCard
              clas="col-12"
              title="Example"
              interviewStat="Upcoming interview on February 29th"
              supervisor="Assistant Manager: Bob"
              supercont="bob@company.com"
              start="January 12"
              compDates="Resume recieved (Dec 1) "
              estimatedTime="100 years"
            />
          </div>
        </div>

        <div id="jobslist" class="col-4 container padd round">
          <div class="card shaded round shadeWhite">
            <img src={User} class="card-img-top round" alt="..." />
            <div class="card-body">
              <h5 class="card-title">User TBD</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <SpacingCont amount="3" />
    </div>
  );
};

export default jobListings;
