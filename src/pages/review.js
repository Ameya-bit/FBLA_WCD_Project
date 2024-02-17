import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { Inputs, Card, Image } from "../components/navbar";
import { JobPush, StatusCard } from "../components/jobs";
import { ReviewCard, ReviewPush } from "../components/reviewComp";
import { useEffect, useState } from "react";
import { supabase, RetrieveDataset } from "../components/supabase.js";

import software from "./img/reviewPage/software.jpg";
import marketing from "./img/reviewPage/marketing.jpg";
import healthcare from "./img/reviewPage/healthcare.jpg";
import law from "./img/reviewPage/law.jpg";

const Review = () => {
  let reviews = RetrieveDataset("JobReviews", 9);
  return (
    <div class="main">
      <SpacingCont amount="5" />
      <div class="padd">
        <div class="">
          <h1 class="d-flex justify-content-center shaded round">
            Discover the best jobs
          </h1>
          <div class="containerNew">
            <div class="gallery-wrap ">
              <div class="item item-1"></div>
              <div class="item item-2"></div>
              <div class="item item-3"></div>
              <div class="item item-4"></div>
              <div class="item item-5"></div>
            </div>
          </div>

          <div class="social"></div>
        </div>

        <SpacingCont amount="3" />
        <h2 class="d-flex justify-content-center shaded round">
          Hear from our growing network
        </h2>
        <div class="padd">
          <div class="glass round">
            <div class="containerAdd padd">
              <ReviewPush data={reviews} len="10" />
            </div>
          </div>
        </div>

        <SpacingCont amount="3" />
      </div>
    </div>
  );
};

function Message({ position, message }) {
  if (position == "right") {
    return (
      <div class="grid2 padd">
        <div />
        <p class="shaded round card-text">{message}</p>
      </div>
    );
  } else {
    return (
      <div class="grid2 padd">
        <p class="shaded round card-text">{message}</p>
        <div />
      </div>
    );
  }
}

export default Review;
