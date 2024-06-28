import React from "react";
import { SpacingCont } from "./qualityOfLife";
import { Card, Image, OffCanvas, Inputs, Button } from "../components/navbar";
import { JobPush, StatusCard } from "../components/jobs.js";
import { getData } from "./jobListings.js";
import {
  supabase,
  RetrieveDataset,
  setUserData,
  signInUser,
  getCurrentUser,
  getResume,
} from "../components/supabase.js";

import addedRecom from "./img/addedRecom.jpg";
import profilePers from "./img/profilePers.jpg";
import resumeCheck from "./img/resumeCheck.jpg";


const Home = () => {
  return (
    <div class="main ">
      <SpacingCont amount="17" />
      <div class="shaded  homeheight row mt-3">
        <div class=" col-lg-8 newcenter">
          <div class="">
            <h2 class="d-flex justify-content-center ">
              Work Passionately!
            </h2>
            <h5 class="newcenter padd">Search through our catalog, aided by simple yet powerful AI, and find your career. </h5>
          </div>

          {/* Greeting with inputs */}
          <div class="containerAdd container padd d-flex justify-content-center">
            <select
              name="cars"
              class="shaded round col-lg shadeWhite"
              id="filtCat"
            >
              <Inputs
                ids="filtCat"
                name="Search Titles"
                type="text"
                select="true"
                selectType="job_title"
                value=""
              />
            </select>
            <select
              name="cars"
              class="shaded round shadeWhite col"
              id="filtType"
            >
              <Inputs
                ids="filtType"
                name="Search Types"
                type="text"
                select="true"
                selectType="employment_type"
              />
            </select>
            <select
              name="cars"
              class="shaded round shadeWhite col"
              id="filtLoc"
            >
              <Inputs
                ids="filtLoc"
                name="Search Locations"
                type="text"
                select="true"
                selectType="location"
              />
            </select>
            <Inputs
              ids="filtKey"
              name="Search Keywords"
              clas="shaded round shadeWhite col"
              type="text"
              value=""
            />
          </div>
          <div class="">
            <div class="d-flex justify-content-center padd">
              <Button
                name="Pursue your Passion!"
                clas="-primary btn-lg"
                click={getData}
              />
            </div>
          </div>
        </div>
        <div class="col-lg ">
          <img class="card-img-top thumbnail2" src={addedRecom}/>
          </div>
      </div>
      <SpacingCont amount="15" />
      <div class=" round col-12">
        <SpacingCont amount="2" />
        <div class="newcenter round shaded col">
          <h1 class="">Make a Difference! </h1>
        </div>

        <div class="d-flex justify-content-center">
          <div class="row mt-3 padd col-10">
            <div class=" round padd">
              <div class="md-3 row">
                <div class="col padd">
                  <Card
                    title="Software "
                    img="https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    desc="Join our Software Department, where innovation meets
                          expertise in a dynamic environment. Dive into
                          developing cutting-edge software solutions with a team
                          that values creativity, agility, and pushing
                          technological boundaries. Embrace the opportunity to
                          be at the forefront of tech, continuously learning and
                          redefining what's possible in the digital world."
                    link="0"
                    keys="Software"
                  />
                </div>
                <div class="col padd">
                  <Card
                    title="Healthcare "
                    img="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    desc="Be part of our Healthcare Department, where technology
                          and healthcare converge to improve lives. This team is
                          pioneering new ways to enhance patient care and
                          accessibility, offering you a chance to contribute to
                          meaningful advancements in health outcomes. Your work
                          here will directly impact creating a healthier future
                          for everyone."
                    link="0"
                    keys="Healthcare"
                  />
                </div>
                <div class="col padd">
                  <Card
                    title="Marketing "
                    img="https://images.unsplash.com/photo-1541537103745-ea3429c65dc4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    desc="Our Marketing Department is a creative powerhouse,
                          where strategy and storytelling come together to
                          amplify our brand's voice. Work on compelling
                          campaigns and digital experiences that engage and
                          inspire our global audience. If you're driven by
                          innovation and connecting with people, join us to
                          shape how the world sees our brand."
                    link="0"
                    keys="Marketing"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SpacingCont amount="15" />
      <div class="  ">
        <div class="shaded row mt-3 col-12">
          <div class="col-lg ">
          <img class="card-img-top thumbnail" src={profilePers}/>
          </div>
          
          <div class=" col-lg-7 ">
            <h2 class="d-flex justify-content-center padd">Why Us?</h2>
            <h3 class="" >

            Join MYRYA for a rewarding career where your contributions are truly valued. We offer competitive compensation, comprehensive benefits, 
            and flexible work arrangements to ensure a healthy work-life balance. At MYRYA, your professional growth is a priority, with ample opportunities
             for training, development, and mentorship. Our modern, collaborative workspace fosters innovation and creativity, complemented by a vibrant company 
             culture that celebrates your achievements.
            </h3>
            <br></br>
            <h3>
    

            Rooted in values of integrity, innovation, and inclusivity, MYRYA excels across multiple sectors, driving positive change and delivering excellence in every project.
            </h3>
            <br></br>
            <div class="d-flex justify-content-center">
              <Button name="Discover us" link="/review" clas="-primary btn-lg select"></Button>
            </div>
            
          </div>
        </div>
      </div>

      <div id="footer"></div>
      <SpacingCont amount="12" />
    </div>
  );
};

export default Home;
