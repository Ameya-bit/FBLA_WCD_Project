import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { Inputs, Card, Image, Button } from "../components/navbar";
import { useEffect, useState } from "react";
import {
  supabase,
  RetrieveDataset,
  setUserData,
  signInUser,
  getCurrentUser,
} from "../components/supabase.js";

const queryParameters = new URLSearchParams(window.location.search);
let i = queryParameters.get("applicationNumber");

const Apply = () => {
  let userData = getCurrentUser();
  const date = new Date();

  let reviews = RetrieveDataset("JobLIst", 9);

  var act = i - 1;

  async function getInformation() {
    console.log("entered getInformation fn");
    var id = userData["id"];
    var start = startDate();
    var contact_name = "Steve Bobs";
    var contact_email = "stevebobs@company.com";
    var deadlines = [resumeDue()];
    var deadlines_assoc = ["Submit Resume"];
    var status = "Ongoing";
    var application_name = reviews[act]["job_title"];

    const { data, error } = await supabase
      .from("applications")
      .insert([
        {
          id: id,
          start: start,
          contact_name: contact_name,
          contact_email: contact_email,
          deadlines: deadlines,
          deadline_assoc: deadlines_assoc,
          status: status,
          application_name: application_name,
        },
      ])
      .select();
    if (error) {
      console.log(error);
    }

    window.location.assign("/profile");
  }

  function resumeDue() {
    var day = date.getDate() + 5;
    var month = day > 30 ? date.getMonth() + 2 : date.getMonth() + 1;
    var year = date.getFullYear();

    var fullDate =
      month.toString() + "/" + day.toString() + "/" + year.toString();
    return fullDate;
  }

  function startDate() {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var fullDate =
      month.toString() + "/" + day.toString() + "/" + year.toString();
    return fullDate;
  }

  console.log(i);
  if (i == undefined || reviews == [] || !i || !userData || userData == null) {
    console.log(i, userData, reviews);
    return (
      <div class="main padd">
        <SpacingCont amount="14" />
        <div class="container shaded round col-8  ">
          <SpacingCont amount="2" />
          <h3 class="d-flex justify-content-center">Unexpected Error</h3>
          <h2 class="d-flex justify-content-center">¯\_(ツ)_/¯</h2>
          <h3 class="d-flex justify-content-center">
            Please refresh or click to another page on the navbar
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
        <div class="container shaded round col-8  ">
          <SpacingCont amount="2" />
          <h2 class="d-flex justify-content-center">
            Congratulations! You are almost there!
          </h2>
          <SpacingCont amount="2" />
          <div class="d-flex justify-content-center">
            <div class="col-10">
              <Card
                title={reviews[act]["job_title"]}
                loc={"Location: " + reviews[act]["location"]}
                emp={"Job Type: " + reviews[act]["employment_type"]}
                desc={"Description: " + reviews[act]["job_desc"]}
                clas="padd"
                button="no"
              />
            </div>
          </div>
          <SpacingCont amount="2" />
          <div id="error" class="d-flex justify-content-center"></div>
          <SpacingCont amount="2" />
          <div class="d-flex justify-content-center">
            <div class="padd ">
              <SpacingCont amount="3" />
              <h3 class="d-flex justify-content-center padd">
                Anything You Want To Highlight For Our Team:{" "}
              </h3>
              <Inputs
                ids="extraInfo"
                name="100 Word Limit"
                clas=" padd"
                type="text"
              />
              <SpacingCont amount="1" />
              <Button
                name="Submit"
                clas="-primary btn-lg d-flex justify-content-center"
                click={getInformation}
              />
            </div>
          </div>

          <SpacingCont amount="2" />
        </div>
        <SpacingCont amount="2" />
      </div>
    );
  }
};

export default Apply;
