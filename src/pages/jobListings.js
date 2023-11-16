import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { Inputs, Card } from "../components/navbar";
import { JobPush } from "../components/jobs";

const jobListings = () => {
  return (
    <div>
      <SpacingCont amount="7" />
      <h1 class="d-flex justify-content-center">Search for Jobs</h1>
      <hr class="col-2" />
      <SpacingCont amount="1" />
      <div class="card-columns d-flex justify-content-center">
        <div id="filters" class="col-3 container border">
          <SpacingCont amount="1" />
          <h3 class="d-flex justify-content-center">Filters</h3>
          <Inputs name="Category" />
          <Inputs name="Location" />
          <Inputs name="Type" />
        </div>
        <div id="jobslist" class="col-8 container border scroll">
          <JobPush />
        </div>
      </div>
    </div>
  );
};

export default jobListings;
