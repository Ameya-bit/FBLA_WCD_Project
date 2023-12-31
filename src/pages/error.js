import React from "react";
import { SpacingCont } from "../components/qualityOfLife";

const Error = () => {
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
};

export default Error;
