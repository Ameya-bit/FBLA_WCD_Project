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

const SignIn = () => {
  function signInTheUser() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    signInUser(email, password);
  }
  return (
    <div class="main">
      <SpacingCont amount="7" />
      <div class="container shaded round col-8 center ">
        <SpacingCont amount="2" />
        <h2 class="d-flex justify-content-center">Sign In </h2>
        <div class="d-flex justify-content-center">
          <div class="padd ">
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
};

export default SignIn;
