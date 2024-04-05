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

const queryParameters = new URLSearchParams(window.location.search);
let reroute = queryParameters.get("reroute");
let appNum = queryParameters.get("applicationNumber");

const Review = () => {
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
    if (email && pass && firstName && lastName && phoneNum && phoneNum != -1 && pass != -1) {
      let { data, error } = await supabase.auth.signUp({
        email: email,
        password: pass,
      });
      if (error) {
        console.log("Error: ", error);
      } else if (data) {
        setUser(data);
        setUserData(data);
        if (appNum) {
          window.location.assign("/Apply?applicationNumber=" + appNum);
        } else {
          window.location.assign("/");
        }
      }

    }
    else if(phoneNum != -1 && pass != -1){    
      errorMessage("Missing Inputs!")
    }
    else{
      return 0;
    }
  }
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
        <h2 class="d-flex justify-content-center">Create Your Account: </h2>
        <div class="d-flex justify-content-center">
          <div id="error" class="" />
        </div>
        <div id="error" class="" />
        <div class="d-flex justify-content-center">
          <div class="padd col-8">
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
            <Inputs
              ids="firstName"
              name="First Name"
              clas=" padd"
              type="text"
            />
            <h3 class="d-flex justify-content-center padd" >
              Enter Your Resume:{" "}
            </h3>
            <Inputs ids="resume" name="" clas=" padd" type="file" />
            <SpacingCont amount="1" />
            <Inputs ids="lastName" name="Last Name" clas="padd" type="text" />
            <SpacingCont amount="1" />
            <Inputs ids="phone" name="Phone " clas=" padd" type="text" />
            <SpacingCont amount="1" />
            <SpacingCont amount="3" />
            <button
              type="button"
              class="btn btn-success btn-sm"
              onClick={getUser}
            >
              Create Account
            </button>
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
  }
  else if (password.length == 0) {
    return 1;
  }
  else {
    errorMessage("Invalid Password!")
    return -1;
  }
}

function validatePhone() {
  let phone = document.getElementById("phone").value

  if (phone.length == 10) {
    return phone;
  }
  else if (phone.length == 0) {
    return 1;
  }
  else {
    errorMessage("Invalid Phone Number! ");
    return -1;
  }
}

function errorMessage(message) {
  document.getElementById("error").innerHTML +=
    "<div id='errorMessage' class='alert alert-danger round' role='alert'>" + message + "</div>";
  document.documentElement.scrollTop = 0;
}

export default Review;
