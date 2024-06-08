import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { Inputs, Card, Button } from "../components/navbar";
import { JobPush } from "../components/jobs";

import { useEffect, useState } from "react";
import { supabase, getCurrentUser } from "../components/supabase.js";

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
        <div class=" sticky-top ">
          <div class="shaded hundredWidth padd">
            <div class="filtertext">
              <h1 id="filterstitle" class="newcenter padd">
                Search and Filter Jobs:{" "}
              </h1>
            </div>

            <div
              id="filters"
              class="containerAdd container padd d-flex justify-content-center"
            >
              <select
                name="cars"
                class="shaded round shadeWhite col"
                id="filtCat"
              >
                <Inputs
                  ids="filtCat"
                  name="Job Title"
                  type="text"
                  select="true"
                  selectType="job_title"
                  value=""
                />
              </select>
              <select
                name="cars"
                class="shaded round shadeWhite col"
                id="filtType"
              >
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
                class="shaded round shadeWhite col"
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
                clas="shaded round shadeWhite col"
                type="text"
                value=""
              />

              <div>
                <Button name="Update" clas="-primary btn-lg" click={getData} />
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-end sticky">
          <div class="col-xl-9 ">
            <SpacingCont amount="1" />
            <JobFullData />
          </div>
        </div>
        <div class="cards col-xl-3">
          <SpacingCont amount="1" />
          <div class="shadePurple round">
            <div id="jobslist" class="  ">
              <JobPush
                end="30"
                category={category}
                location={location}
                type={type}
                keyword={keyword}
              />
            </div>
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
  if (i == null) {
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
      keyword
  );
};

function JobFullData() {
  var user = getCurrentUser();

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

  const addSaved = async () => {
    console.log(user);
    if (user) {
      let saved_job = user["savedJobs"];
      let userid = user["id"];

      saved_job[saved_job.length] = parseInt(i);
      console.log(saved_job.length);
      console.log(saved_job);
      const { data, error } = await supabase
        .from("profiles")
        .update({ savedJobs: saved_job })
        .eq("id", userid)
        .select();

      console.log(data);
      if (error) {
        console.log(error);
      }

      document.getElementById("saved").innerHTML +=
        "<div id='' class='alert alert-success round' role='alert'> Saved! </div>";
    }
  };

  if (i == 0 || reviews == []) {
    return (
      <div id="filters" class="round  shaded">
        <h1 class="centered">Please select a Job Card from the left</h1>
        <SpacingCont amount="33" />
      </div>
    );
  } else {
    var act = i - 1;
    return (
      <div id="filters" class=" scroll round  shaded ">
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
          <div class="row mt-3">
            <Button
              link={"/SignUp?applicationNumber=" + i}
              clas="-primary btn-lg col "
              name="Apply Now"
            />
            <Button
              click={addSaved}
              clas="-outline-primary btn-lg col "
              name="Save for Later"
            />
          </div>
          <div id="saved"></div>
        </div>
      </div>
    );
  }
}

export default jobListings;
export { getData };
