import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { Inputs, Card, Image } from "../components/navbar";
import { useEffect, useState } from "react";
import {
  supabase,
  RetrieveDataset,
  setUserData,
  signInUser,
} from "../components/supabase.js";

const queryParameters = new URLSearchParams(window.location.search);
let appNum = queryParameters.get("applicationNumber");

const SignIn = () => {
  async function signInTheUser() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const user = await signInUser(email, password);
    if (user != 0) {
      if (appNum) {
        window.location.assign("/Apply?applicationNumber=" + appNum);
      } else {
        window.location.assign("/Profile");
      }
    }
  }
  return (
    <div class="main">
      <SpacingCont amount="7" />
      <div class="container shaded round col-8 center ">
        <SpacingCont amount="2" />
        <h2 class="d-flex justify-content-center">Sign In </h2>
        <a href="/SignUp" class="text-reset d-flex justify-content-center">
          Or create an account
        </a>
        <div id="error" class=" d-flex justify-content-center"></div>
        <div class="d-flex justify-content-center">
          <div class="padd col-6">
            <SpacingCont amount="1" />
            <Inputs ids="email" name="Email " clas=" padd" type="text" />
            <SpacingCont amount="2" />
            <Inputs
              ids="password"
              name="Password "
              clas=" padd"
              type="password"
            />
            <SpacingCont amount="3" />
            <div class="d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-success btn-lg"
                onClick={signInTheUser}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>

        <SpacingCont amount="2" />
      </div>
    </div>
  );
};

export default SignIn;
