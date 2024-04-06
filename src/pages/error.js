import React from "react";
import { SpacingCont } from "../components/qualityOfLife";

const Error = () => {
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
};

export default Error;
