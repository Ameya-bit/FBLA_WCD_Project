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
      <SpacingCont amount="14" />
      <div>
        <div class="shadedEdit hundredWidth padd d-flex justify-content-center">
          <div class="col-6 newcenter">
            <h2>We are MYRYA!</h2>
            <h3 class="padd">Specializing in many fields to better the world!</h3>
          </div>
          <div class="padd newcenter">
          <h3>
            At MYRYA, we're passionate about leveraging technology, healthcare, marketing, and 
          content creation to make a positive impact on the world. We're not just building software, providing healthcare services, 
          crafting marketing campaigns, or creating content – we're building a better future.
          </h3>
          <br></br>
          <h3>
            Join our talented team and use your skills to tackle real-world challenges.  Whether you're developing 
          innovative healthcare software solutions, crafting impactful marketing campaigns for social good initiatives, or creating 
          informative content that empowers communities, your work will have a meaningful purpose. We believe in fostering a 
          collaborative and supportive environment where you can grow both professionally and personally.  If you're looking for more 
          than just a job, and you're passionate about making a difference, we invite you to explore career opportunities at MYRYA.
          </h3>
          </div>
          
        </div>
      </div>
      <SpacingCont amount="10" />
      <div class="">
        <div class=" d-flex justify content padd">
          <div class="padd col-9">
            <h1 class="d-flex justify-content-center shadedEdit round">
              Discover the perks of our work!
            </h1>
            <SpacingCont amount="2" />
            <div class="shadePurple round padd">
              <div class="padd">
                <div class="gallery-wrap card-columns padd  ">
                  <div class="item item-5 padd">
                    <div class="shadedEdit round ">
                      <h3 class="padd   ">Competitive Salary & Robust Benefits</h3>
                      <div class="itemtext  round">
                        <ul>
                          <li>Salary: 80th percentile for your experience level.</li>
                          <li>Medical, Dental, & Vision Insurance (80% individual, 70% family coverage).</li>
                          <li>401(k) with 6% employer match.</li>
                          <li>Life & Disability Insurance (details vary by position).</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                  <div class="item item-6 padd">
                    <div class="shadedEdit round">
                      <h3 class="padd   ">Work-Life Balance & Well-being</h3>
                      <div class="itemtext   ">
                        <ul>
                          <li>Flexible work arrangements (remote work, compressed weeks, flexible hours).</li>
                          <li>25 days PTO (15 vacation, 5 sick, 5 personal).</li>
                          <li>On-site fitness classes & wellness programs.</li>
                          <li>Employee Assistance Program (EAP).</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                  <div class="item item-7 padd">
                    <div class="shadedEdit round">
                      <h3 class="padd   ">Professional Development & Growth</h3>
                      <div class="itemtext  ">
                        <ul>
                          <li>$3,000 annual training & development budget.</li>
                          <li>Mentorship program.</li>
                          <li>Tuition reimbursement program (details vary).</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                  <div class="item item-8 padd">
                    <div class="shadedEdit round ">
                      <h3 class="padd   ">Modern Work Environment & Company Culture</h3>
                      <div class="itemtext  ">
                        <ul>
                          <li>State-of-the-art equipment & technology.</li>
                          <li>Collaborative & inspiring workspace.</li>
                          <li>Fun & engaging culture (outings, social events, free food).</li>
                          <li>Recognition & rewards programs.</li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="padd col-3">

            <div class="shadedEdit round padd">
              <h3 class="d-flex justify-content-center padd">Hear from our Employees!</h3>
              <ReviewPush data={reviews} condense="yes" len="6" start="4" />
            </div>
          </div>
        </div>
        <SpacingCont amount="10"/>
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
