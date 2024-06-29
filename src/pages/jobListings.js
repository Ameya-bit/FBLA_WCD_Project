import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { Inputs, Card, Button } from "../components/navbar";
import { JobPush } from "../components/jobs";
import { generateResponse } from "../components/myrical.js";
import { useEffect, useState } from "react";
import {
  supabase,
  getCurrentUser,
  RetrieveDataset,
} from "../components/supabase.js";
import { isUnd, isUnd2 } from "../components/qualityOfLife.js";

const queryParameters = new URLSearchParams(window.location.search);
var i = queryParameters.get("jobNum");
var k = parseInt(queryParameters.get("page"));
var category = queryParameters.get("category");
var location = queryParameters.get("location");
var type = queryParameters.get("type");
var keyword = queryParameters.get("keyword");
if (k < 1 || !k || k == null) {
  k = 1;
}


const jobListings = () => {
  var user = getCurrentUser();
  const reviews = RetrieveDataset("JobLIst", 200);
  var next = k + 1;
  var prev = k - 1;
  var start = 10 * (k - 1);
  var end = 10 * k;
  category = isUnd(category, "");
  location = isUnd(location, "");
  type = isUnd(type, "");
  keyword = isUnd(keyword, "");
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

              <div class="">
                <Button name="Update" clas="-primary btn-lg" click={getData} />
              </div>
              <button
                type="button"
                class="btn btn-success"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              >
                Generate Recommendations
              </button>
            </div>
          </div>
        </div>

        <div
          class="modal fade transparent bd-example-modal-lg"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg transparent">
            <div class="modal-content transparent">
              <AIRecom user={user} reviews={reviews} />
            </div>
          </div>
        </div>
        <SpacingCont amount="1" />
        <div id="" class="center col-xl-8">
          <div class="containe">
            <div class="padd newpadd  round  ">
              <div id="jobslist" class="scroll round">
                <JobPush
                  start={start}
                  end={end}
                  category={category}
                  location={location}
                  type={type}
                  keyword={keyword}
                />
                <br></br>
                <div class="d-flex justify-content-center">
                  <Button
                    name="Prev Page"
                    link={
                      "/jobListings?jobNum=" +
                      i +
                      "&page=" +
                      prev +
                      "&category=" +
                      category +
                      "&location=" +
                      location +
                      "&type=" +
                      type +
                      "&keyword=" +
                      keyword
                    }
                    clas="-primary btn-lg select"
                  ></Button>
                  <Button
                    name="Next Page"
                    link={
                      "/jobListings?jobNum=" +
                      i +
                      "&page=" +
                      next +
                      "&category=" +
                      category +
                      "&location=" +
                      location +
                      "&type=" +
                      type +
                      "&keyword=" +
                      keyword
                    }
                    clas="-primary btn-lg select"
                  ></Button>
                </div>
              </div>
            </div>
          </div>

          <div class="stiky ">
            <JobFullData />
        <div id="saved"></div>

          </div>
          
        </div>

        <SpacingCont amount="2" />
      </div>
    );
  }
};

const Loader = (props) => {
  return (
    <div className="bouncing-loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const AIRecom = ({ user, reviews }) => {
  if (!user || !reviews || user == null || reviews == null) {
    return (
      <div class="shaded round padd">
        <h1 class="padd">Please Sign in to view your recommendations</h1>
      </div>
    );
  } else {
    const [recom, setRecom] = useState("");
    const embedArr = RetrieveDataset("posts", 200);
    var savedjobs = user["savedJobs"];
    let jobsString = "";
    let totalJobsString = "";

    try {
      for (let k = 0; k < reviews.length; k++) {
        totalJobsString += k + ": " + reviews[k]["job_title"] + ", ";
      }

      for (let i = 0; i < savedjobs.length; i++) {
        jobsString += reviews[savedjobs[i]]["job_title"] + ",  ";
      }

      var getRecommendedJobs =
        "Based on the applicants saved jobs (which are jobs that the applicant is interested in):  " +
        totalJobsString +
        ", recommend 3 similar jobs from this main list: " +
        jobsString +
        ", that are not already in the applicants saved jobs." +
        "Before your response, write only the numbers corresponding to the 3 similar jobs, with ; separating them (example: 3;6;12;)" +
        "For the response, explain how those top three choices in the previous section are similar to their interests, and why the applicant should consider each job. Label each explanation as 1, 2, 3. Address this entire response" +
        " to the job applicant.";

      async function recomJobs(message) {
        var recommendations = await generateResponse(message, embedArr);
        setRecom(recommendations);
      }

      useEffect(() => {
        recomJobs(getRecommendedJobs);
      }, []);
      if (recom != "") {
        var recomArr = recom.split(";");
        var recom1 = recomArr[0];
        var recom2 = recomArr[1];
        var recom3 = recomArr[2];
        var explain = recomArr[3];

        var explain3 = explain.split("3.")[1];
        var explain2 = explain.split("3.")[0].split("2.")[1];
        var explain1 = explain
          .split("3.")[0]
          .split("2.")[0]
          .split("1.")[1];

        if (!explain1 || !explain2 || !explain3) {
          return (
            <h3>
              There was an issue loading recommendations. Please reload the
              page.
            </h3>
          );
        } else {
          return (
            <div>
              <div class="shaded padd round">
                <h1 class="padd">Your Recommended Jobs: </h1>
              </div>
              <div class="row mt-3 padd shaded round">
                <Card
                  title={reviews[recom1]["job_title"]}
                  loc={"Location: " + reviews[recom1]["location"]}
                  emp={"Job Type: " + reviews[recom1]["employment_type"]}
                  desc={"Description: " + reviews[recom1]["job_desc"]}
                  clas="padd col-4"
                  link={reviews[recom1]["job_id"]}
                />
                <h3 class="col-6 padd">{explain1}</h3>
              </div>
              <div class="row mt-3 padd shaded round">
                <Card
                  title={reviews[recom2]["job_title"]}
                  loc={"Location: " + reviews[recom2]["location"]}
                  emp={"Job Type: " + reviews[recom2]["employment_type"]}
                  desc={"Description: " + reviews[recom2]["job_desc"]}
                  clas="padd col-4"
                  link={reviews[recom2]["job_id"]}
                />
                <h3 class="col padd">{explain2}</h3>
              </div>
              <div class="row mt-3 padd shaded round">
                <Card
                  title={reviews[recom3]["job_title"]}
                  loc={"Location: " + reviews[recom3]["location"]}
                  emp={"Job Type: " + reviews[recom3]["employment_type"]}
                  desc={"Description: " + reviews[recom3]["job_desc"]}
                  clas="padd col-4"
                  link={reviews[recom3]["job_id"]}
                />
                <h3 class="col padd">{explain3}</h3>
              </div>
              <br />

              <br />

              <br />
            </div>
          );
        }
      } else {
        return (
          <div class="shaded round padd">
            <h1 class="padd">
              Loading Recommendations
            </h1>
            <Loader />
          </div>
        );
      }
    } catch (e) {
      console.log(e);
      return (
        <h3>
          There was an issue loading recommendations. Please reload the page.
        </h3>
      );
    }
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
      "&page=" +
      k +
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

      saved_job[saved_job.length] = parseInt(i-1);
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
    } else {
      document.getElementById("saved").innerHTML +=
        "<div id='' class='alert alert-danger round' role='alert'> Please Sign In to save jobs! </div>";
    }
  };

  if (i == 0 || reviews == []) {
    return (
      <div id="filters" class="round standHeight shaded">
        <h1 class="centered">Please select a Job Card from the left</h1>
      </div>
    );
  } else {
    var act = i - 1;
    let desc = reviews[act]["job_requirement"].trim().replaceAll("\n", " ").replace(/\r/g, "");
  
      

    return (
      <div id="filters" class="standHeight round  shaded otherscrll ">
        <div class="padd">
          <h1 class="d-flex justify-content-center padd">
            {reviews[act]["job_title"]}
          </h1>
          <SpacingCont amount="2" />
          <h3>
            <u>Department:</u> {reviews[act]["department"]}
          </h3>
          <br/>
          <h3>
            <u>Job Description:</u> {reviews[act]["job_desc"]}
          </h3>
          <br/>
          <h3>
            <u>Location:</u> {reviews[act]["location"]}
          </h3>
          <br/>
          <h3>
            <u>Type:</u> {reviews[act]["employment_type"]}
          </h3>
          <br/>
          <h3>
            <u>Salary:</u> {reviews[act]["salary"]}
          </h3>
          <SpacingCont amount="1" />
          <h3>
            <u>Requirements:</u>{" "}
          </h3>
          <h3> - {desc}</h3>
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
          
        </div>
      </div>
    );
  }
}

export default jobListings;
export { getData };
