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
          We offer many benefits
        </h2>

        
        <div class=" d-flex justify content center padd">
          <div class="shaded round padd">
          <div class="padd">
          <table>
            <thead>
              <tr>
                <th>Benefit</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Competitive Salary &amp; Benefits</td>
                <td>Top-tier salaries at the 75th percentile for your experience level. Comprehensive benefits package including medical, dental, vision insurance, and a 401(k) with a 6% employer match.</td>
              </tr>
              <tr>
                <td>Work-Life Balance</td>
                <td>Flexible work arrangements (remote work, compressed weeks). Generous 20 days of paid time off (vacation, sick, personal).</td>
              </tr>
              <tr>
                <td>Professional Development</td>
                <td>$2,000 annual training & development budget per employee. Mentorship program for guidance and support.</td>
              </tr>
              <tr>
                <td>Wellness &amp; Perks</td>
                <td>On-site fitness classes. Student loan repayment assistance (up to $2,000/year). Fun work environment with company outings, social events, and free food options.</td>
              </tr>
              <tr>
                <td>Modern Work Environment</td>
                <td>State-of-the-art equipment and technology to empower your work. Collaborative and inspiring workspace to foster creativity and productivity.</td>
              </tr>
              <tr>
                <td>Recognition &amp; Rewards</td>
                <td>We value your contributions! Regular performance recognition programs and opportunities to earn bonuses. Enjoy employee discounts on various products and services.</td>
              </tr>
              <tr>
                <td>Personal &amp; Professional Wellbeing</td>
                <td>Employee Assistance Program (EAP) for confidential counseling and support. Generous vacation and sick leave to prioritize your well-being.</td>
              </tr>
            </tbody>
          </table>
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
