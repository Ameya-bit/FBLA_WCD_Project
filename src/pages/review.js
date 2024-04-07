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

      <div>
        <SpacingCont amount="6" />
        <div class="shadedEdit hundredWidth padd d-flex justify-content-center">
          <div class="col-6 newcenter">
            <h2>We are MYRYA!</h2>
            <h3 class="padd">Specializing in many fields to better the world!</h3>
          </div>
          <div class="padd newcenter">
            <h3 class="padd">
            Craft your career with purpose at MYRYA. We're a team dedicated to using technology, 
            healthcare, marketing, and content creation to address real-world challenges and make a positive impact.  
            Here, you won't just be building software, providing care, crafting campaigns, or creating content – you'll 
            be empowering communities, fostering innovation, and shaping a better future.  Join us and discover a 
            work environment that values both your contributions and your well-being. Explore careers at MYRYA
            and find your place where passion meets purpose.
            </h3>
          </div>

        </div>
      </div>
      <SpacingCont amount="2"/>
      <div class="">
        <div class=" d-flex justify content padd">
          <div class="padd col">

            <div class="shadePurple round padd">
              <h1 class="d-flex justify-content-center padd">Our various Benefits</h1>
              <div class="padd">
                <div class="gallery-wrap tab ">
                  <div class="item item-5 padd col-6">
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
                  <div class="item item-6 padd col-6">
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
                  <div class="item item-7 padd col-6">
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
                  <div class="item item-8 padd col-6">
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
            <SpacingCont amount="1"/>
            <div class="shaded round padd">
              <div>
                <h1 class="d-flex justify-content-center  padd round">
                  Our various departments
                </h1>
              </div>
              <div class="containerNew">
                <div class="gallery-wrap padd tab">
                  <div class="item item-1 padd">
                    <div class="shaded round">
                    <h3 class="bluetext  padd round">Software</h3>
                    <div class="itemtext  round">
                      <p class="padd ">
                      Join our Software Department, where innovation meets expertise in a dynamic environment. 
                      Dive into developing cutting-edge software solutions with a team that values creativity, agility, 
                      and pushing technological boundaries. Embrace the opportunity to be at the forefront of tech, 
                      continuously learning and redefining what's possible in the digital world.
                      </p>
                    </div>
                    </div>
                    
                  </div>
                  <div class="item item-2 padd">
                    <div class="shaded round">
                    <h3 class="bluetext  padd round">Healthcare</h3>
                    <div class="itemtext  round">
                      <p class="padd ">
                      Be part of our Healthcare Department, where technology and healthcare converge to improve lives. 
                      This team is pioneering new ways to enhance patient care and accessibility, offering you a chance to 
                      contribute to meaningful advancements in health outcomes. Your work here will directly impact creating 
                      a healthier future for everyone.
                      </p>
                    </div>
                    </div>
                    
                  </div>
                  <div class="item item-3 padd">
                    <div class="shaded round">
                      <h3 class="bluetext  padd round">Marketing</h3>
                    <div class="itemtext  round">
                      <p class="padd ">
                      Our Marketing Department is a creative powerhouse, where strategy and storytelling come together to 
                      amplify our brand's voice. Work on compelling campaigns and digital experiences that engage and inspire our 
                      global audience. If you're driven by innovation and connecting with people, join us to shape how the world sees our brand.
                      </p>
                    </div>

                    </div>
                    
                  </div>
                  <div class="item item-4 padd">
                    <div class="shaded round">
                    <h3 class="bluetext  padd round">Content Creation</h3>
                    <div class="itemtext  round">
                      <p class="padd ">
                      Step into the Content Creation Department, a creative haven for storytellers and visionaries. 
                      Here, your ideas are transformed into captivating narratives across various mediums. In a collaborative 
                      and supportive atmosphere, you'll create content that not only reaches but resonates and influences 
                      our diverse audience. Join us to make your mark and inspire action through your creativity.
                      </p>
                    </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div class="padd col-3 hid">

            <div class="shadedEdit round padd">
              <h3 class="d-flex justify-content-center padd">Hear from our Employees!</h3>
              <ReviewPush data={reviews} condense="yes" len="9" start="4" />
            </div>
          </div>
        </div>
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
