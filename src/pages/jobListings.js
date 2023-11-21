import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { Inputs, Card } from "../components/navbar";
import { JobPush } from "../components/jobs";

const jobListings = () => {
  return (
    <div class="joblist">
      <SpacingCont amount="5" />
      <h2 class="d-flex justify-content-center">Search for Jobs</h2>
      <SpacingCont amount="1" />
      <div class="card-columns d-flex justify-content-center ">
        <div id="filters" class="col-3 container border shaded">
          <SpacingCont amount="1" />
          <h1 class="d-flex justify-content-center">Filters</h1>
          <Inputs name="Category" />
          <Inputs name="Location" />
          <Inputs name="Type" />
        </div>
        <div id="jobslist" class="col-8 container border scroll shaded">
          <JobPush num="12"/>
        </div>
      </div>
      <SpacingCont amount="5" />
    </div>
  );
};

export default jobListings;
