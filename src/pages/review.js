import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { Inputs, Card, Image } from "../components/navbar";
import { JobPush, StatusCard } from "../components/jobs";
import { ReviewCard, ReviewPush } from "../components/reviewComp";
import { useEffect, useState } from "react";
import { supabase, RetrieveDataset } from "../components/supabase.js";
import Home from "./img/addedRecom.jpg";
import Mission from "./img/reviewPage/mission.jpg";
import Future from "./img/reviewPage/future.jpg";
import ReviewEx from "./img/reviewPage/review.jpg";

const Review = () => {
  let reviews = RetrieveDataset("JobReviews", 9);
  return (
    <div class="main">
      <SpacingCont amount="5" />
      <div class="shaded">
        <div class="  padd d-flex justify-content-center row mt-3">
          <div class="col-lg ">
            <Image
              pic1={Mission}
              text=""
              clas=" thumbnail"
              imgclas=""
              textclas=""
            />
          </div>
          <div class="padd col-lg-8">
            <h2 class="d-flex justify-content-end">We are MYRYA!</h2>

            <h3 class="padd">
              At MYRYA, our mission is to drive innovation and excellence across
              diverse sectors, including software development, marketing, and
              healthcare. We strive to create cutting-edge solutions that
              empower our clients to achieve their goals and improve lives. Our
              accomplished team of experts is dedicated to delivering
              unparalleled service and results, leveraging the latest
              technologies and industry best practices.
            </h3>
          </div>
        </div>
        <SpacingCont amount="2" />
        <div class="col-1 center">
          <hr size="10px" class="goldtext"/>
        </div>
        <SpacingCont amount="2" />
        <div class="  padd d-flex justify-content-center row mt-3">
          <div class="padd col-lg-9">
            <h2>Our Future!</h2>

            <h3 class="padd">
              Currently, we are focused on expanding our impact through
              strategic partnerships, enhancing our service offerings, and
              investing in our team's professional growth. As we look to the
              future, we are committed to leading the way in sustainable
              practices, advancing our technological capabilities, and fostering
              an inclusive and dynamic company culture that supports our mission
              of making a positive difference in the world. At MYRYA, we are
              passionate about shaping a better tomorrow, today.
            </h3>
          </div>
          <div class="col-lg ">
            <Image
              pic1={Future}
              text=""
              clas=" thumbnail2 "
              imgclas=""
              textclas=""
            />
          </div>
        </div>
      </div>

      <SpacingCont amount="8" />
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <SpacingCont amount="8" />
        <div class="shadedEdit  padd d-flex justify-content-center row mt-3">
          <div class="padd col-lg-5 ">
            <h1>"</h1>
            <h4 class="padd tab">
              From day one, I felt welcomed in our modern, collaborative
              workspace with state-of-the-art technology. MYRYA genuinely cares
              about its employees' well-being, offering flexible work
              arrangements and generous PTO for a healthy work-life balance. The
              company invests significantly in professional development with a
              substantial training budget, a robust mentorship program, and
              tailored tuition reimbursement, allowing me to continuously expand
              my skills and advance in my career"
            </h4>
            <h4 class="padd">
              "Numerous social events, team outings, and recognition programs
              create a fun and supportive environment. Additionally, MYRYA’s
              visionary leadership is committed to expanding our global
              footprint, embracing cutting-edge technologies, and championing
              sustainable initiatives. If you’re looking for a place that values
              your contributions and is committed to making a positive impact,
              MYRYA is the perfect choice!"
            </h4>
            <h1 class="d-flex justify-content-end">"</h1>
            <h1 class="d-flex justify-content-end">- John Doe</h1>
            <h4 class="d-flex justify-content-end goldtext">
              Software Engineer at MYRYA
            </h4>
          </div>
          <div class="col-lg ">
            <Image
              pic1={ReviewEx}
              text=""
              clas=" thumbnail2 "
              imgclas=""
              textclas=""
            />
          </div>
        </div>
        <SpacingCont amount="15" />

        <div class=" padd">
          <div class="d-flex justify-content-center">
            <div class="d-flex justify-content-center shaded round padd col-8">
              <h1 class="">Commonly asked questions: </h1>
            </div>
          </div>
          <SpacingCont amount="3"/>
          <div class="shaded round padd">
            <div class="padd">
              <CommonQ
                question="What types of career opportunities are available at MYRYA?"
                answer="MYRYA offers a wide range of career opportunities across multiple sectors, including software development, marketing, and healthcare. We are always looking for talented individuals to join our teams in various roles such as engineering, project management, marketing, sales, and more."
              />
              <br/>
              <CommonQ
                question="How does MYRYA support professional development and growth?"
                answer="MYRYA is committed to your professional growth. We provide a substantial annual training budget, a comprehensive mentorship program, and tailored tuition reimbursement. We also offer numerous opportunities for continuous learning and career advancement."
              />
<br/>
              <CommonQ
                question="What benefits does MYRYA offer its employees?"
                answer="MYRYA offers a comprehensive benefits package that includes competitive salaries, medical, dental, and vision insurance, a 401(k) plan with employer match, flexible work arrangements, and generous paid time off. Additionally, we provide wellness programs, on-site fitness classes, and access to an Employee Assistance Program (EAP)."
              />
<br/>
              <CommonQ
                question="How does MYRYA ensure a healthy work-life balance for its employees?"
                answer="At MYRYA, we understand the importance of a healthy work-life balance. We offer flexible work arrangements, including remote work options and flexible hours. Our generous PTO policy ensures that employees have ample time to recharge and spend quality time with their loved ones."
              />
<br/>
              <CommonQ
                question="How can I apply for a job at MYRYA?"
                answer="You can apply for a job at MYRYA by visiting our Careers page on our website. There, you will find a list of current openings and detailed instructions on how to submit your application."
              />
<br/>
              <CommonQ
                question="Does MYRYA offer internships or entry-level positions?"
                answer="Yes, MYRYA offers internships and entry-level positions across various departments. These opportunities are designed to provide hands-on experience and professional growth for students and recent graduates."
              />
            </div>
          </div>

          
        </div>
      </div>
      <SpacingCont amount="2" />
    </div>
  );
};

function CommonQ({ question, answer }) {
  return (
    <div>
      <h3>
        <b class="goldtext">{question}</b>
      </h3>
      <li class="h3 ">{answer}</li>
    </div>
  );
}

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
