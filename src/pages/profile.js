import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { Inputs, Card } from "../components/navbar";
import { JobPush, StatusCard } from "../components/jobs";
import { useEffect, useState } from "react";
import {
  supabase,
  RetrieveDataset,
  setUserData,
  signInUser,
  getCurrentUser,
} from "../components/supabase.js";
import User from "./img/user.jpg";

const jobListings = () => {
  var applic = DataPush();
  var user = getCurrentUser();
  if (applic.length > 0) {
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
        <div class="d-flex justify-content-center shaded round">
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

function getData() {
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
      .from("applications")
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
  var apps = getData();
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
        </tr>,
      );
    }
  }

  if (applications) {
    return applications;
  }
  // this works, but when it goes back to the original funciton, something happens
}

export default jobListings;
