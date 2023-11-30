import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { Inputs, Card, Image, Button } from "../components/navbar";
import { JobPush } from "../components/jobs";
import data from "../data/jobs.json";

import addedRecom from "./img/addedRecom.jpg";
import profilePers from "./img/profilePers.jpg";
import resumeCheck from "./img/resumeCheck.jpg";

const queryParameters = new URLSearchParams(window.location.search);
const i = queryParameters.get("applicationNumber");
const Apply = () => {
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
                title={data[i]["job_title"]}
                loc={"Location: " + data[i]["location"]}
                emp={"Job Type: " + data[i]["employment_type"]}
                desc={"Description: " + data[i]["job_desc"]}
                clas="padd"
                button="no"
              />
            </div>
          </div>

          <SpacingCont amount="2" />
          <div class="d-flex justify-content-center">
            <div class="padd ">
              <h3 class="d-flex justify-content-center padd">
                Create your Account:{" "}
              </h3>
              <Inputs
                ids="firstName"
                name="First Name"
                clas=" padd"
                type="text"
              />
              <Inputs ids="lastName" name="Last Name" clas="padd" type="text" />
              <Inputs ids="email" name="Email " clas=" padd" type="text" />
              <Inputs ids="phone" name="Phone " clas=" padd" type="text" />
              <Inputs
                ids="password"
                name="Password "
                clas=" padd"
                type="password"
              />

              <h3 class="d-flex justify-content-center padd">
                Additional Information:{" "}
              </h3>
              <Inputs
                ids="linkedIn"
                name="LinkedIn Profile"
                clas=" padd"
                type="text"
              />

              <h3 class="d-flex justify-content-center padd">
                Enter Your Resume:{" "}
              </h3>
              <Inputs ids="resume" name="" clas=" padd" type="file" />
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
                click={gatherInfo}
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

function gatherInfo() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  let persInfo = [firstName, lastName, email];

  let application = data[i]["job_title"];
  let resume = document.getElementById("resume").value;

  console.log(persInfo);
  window.location.assign("/profile");
}

export default Apply;
