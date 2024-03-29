import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { Inputs, Card, Button } from "../components/navbar";
import { JobPush } from "../components/jobs";

import { useEffect, useState } from "react";
import { supabase } from "../components/supabase.js";

const queryParameters = new URLSearchParams(window.location.search);
var i = queryParameters.get("jobNum");
var category = queryParameters.get("category");
var location = queryParameters.get("location");
var type = queryParameters.get("type");
var keyword = queryParameters.get("keyword");
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
        <div class="shaded hundredWidth padd">
          <div class="">
            <h1 class="d-flex justify-content-center padd">
              Search and Filter Jobs:{" "}
            </h1>
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
            <Inputs
              ids="filtKey"
              name="Keyword"
              clas="shaded round shadeWhite col-4"
              type="text"
              value=""
            />

            <div>
              <Button name="Update" clas="-primary btn-lg" click={getData} />
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center padd" style={{ height: 870 }}>
          <div>
            <SpacingCont amount="1" />
            <div class="shadePurple container round standHeight">
              <div id="jobslist" class=" container round scroll padd">
                <JobPush
                  end="199"
                  category={category}
                  location={location}
                  type={type}
                  keyword={keyword}
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

const getData = () => {
  category = document.getElementById("filtCat").value;
  location = document.getElementById("filtLoc").value;
  type = document.getElementById("filtType").value;
  keyword = document.getElementById("filtKey").value;
  if(i == null){
    i = 0;
  }
  window.location.assign(
    "/jobListings?jobNum=" +
      i +
      "&category=" +
      category +
      "&location=" +
      location +
      "&type=" +
      type +
      "&keyword=" +
      keyword,
  );
};

function JobFullData() {
  const [reviews, setReviews] = useState("");

  async function getReviews() {
    let { data, error } = await supabase.from("JobLIst").select();
    setReviews(data);
    if (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getReviews();
  }, []);

  if (i == 0 || reviews == []) {
    return (
      <div id="filters" class="standheight container round shaded padd">
        <h1 class="centered">Please select a Job Card from the left</h1>
        <SpacingCont amount="33" />
      </div>
    );
  } else {
    var act = i - 1;
    return (
      <div id="filters" class="standHeight container round shaded padd">
        <div class="padd">
          <h1 class="d-flex justify-content-center padd">
            {reviews[act]["job_title"]}
          </h1>
          <SpacingCont amount="2" />
          <h3>
            <u>Department:</u> {reviews[act]["department"]}
          </h3>
          <h3>
            <u>Job Description:</u> {reviews[act]["job_desc"]}
          </h3>
          <h3>
            <u>Location:</u> {reviews[act]["location"]}
          </h3>
          <h3>
            <u>Type:</u> {reviews[act]["employment_type"]}
          </h3>
          <h3>
            <u>Salary:</u> {reviews[act]["salary"]}
          </h3>
          <SpacingCont amount="1" />
          <h3>
            <u>Requirements:</u>{" "}
          </h3>
          <h3> - {reviews[act]["job_requirement"]}</h3>
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
export {getData};
