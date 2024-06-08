import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { Inputs, Card, Image } from "../components/navbar";
import { JobPush, StatusCard } from "../components/jobs";
import { ReviewCard, ReviewPush } from "../components/reviewComp";
import { useEffect, useState } from "react";
import { supabase, RetrieveDataset } from "../components/supabase.js";
import Home from "./img/addedRecom.jpg";

const Review = () => {
  let reviews = RetrieveDataset("JobReviews", 9);
  return (
    <div class="main">
      <div>
        <SpacingCont amount="12" />
        <div class="shadedEdit  padd d-flex justify-content-center row mt-3">
          <div class="col-lg newcenter padd">
            <Image
              pic1={Home}
              text=""
              clas=" newcenter"
              imgclas="round"
              textclas=""
            />
            <h2>We are MYRYA!</h2>
            <h3 class="padd">
              Specializing in many fields to better the world!
            </h3>
          </div>
          <div class="padd newcenter col-lg">
            <h3 class="padd">
              Craft your career with purpose at MYRYA. We're a team dedicated to
              using technology, healthcare, marketing, and content creation to
              address real-world challenges and make a positive impact. Here,
              you won't just be building software, providing care, crafting
              campaigns, or creating content – you'll be empowering communities,
              fostering innovation, and shaping a better future. Join us and
              discover a work environment that values both your contributions
              and your well-being. Explore careers at MYRYA and find your place
              where passion meets purpose.
            </h3>
          </div>
        </div>
      </div>

      <SpacingCont amount="7" />
      <div class="">
        <div class=" d-flex justify content padd">
          <div class="padd col">
            <div class=" round padd">
              <div class="newcenter round shaded col">
                <h1 class="">Work With Us</h1>
              </div>
              <div class="padd">
                <div class="md-3 row">
                  <div class="col padd">
                    <Card
                      img="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      desc="At MYRYA, we offer competitive compensation, 
                  with salaries in the 80th percentile for your experience level. Our comprehensive 
                  benefits package includes medical, dental, and vision insurance (80% individual, 70% family coverage), 
                  a 401(k) plan with a 6% employer match, and life and disability insurance tailored to your position."
                      title="Competitive Salary & Robust Benefits"
                    />
                  </div>
                  <div class="col padd">
                    <Card
                      img="https://images.unsplash.com/photo-1530977875151-aae9742fde19?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      desc="At MYRYA, we offer flexible work arrangements, including remote work, 
                      compressed weeks, and flexible hours. Our benefits include 25 days of PTO (15 vacation, 5 sick, 5 personal), 
                      on-site fitness classes and wellness programs, and access to an Employee Assistance Program (EAP)."
                      title="Work-Life Balance and Well-Being"
                    />
                  </div>
                  <div class="col padd">
                    <Card
                      img="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      desc="At MYRYA, we invest in your growth with a $3,000 annual training and development budget, 
                      a comprehensive mentorship program, and a tuition reimbursement program tailored to your needs."
                      title="Professional Development & Growth"
                    />
                  </div>
                  <div class="col padd">
                    <Card
                      img="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      desc="At MYRYA, you'll have access to state-of-the-art equipment and technology 
                        in a collaborative and inspiring workspace. Our fun and engaging culture includes outings, social events,
                        and free food, alongside recognition and rewards programs to celebrate your achievements."
                      title="Modern Work Environment & Company Culture"
                    />
                  </div>
                </div>
              </div>
            </div>
            <SpacingCont amount="10" />
            <div class="newcenter round shaded col">
              <h1 class="">Our Employees</h1>
            </div>
            <div class="d-flex justify-content-center">
              <div class=" mt-3 row col-8">
                <ReviewPush data={reviews} condense="yes" len="3" start="0" />
              </div>
            </div>
            
          </div>
        </div>
        <SpacingCont amount="10" />
        <div class="shaded ">
          <div class="d-flex justify-content-center">
            <div class="d-flex justify-content-center padd col-8">
              <h1 class="">Commonly asked questions: </h1>
            </div>
          </div>

          <SpacingCont amount="2" />
          <div
            class="accordion accordion-flush padd "
            id="accordionPanelsStayOpenExample"
          >
            <div class="accordion-item transparent">
              <h3 class="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  What if all the employers and employees don't answer my email
                  questions?
                </button>
              </h3>
              <div
                id="panelsStayOpen-collapseOne "
                class="accordion-collapse collapse show padd shaded"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body whitetext ">
                  Our employers and employees are hard working, so they might
                  not always have time. However, we always try our best to
                  answer questions. In the meantime, you may direct your
                  questions to Myrical AI!
                </div>
              </div>
            </div>
            <div class="accordion-item transparent">
              <h3 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  What are my opportunities for growth?
                </button>
              </h3>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse padd shaded"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div class="accordion-body whitetext">
                  We value internal growth and provide opportunities for
                  advancement based on performance and merit. Employees can
                  expect to grow within their role and take on additional
                  responsibilities as they demonstrate their capabilities.
                </div>
              </div>
            </div>
            <div class="accordion-item transparent">
              <h3 class="accordion-header " id="panelsStayOpen-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  How is the company culture?
                </button>
              </h3>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse padd shaded"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div class="accordion-body whitetext">
                  Our company culture is collaborative, innovative, and
                  inclusive. We prioritize teamwork, open communication, and a
                  supportive environment where employees can thrive and
                  contribute to the company's success.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SpacingCont amount="2" />
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
