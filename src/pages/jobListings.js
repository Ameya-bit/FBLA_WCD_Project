import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { Inputs, Card, Button } from "../components/navbar";
import { JobPush } from "../components/jobs";
import data from "../data/jobs.json";

const queryParameters = new URLSearchParams(window.location.search);
const i = queryParameters.get("jobNum");
var category = queryParameters.get("category");
var location = queryParameters.get("location");
var type = queryParameters.get("type");

const jobListings = () => {
  if (i == undefined) {
    return (
      <div class="main padd">
        <SpacingCont amount="14" />
        <div class="container shaded round col-8  ">
          <SpacingCont amount="2" />
          <h3 class="d-flex justify-content-center">How'd you get here?</h3>
          <h2 class="d-flex justify-content-center">¯\_(ツ)_/¯</h2>
          <h3 class="d-flex justify-content-center">
            Click on the navbar to get back on track
          </h3>
          <SpacingCont amount="2" />
        </div>
        <SpacingCont amount="14" />
      </div>
    );
  } else {
    return (
      <div class="main ">
        <SpacingCont amount="5" />
        <div class="shaded  padd">
          <div class="">
            <h3 class="d-flex justify-content-center padd">
              Search and Filter Jobs:{" "}
            </h3>
          </div>

          <div class="containerAdd container padd d-flex justify-content-center">
            <select name="cars" class="shaded round shadeWhite" id="filtCat">
              <Inputs
                ids="filtCat"
                name="Job Title"
                type="text"
                select="true"
                selectType="job_title"
                value=""
              />
            </select>
            <select name="cars" class="shaded round shadeWhite" id="filtType">
              <Inputs
                ids="filtType"
                name="Type"
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
                name="Location"
                type="text"
                select="true"
                selectType="location"
              />
            </select>
            <div>
              <Button name="Save" clas="-success btn-lg" click={getData} />
            </div>
          </div>
        </div>
        <div
          class="card-columns d-flex justify-content-center padd"
          style={{ height: 870 }}
        >
          <div>
            <SpacingCont amount="1" />
            <div class="shaded container round standHeight">
              <h3 class="d-flex justify-content-center">Scroll to see more</h3>
              <div id="jobslist" class=" container round scroll padd">
                <JobPush
                  end="30"
                  category={category}
                  location={location}
                  type={type}
                />
              </div>
            </div>
          </div>
          <div class="col-8 standHeight">
            <SpacingCont amount="1" />
            <JobFullData />
          </div>
        </div>
        <SpacingCont amount="15" />
      </div>
    );
  }
};

function Test() {
  data[0]["testAdd"] = "will this work";

  console.log(data[0]);
}

const getData = () => {
  category = document.getElementById("filtCat").value;
  location = document.getElementById("filtLoc").value;
  type = document.getElementById("filtType").value;
  window.location.assign(
    "https://yyxzgq-3000.csb.app/jobListings?jobNum=" +
      i +
      "&category=" +
      category +
      "&location=" +
      location +
      "&type=" +
      type,
  );
};

function JobFullData() {
  if (i == 0) {
    return (
      <div id="filters" class="standheight container round shaded padd">
        <h1 class="centered">Please select a Job Card from the left</h1>
        <SpacingCont amount="33" />
      </div>
    );
  } else {
    return (
      <div id="filters" class="standHeight container round shaded padd">
        <div class="padd">
          <h1 class="d-flex justify-content-center padd">
            {data[i]["job_title"]}
          </h1>
          <SpacingCont amount="2" />
          <h3>
            <u>Department:</u> {data[i]["department"]}
          </h3>
          <h3>
            <u>Job Description:</u> {data[i]["job_desc"]}
          </h3>
          <h3>
            <u>Location:</u> {data[i]["location"]}
          </h3>
          <h3>
            <u>Type:</u> {data[i]["employment_type"]}
          </h3>
          <h3>
            <u>Salary:</u> {data[i]["salary"]}
          </h3>
          <SpacingCont amount="1" />
          <h3>
            <u>Requirements:</u>{" "}
          </h3>
          <h3> - {data[i]["job_requirement"]}</h3>
          <SpacingCont amount="3" />
          <div class="d-flex justify-content-center">
            <Button
              link={"/Apply?applicationNumber=" + i}
              clas="-primary btn-lg col-8 "
              name="Apply Now"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default jobListings;
