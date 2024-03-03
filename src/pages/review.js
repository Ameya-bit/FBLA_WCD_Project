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
          <div>
            <h2 class="d-flex justify-content-center  padd round">
              View our various departments
            </h2>
          </div>
          <div class="containerNew">
            <div class="gallery-wrap padd">
              <div class="item item-1 padd">
                <h1 class="bluetext shaded padd round">Software</h1>
                <div class="itemtext shaded round">
                  <h3 class="padd ">
                    Build the future. Innovate with cutting-edge technologies.
                    Find your dream role in software development, engineering,
                    and design.
                  </h3>
                </div>
              </div>
              <div class="item item-2 padd">
                <h1 class="bluetext shaded padd round">Healthcare</h1>
                <div class="itemtext shaded round">
                  <h3 class="padd ">
                    Make a difference in lives. Pursue a rewarding career in
                    healthcare and medicine.
                  </h3>
                </div>
              </div>
              <div class="item item-3 padd">
                <h1 class="bluetext shaded padd round">Marketing</h1>
                <div class="itemtext shaded round">
                  <h3 class="padd ">
                    Shape imaginations. Drive results. Unleash your marketing
                    talents.
                  </h3>
                </div>
              </div>
              <div class="item item-4 padd">
                <h1 class="bluetext shaded padd round">Content Creation</h1>
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
