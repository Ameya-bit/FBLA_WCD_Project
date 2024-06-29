import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { generateResponse, createEmbedding } from "../components/myrical.js";
import { Inputs, Card, Button } from "../components/navbar";
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

  const openTab = (open) => {
    // Declare all variables
    console.log("came here");
    if (document.getElementById(open)) {
      console.log("it exists");
      var i, tabcontent;

      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tab");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }

      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(open).style.display = "block";
    }
  };

  function openHome() {
    openTab("Summary");
  }

  function openApps() {
    openTab("Apps");
  }

  function openSaved() {
    openTab("savedJobs");
  }
  function openResume() {
    openTab("resume");
  }

  if (user) {
    return (
      <div class="main">
        <SpacingCont amount="5" />
        <div class="d-flex justify-content-center sticky-top">
          <div class="col-12 shaded ">
            <h1 class="d-flex justify-content-center padd">
              {user["first_name"] + " " + user["last_name"]}
              's Profile
            </h1>
            
            <div class="col-1 center">
              <hr size="10px" />
            </div>
            <div class="d-flex justify-content-center">
              <div class="col-8 row mt-3">
                <Button
                  name="Home"
                  clas=" whitetext btn-lg d-flex justify-content-center col"
                  click={openHome}
                />
                <Button
                  name="Applications"
                  clas=" whitetext btn-lg d-flex justify-content-center col"
                  click={openApps}
                />
                <Button
                  name="Saved Jobs"
                  clas=" whitetext btn-lg d-flex justify-content-center col"
                  click={openSaved}
                />
                <Button
                  name="View Resume"
                  clas=" whitetext btn-lg d-flex justify-content-center col"
                  click={openResume}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3 padd">
          <div class="col">
            <div id="Summary" class="tab padd">
              <div class="d-flex justify-content-center round padd col">
                <div class="shaded round padd col-8">
                  <h1 class="padd d-flex justify-content-center col-lg">
                    Your next Steps:{" "}
                  </h1>
                  <UserSummary user={user} apps={apps} />
                </div>
              </div>
            </div>

            <div id="Apps" class="tab" style={{ display: "none" }}>
              <div class="d-flex justify-content-center">
                <div class="shaded round padd col-10">
                  <br></br>
                    <Applications apps={applic}/>
                  <br></br>
                </div>
              </div>
            </div>

            <div id="savedJobs" class="tab padd" style={{ display: "none" }}>
              <div class="d-flex justify-content-center padd">
                <div class="row mt-3 padd d-flex justify-content-center ">
                  <div class=" round col-xl-8">
                    <SavedJobs user={user} />
                  </div>
                </div>
              </div>
            </div>

            <div id="resume" class="tab padd" style={{ display: "none" }}>
              <div class="d-flex justify-content-center padd">
                <div class="row mt-3 padd d-flex justify-content-center ">
                  <div class="shaded round col-xl-8">
                    <GetResume userData={user}/>
                  </div>
                </div>
              </div>
            </div>

            <SpacingCont amount="3" />

            <SpacingCont amount="3" />
          </div>
        </div>
      </div>
    );
  } else {
    
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
    
  }
};

function GetResume({ userData }) {
  try {
    const [media, setMedia] = useState([]);

    async function getMedia() {
      if (userData) {
        const { data, error } = await supabase.storage
          .from("Resumes")
          .list(userData["id"] + "/", {
            limit: 10,
            offset: 0,
            sortBy: {
              column: "name",
              order: "asc",
            },
          });

        if (data) {
          setMedia(data);
        } else {
          console.log(error);
        }
      }
    }

    useEffect(() => {
      getMedia();
    }, []);
    console.log(media);
    if (media || media != []) {
      console.log("here");
      return (
        <div class=" round ">
          <div class="padd d-flex justify-content-center">
            <Button
              name="Change Resume"
              clas="-primary btn-lg  col-4 "
            />
          </div>
          
          <embed
            src={
              "https://blrlevxupfhqzfmanjla.supabase.co/storage/v1/object/public/Resumes/" + userData["id"] + "/" +
              media[0]["name"] 
            }
            width="100%"
            class="standHeight padd "
          />
         
        </div>
      );
    } else {
      return <h1>idk</h1>;
    }
  } catch (e) {
    console.log(e);
  }
}

const Applications = (apps) => {
  if (apps["apps"].length > 0) {
    return (
      <div class="d-flex justify-content-center tab">
        <table class="">
          <thead class=" ">
            <tr>
              <th class="padd" scope="col">
                #
              </th>
              <th class="padd" scope="col">
                Application Name
              </th>
              <th class="padd" scope="col">
                Start Date
              </th>
              <th class="padd" scope="col">
                Contact Info
              </th>
              <th class="padd" scope="col">
                DeadLines
              </th>
              <th class="padd" scope="col">
                Status
              </th>
            </tr>
          </thead>
          <DataPush />
        </table>
      </div>
    );
  } else {
    return (
      <div class="container  round col-8">
        <SpacingCont amount="2" />
        <h3 class="d-flex justify-content-center">
          I am afraid you are Applicationless
        </h3>
        <h2 class="d-flex justify-content-center">¯\_(ツ)_/¯</h2>
        <h3 class="d-flex justify-content-center">
          You have no applications to display. Head over to the Explore Page to
          find more jobs!
        </h3>
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

const UserSummary = ({ user, apps }) => {
  if (!user || !apps || user == null || apps == null) {
    return (
      <h3 class="padd newcenter">
        There was an issue loading summary. Please reload the page.
      </h3>
    );
  }
  var applications = "";
  const [app, setApp] = useState("");
  console.log(user, apps);

  try {
    for (let i = 0; i < apps.length; i++) {
      applications +=
        apps[i]["application_name"] + ": " + apps[i]["deadline_assoc"] + ". ";
    }

    var yourApp =
      "In the context of helping a job applicant, named " +
      user["first_name"] +
      ", with their search and application to several jobs within one company (called MYRYA), this applicant " +
      "has " +
      apps.length +
      " different job applications to keep track of. Summarize this list of applications to the job applicant, suggesting actions to make sure each application is complete: " +
      applications +
      "";

    console.log(yourApp);

    console.log("generating response");
    async function appUpd(message) {
      var recommendations = await generateResponse(message);
      setApp(recommendations);
    }

    useEffect(() => {
      appUpd(yourApp);
    }, []);

    console.log("generated response");
    if (app != "") {
      console.log("generated correctly");
      var appArr = app.split(";");
      var realRet = [];

      for (let i = 0; i < appArr.length; i++) {
        realRet.push(<h3>{appArr[i]}</h3>);
      }
      return <pre class="h3 padd">{realRet}</pre>;
    } else {
      return (
        <div class="padd newcenter">
          <Loader />
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
};

function SavedJobs(user) {
  try {
    let reviews = RetrieveDataset("JobLIst", 200);
    let retSav = [];
    let saved_job = user["user"]["savedJobs"];
  
    if(saved_job == [] || saved_job.length < 1 || saved_job == null) {
      console.log("here we are", saved_job, saved_job.length);
      return(
        <div class="container  round col-8">
              <SpacingCont amount="2" />
              <h3 class="d-flex justify-content-center">
                I am afraid you have no saved jobs.
              </h3>
              <h2 class="d-flex justify-content-center">¯\_(ツ)_/¯</h2>
              <h3 class="d-flex justify-content-center">
                Head over to the Explore Page
                to find more jobs!
              </h3>
              <SpacingCont amount="2" />
            </div>
      )
    }
  
    if (reviews && reviews != null && reviews[0]) {
      for (let i = 0; i < saved_job.length; i++) {
        console.log(saved_job[i]);
        retSav.push(
          <Card
            title={reviews[saved_job[i]]["job_title"]}
            loc={"Location: " + reviews[saved_job[i]]["location"]}
            emp={"Job Type: " + reviews[saved_job[i]]["employment_type"]}
            desc={"Description: " + reviews[saved_job[i]]["job_desc"]}
            clas=" padd col-lg"
            link={saved_job[i] + 1}
          />
        );
        retSav.push(<br/>);
      }
    }
  
    if (retSav) {
      return retSav;
    }
  } catch (e) {
    console.log(e);
    return(
      <div class="container  round col-8">
            <SpacingCont amount="2" />
            <h3 class="d-flex justify-content-center">
              I am afraid you have no saved jobs.
            </h3>
            <h2 class="d-flex justify-content-center">¯\_(ツ)_/¯</h2>
            <h3 class="d-flex justify-content-center">
              Head over to the Explore Page
              to find more jobs!
            </h3>
            <SpacingCont amount="2" />
          </div>
    )
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
          <th scope="row" class="padd">
            {i + 1}
          </th>
          <td class="padd">{apps[i]["application_name"]}</td>
          <td class="padd">{apps[i]["start"]}</td>
          <td class="padd">
            {apps[i]["contact_name"]}: {apps[i]["contact_email"]}
          </td>
          <td class="padd">
            {apps[i]["deadline_assoc"]} by {apps[i]["deadlines"]}
          </td>
          <td class="padd">{apps[i]["status"]}</td>
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

export default jobListings;
