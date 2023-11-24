import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { Inputs, Card } from "../components/navbar";
import { JobPush, StatusCard } from "../components/jobs";

import User from "./img/user.jpg";

const jobListings = () => {
  return (
    <div class="main">
      <SpacingCont amount="7" />
      <h1 class="d-flex justify-content-center">Welcome to your Profile</h1>
      <SpacingCont amount="1" />
      <div class="card-columns d-flex justify-content-center">
        <div id="filters" class="col-8 container border scroll shaded padd round">
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
        <div id="jobslist" class="col-3 container border scroll shaded padd round">
          <div class="card">
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
      <SpacingCont amount="3"/>
    </div>
  );
};

export default jobListings;
