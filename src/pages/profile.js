import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { generateResponse, createEmbedding } from "../components/myrical.js";
import { Inputs, Card } from "../components/navbar";
import { JobPush, StatusCard } from "../components/jobs";
const { Configuration, OpenAIApi } = require("openai");
import { useEffect, useState } from "react";
import {
  supabase,
  RetrieveDataset,
  setUserData,
  signInUser,
  getCurrentUser,
  getResume,
} from "../components/supabase.js";
import User from "./img/user.jpg";

const jobListings = () => {
  var applic = DataPush();
  var user = getCurrentUser();
  const reviews = RetrieveDataset("JobLIst", 30);

  var apps = getData("applications");
  var app;

  if (user && applic.length > 0) {
    return (
      <div class="main">
        <SpacingCont amount="5" />
        <div class="padd">
          <div class="d-flex justify-content-center">
            <div class="col-12">
              <h1 class="d-flex justify-content-center shaded round">
                Welcome to your Profile,{" "}
                {user["first_name"] + " " + user["last_name"]}
              </h1>
            </div>
          </div>
          <div class="d-flex justify-content-center round padd col">
            <div class="shaded round padd col-8">
              <h1 class="padd d-flex justify-content-center col-lg">
                Your next Steps:{" "}
              </h1>
              <UserSummary user={user} apps={apps} />
            </div>
          </div>
        </div>

        <SpacingCont amount="3" />
        <div class="d-flex justify-content-center">
          <div class="col-12">
            <h1 class="d-flex justify-content-center shaded round">
              Current Applications
            </h1>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="shaded round padd col-8">
            <br></br>
            <div class="d-flex justify-content-center tab">
              <table class="">
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
                <DataPush />
              </table>
            </div>
            <br></br>
          </div>
        </div>
        <SpacingCont amount="3" />
        <div class="d-flex justify-content-center">
          <div class="col-12">
            <h1 class="d-flex justify-content-center shaded round">
              Saved Jobs
            </h1>
          </div>
        </div>
        <div class="d-flex justify-content-center padd">
          <div class="row mt-3 shaded round col-8 padd grid3">
            <SavedJobs user={user} />
          </div>
        </div>
        <SpacingCont amount="3" />
        <div class="d-flex justify-content-center">
          <div class="col-12">
            <h1 class="d-flex justify-content-center shaded round">
              Recommended Jobs
            </h1>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="col-8">
            <AIRecom user={user} reviews={reviews} />
          </div>
        </div>
        <SpacingCont amount="3" />
      </div>
    );
  } else {
    if (user == null) {
      return (
        <div class="main padd">
          <SpacingCont amount="14" />
          <div class="container shaded round col-8  ">
            <SpacingCont amount="2" />
            <h3 class="d-flex justify-content-center">
              You are not currently signed in!
            </h3>
            <h2 class="d-flex justify-content-center">¯\_(ツ)_/¯</h2>
            <h3 class="d-flex justify-content-center">
              Please Sign in or Create an Account. Feel free to explore without
              an account if you wish!
            </h3>
            <SpacingCont amount="2" />
          </div>
          <SpacingCont amount="14" />
        </div>
      );
    } else {
      return (
        <div class="main">
          <SpacingCont amount="7" />
          <div class="d-flex justify-content-center">
            <div class="col-12">
              <h1 class="d-flex justify-content-center shaded round">
                Welcome to your Profile
              </h1>
            </div>
          </div>
          <div class="container shaded round col-8">
            <SpacingCont amount="2" />
            <h3 class="d-flex justify-content-center">
              I am afraid you are Applicationless
            </h3>
            <h2 class="d-flex justify-content-center">¯\_(ツ)_/¯</h2>
            <h3 class="d-flex justify-content-center">
              You have no applications to display. Head over to the Explore Page
              to find more jobs!
            </h3>
            <SpacingCont amount="2" />
          </div>
          <SpacingCont amount="14" />
        </div>
      );
    }
  }
};

const UserSummary = ({user, apps}) => {
  var applications = "";
  const [app, setApp] = useState("");


  try {
    for (let i = 0; i < apps.length; i++) {
      applications = applications.concat(apps[i]["application_name"] +  ": " + apps[i]["deadline_assoc"] + ". ");
    }

    var yourApp =
      "In the context of helping a job applicant, named " +
      user["first_name"] +
      ", with their search and application to several jobs within one company (called MYRYA), this applicant " +
      "has " +
      apps.length +
      " different job applications to keep track of. Summarize this list of applications to the job applicant, suggesting actions to make sure each application is complete: " + applications + 
      ". End each section of your response with a semicolon.";

    async function appUpd(message) {
      var recommendations = await generateResponse(message);
      setApp(recommendations)
    }

    useEffect(() => {
      appUpd(yourApp);
    }, []);

    if(app != "") {
      var appArr = app.split(";");
      var realRet = [];

      for(let i = 0; i < appArr.length; i++){
        realRet.push(
          <h3>{appArr[i]}</h3>
        );
      }
      return (
        <div class="padd  ">
          {realRet}
        </div>
      )
    }else {
      return (
        <div class="padd newcenter">
          <h3>Your Summary is Loading...</h3>
        </div>
      );
    }
    
  } catch (e) {
    console.log(e);
    return (
      <h3 class="padd newcenter">
        There was an issue loading summary. Please reload the page.
      </h3>
    );
  }
}

function SavedJobs(user) {
  let reviews = RetrieveDataset("JobLIst", 30);
  let retSav = [];
  let saved_job = user["user"]["savedJobs"];

  if (reviews && reviews != null && reviews[0]) {
    for (let i = 0; i < saved_job.length; i++) {
      retSav.push(
        <Card
          title={reviews[saved_job[i]]["job_title"]}
          loc={"Location: " + reviews[saved_job[i]]["location"]}
          emp={"Job Type: " + reviews[saved_job[i]]["employment_type"]}
          desc={"Description: " + reviews[saved_job[i]]["job_desc"]}
          clas="padd col-lg"
        />
      );
    }
  }

  if (retSav) {
    return retSav;
  }
}

function getData(from) {
  const [userData, getUserData] = useState("");

  async function getCurrentUser() {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      console.log(error);
    }
    if (data["user"] != null) {
      gotApp(data["user"]["id"]);
    }
  }

  async function gotApp(userId) {
    let { data, error } = await supabase
      .from(from)
      .select()
      .eq("id", userId);
    if (error) {
      console.log(error);
    }
    getUserData(data);
  }

  useEffect(() => {
    getCurrentUser();
  }, []);
  if (userData) {
    return userData;
  }
}

function DataPush() {
  let applications = [];
  var apps = getData("applications");
  if (apps != null) {
    for (let i = 0; i < apps.length; i++) {
      applications.push(
        <tr>
          <th scope="row">{i + 1}</th>
          <td>{apps[i]["application_name"]}</td>
          <td>{apps[i]["start"]}</td>
          <td>
            {apps[i]["contact_name"]}: {apps[i]["contact_email"]}
          </td>
          <td>
            {apps[i]["deadline_assoc"]} by {apps[i]["deadlines"]}
          </td>
          <td>{apps[i]["status"]}</td>
        </tr>
      );
    }
  }

  if (applications) {
    return applications;
  }
}

function getTheResume(user) {
  let file = user["Resume"];
  let filepath = getResume(file);

  return filepath;
}

const AIRecom = ({ user, reviews }) => {
  const [recom, setRecom] = useState("");
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
      "Before your response, write only the corresponding numbers, according to the main list, of the top three choices, with ; separating them (for example: '1;2;3;'), end this section with a semicolon." +
      "For the response, explain how those top three choices in the previous section are similar to their interests, and why the applicant should consider each job. Label each explanation as 1, 2, 3. Address this entire response" + 
      " to the job applicant.";

    async function recomJobs(message) {
      var recommendations = await generateResponse(message);
      setRecom(recommendations);
    }

    useEffect(() => {
      recomJobs(getRecommendedJobs);
    }, []);

    console.log(getRecommendedJobs);

    if (recom != "") {
      console.log(recom);
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
            There was an issue loading recommendations. Please reload the page.
          </h3>
        );
      } else {
        return (
          <div>
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
        <div>
          <h1>Your Recommendations are Loading...</h1>
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
};

export default jobListings;
