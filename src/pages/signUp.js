import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { Inputs, Card, Image } from "../components/navbar";
import { useEffect, useState } from "react";
import {
  supabase,
  RetrieveDataset,
  setUserData,
  signInUser,
  getCurrentUser,
} from "../components/supabase.js";
import {v4 as uuidv4} from 'uuid';

const queryParameters = new URLSearchParams(window.location.search);
let reroute = queryParameters.get("reroute");
let appNum = queryParameters.get("applicationNumber");

const Review = () => {
  const [file, setFile] = useState()
  let userData = getCurrentUser();
  if (userData && userData != null) {
    window.location.assign("/Apply?applicationNumber=" + appNum);
  }
  const [user, setUser] = useState("");
  async function getUser() {
    document.getElementById("error").innerHTML = "";
    let email = document.getElementById("email").value;
    let pass = validatePassword();
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    let phoneNum = validatePhone();
    if (
      email &&
      pass &&
      firstName &&
      lastName &&
      phoneNum &&
      phoneNum != -1 &&
      pass != -1
    ) {
      let { data, error } = await supabase.auth.signUp({
        email: email,
        password: pass,
      });
      if (error) {
        console.log("Error: ", error);
      } else if (data) {
        setUser(data);
        setUserData(data);
        upload(data);
        
      }
      
    } else if (phoneNum != -1 && pass != -1) {
      errorMessage("Missing Inputs!");
    } else {
      return 0;
    }
  }

  async function upload(user) {
    const { data, error } = await supabase
      .storage
      .from('Resumes')
      .upload(user["user"]["id"] + "/" + uuidv4(), file);

    if(error){
      console.log(error);
    } else {
      console.log(data);
    }
  }

  function resumeTest(event) {
    setFile(event.target.files[0])
  }

  function signInTheUser() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    return signInUser(email, password);
  }
  const link = "/SignIn?applicationNumber=" + appNum;
  return (
    <div class="main">
      <SpacingCont amount="7" />
      <div class="container shaded round col-8  ">
        <SpacingCont amount="2" />
        <h2 class="d-flex justify-content-center">Create Your Account: </h2>

        <a href={link} class="text-reset d-flex justify-content-center">
          Or log into an existing account
        </a>

        <div class="d-flex justify-content-center">
          <div id="error" class="" />
        </div>
        <div id="error" class="" />
        <div class="d-flex justify-content-center">
          <div class="padd col-8">
            <SpacingCont amount="1" />
            <h3 class="d-flex justify-content-center padd">
              Enter your personal information:
            </h3>
            <SpacingCont amount="2" />
            <Inputs ids="email" name="Email " clas=" padd" type="text" />
            <SpacingCont amount="2" />
            <Inputs
              ids="password"
              name="Password "
              clas=" padd"
              type="password"
            />
            <SpacingCont amount="2" />
            <Inputs
              ids="firstName"
              name="First Name"
              clas=" padd"
              type="text"
            />
            <SpacingCont amount="2" />
            <Inputs ids="lastName" name="Last Name" clas="padd" type="text" />
            <SpacingCont amount="2" />
            <Inputs ids="phone" name="Phone " clas=" padd" type="text" />
            <SpacingCont amount="4" />

            <h3 class="d-flex justify-content-center padd">
              Enter Your Resume:{" "}
            </h3>
            <input type="file" onChange={resumeTest} class="form-control"/>
            
            <SpacingCont amount="4" />
            <div class="d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-success btn-lg"
                onClick={getUser}
              >
                Create Account
              </button>
            </div>
          </div>
        </div>

        <SpacingCont amount="2" />
      </div>
      <SpacingCont amount="2" />
    </div>
  );
};

function validatePassword() {
  let password = document.getElementById("password").value;

  if (password.length > 8) {
    return password;
  } else if (password.length == 0) {
    return 1;
  } else {
    errorMessage("Invalid Password!");
    return -1;
  }
}

function validatePhone() {
  let phone = document.getElementById("phone").value;

  if (phone.length == 10) {
    return phone;
  } else if (phone.length == 0) {
    return 1;
  } else {
    errorMessage("Invalid Phone Number! ");
    return -1;
  }
}

function errorMessage(message) {
  document.getElementById("error").innerHTML +=
    "<div id='errorMessage' class='alert alert-danger round' role='alert'>" +
    message +
    "</div>";
  document.documentElement.scrollTop = 0;
}

export default Review;
