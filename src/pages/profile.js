import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { Inputs, Card } from "../components/navbar";
import { JobPush, StatusCard } from "../components/jobs";

import User from "./img/user.jpg";

const jobListings = () => {
  return (
    <div class="main">
      <SpacingCont amount="7" />
      <h1 class="d-flex justify-content-center">idk</h1>
      <hr class="col-2" />
      <SpacingCont amount="1" />
      <div class="card-columns d-flex justify-content-center">
        <div id="filters" class="col-8 container border scroll">
          <StatusCard title="Job Application" />
          <StatusCard title="Job Application but another" />
          <StatusCard title="Job Application 2" />
          <StatusCard title="Job Application 3" />
        </div>
        <div id="jobslist" class="col-3 container border scroll">
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
    </div>
  );
};

export default jobListings;
