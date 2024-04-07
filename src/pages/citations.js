import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { Inputs, Card, Image } from "../components/navbar";
import { JobPush, StatusCard } from "../components/jobs";
import { ReviewCard, ReviewPush } from "../components/reviewComp";

const Citations = () => {
  return (
    <div class="main">
      <SpacingCont amount="7" />
      <div class="shaded container round">
        <h2 class="d-flex justify-content-center">
           Documentation of Sources Used{" "}
        </h2>
        <div class="d-flex justify-content-center">
          <div class="padd">
            <h3 class="">Website Images sourced from unsplash:</h3>

              <p>https://unsplash.com/photos/low-angle-view-high-rise-buildings-nxZDMUQhN4o</p>
        
      
              <p>https://unsplash.com/photos/woman-sitting-around-table-holding-tablet-JBwcenOuRCg{" "}</p>
   
  
              <p>https://unsplash.com/photos/person-wearing-black-coat-close-up-photography-TFFn3BYLc5s</p>
  
              <p>https://unsplash.com/photos/two-people-shaking-hands-n95VMLxqM2I</p>

              <p>https://unsplash.com/photos/silhouette-of-man-illustration-2LowviVHZ-E</p>
              <br></br>
        
              <h3>Datasets sourced from kaggle:</h3>
              <p>https://www.kaggle.com/datasets/oyelajairemide/fakereal-job-posting-in-nigeria</p>
         
              <p>https://www.kaggle.com/datasets/tusharcorbic/amazon-job-reviews-usa-india-20082020</p>
              <br></br>


        
              <h3>The project was stored on Github:</h3>
              <p>https://github.com/Ameya-bit/FBLA_WCD_Project</p>

              <p>Datasets were stored in Supabase: https://supabase.com</p>
            <br/>
            <h3 class="">Additional resources: </h3>
            <p>Project used ChatGPT API</p>

          </div>
        </div>
      </div>
      <SpacingCont amount="3" />
    </div>
  );
};

export default Citations;
