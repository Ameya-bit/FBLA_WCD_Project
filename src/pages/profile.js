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
  return (
    <div class="main">
      <SpacingCont amount="7" />
      <div class="d-flex justify-content-center">
        <div class="col-12">
          <h1 class="d-flex justify-content-center shaded round">
            Welcome to your Profile
          </h1>
          <table class=" table table-dark table-striped">
            <thead class="">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Start Date</th>
                <th scope="col">Contact Info</th>
                <th scope="col">DeadLines</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody class="">
              <DataPush />
            </tbody>
          </table>
        </div>
      </div>
      <SpacingCont amount="3" />
    </div>
  );
};

function getData(userId) {
  const [app, getApp] = useState("");

  async function gotApp() {
    let { data, error } = await supabase
      .from("applications")
      .select()
      .eq("id", userId);
    getApp(data);
  }

  useEffect(() => {
    gotApp();
  }, []);

  console.log(app);
  return app;
}

function DataPush() {
  let applications = [];
  let userdat = getCurrentUser();
  if (userdat.length > 0) {
    var apps = getData(userdat["id"]);
    console.log(apps);
  }
  /*function date(dateCond) {
    let year = dateCond % 10000;
    let day = ((dateCond % 1000000) - year) / 10000;
    let month = (dateCond - (dateCond % 1000000)) / 1000000;
    return month + "/" + day + "/" + year;
  }
  console.log(date(userData["applications"]["1"]["start"]));
  for (let i = 0; i < Object.keys(userData["applications"]).length; i++) {
    console.log("came here");
    applications.push(
      <tr>
        <th scope="row">1</th>
        <td>9</td>
        <td>9</td>
        <td>9</td>
        <td>9</td>
      </tr>,
    );
  }
  return applications;*/
}

export default jobListings;
