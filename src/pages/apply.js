import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { Inputs, Card, Image, Button } from "../components/navbar";
import { useEffect, useState } from "react";
import {
  supabase,
  RetrieveDataset,
  setUserData,
  signInUser,
} from "../components/supabase.js";

const queryParameters = new URLSearchParams(window.location.search);
let i = queryParameters.get("applicationNumber");
const signIn = queryParameters.get("signIn");
if (signIn == "yes") {
  i = -1;
}
const Apply = () => {
  const [user, setUser] = useState("");
  let reviews = RetrieveDataset("JobLIst", 9);
  console.log(reviews);

  async function getUser() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phoneNum = document.getElementById("phone").value;
    if (email && pass && firstName && lastName && phoneNum) {
      let { data, error } = await supabase.auth.signUp({
        email: email,
        password: pass,
      });
      if (error) {
        console.log("Error: ", error);
      } else if (data) {
        console.log(data);
        setUser(data);
        setUserData(data);
        window.location.assign("/profile");
      }
    } else {
      document.getElementById("error").innerHTML =
        "<div id='error' class='alert alert-danger col-4 round' role='alert'>Missing Inputs!</div>";
      document.documentElement.scrollTop = 0;
    }
  }

  console.log(user);

  var act = i - 1;
  if (i == undefined || reviews == [] || !i) {
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
  } else if (signIn == "yes" && i == -1) {
    function signInTheUser() {
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      signInUser(email, password);
    }
    return (
      <div class="main">
        <SpacingCont amount="7" />
        <div class="container shaded round col-8  ">
          <SpacingCont amount="2" />
          <h2 class="d-flex justify-content-center">Sign In </h2>

          <SpacingCont amount="2" />
          <SpacingCont amount="2" />
          <div class="d-flex justify-content-center">
            <div class="padd ">
              <h3 class="d-flex justify-content-center padd">
                Create your Account:{" "}
              </h3>
              <SpacingCont amount="1" />
              <Inputs ids="email" name="Email " clas=" padd" type="text" />
              <SpacingCont amount="1" />
              <Inputs
                ids="password"
                name="Password "
                clas=" padd"
                type="password"
              />
              <SpacingCont amount="1" />
              <button
                type="button"
                class="btn btn-success btn-sm"
                onClick={signInTheUser}
              >
                Sign In
              </button>
            </div>
          </div>

          <SpacingCont amount="2" />
        </div>
        <SpacingCont amount="2" />
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
              <h3 class="d-flex justify-content-center padd">
                Create your Account:{" "}
              </h3>
              <Inputs
                ids="firstName"
                name="First Name"
                clas=" padd"
                type="text"
              />
              <SpacingCont amount="1" />
              <Inputs ids="lastName" name="Last Name" clas="padd" type="text" />
              <SpacingCont amount="1" />
              <Inputs ids="email" name="Email " clas=" padd" type="text" />
              <SpacingCont amount="1" />
              <Inputs ids="phone" name="Phone " clas=" padd" type="text" />
              <SpacingCont amount="1" />
              <Inputs
                ids="password"
                name="Password "
                clas=" padd"
                type="password"
              />
              <SpacingCont amount="3" />
              <h3 class="d-flex justify-content-center padd">
                Additional Information:{" "}
              </h3>
              <Inputs
                ids="linkedIn"
                name="LinkedIn Profile"
                clas=" padd"
                type="text"
              />
              <SpacingCont amount="3" />
              <h3 class="d-flex justify-content-center padd">
                Enter Your Resume:{" "}
              </h3>
              <Inputs ids="resume" name="" clas=" padd" type="file" />
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
                click={getUser}
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
