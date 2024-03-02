import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { Inputs, Card, Image } from "../components/navbar";
import { JobPush, StatusCard } from "../components/jobs";
import { ReviewCard, ReviewPush } from "../components/reviewComp";
import { useEffect, useState } from "react";
import { supabase, RetrieveDataset } from "../components/supabase.js";

const Review = () => {
  let reviews = RetrieveDataset("JobReviews", 9);
  return (
    <div class="main">
      <SpacingCont amount="5" />
      <div class="">
        <div class="shaded">
          <h2 class="d-flex justify-content-center glass bluetext">
            Surf the categories of jobs that we offer
          </h2>
          <SpacingCont amount="2" />
          <h3 class="d-flex justify-content-center">
            Hover over the cards to learn about our departments
          </h3>
          <div class="containerNew">
            <div class="gallery-wrap padd">
              <div class="item item-1 padd">
                <h1 class="shadeWhite padd">Software</h1>
                <div class="itemtext shaded round">
                  <h3 class="padd ">
                    Build the future. Innovate with cutting-edge technologies.
                    Find your dream role in software development, engineering,
                    and design.
                  </h3>
                </div>
              </div>
              <div class="item item-2 padd">
                <h1 class="shadeWhite padd">Healthcare</h1>
                <div class="itemtext shaded round">
                  <h3 class="padd ">
                    Make a difference in lives. Pursue a rewarding career in
                    healthcare and medicine.
                  </h3>
                </div>
              </div>
              <div class="item item-3 padd">
                <h1 class="shadeWhite padd">Marketing</h1>
                <div class="itemtext shaded round">
                  <h3 class="padd ">
                    Shape imaginations. Drive results. Unleash your marketing
                    talents.
                  </h3>
                </div>
              </div>
              <div class="item item-4 padd">
                <h1 class="shadeWhite padd">Content Creation</h1>
                <div class="itemtext shaded round">
                  <h3 class="padd ">
                    Tell stories. Inform audiences. Be the voice behind engaging
                    content.
                  </h3>
                </div>
              </div>
            </div>
          </div>
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
