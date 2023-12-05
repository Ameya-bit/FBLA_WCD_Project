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
          Proper Documentation of Sources Used{" "}
        </h2>
        <div class="d-flex justify-content-center">
          <div class="padd">
            <h3 class="padd">Unsplash Pictures Used:</h3>
            <h3 class="padd">Website background Image:</h3>

            <a
              href="https://unsplash.com/photos/low-angle-view-high-rise-buildings-nxZDMUQhN4o"
              class="padd"
            >
              https://unsplash.com/photos/low-angle-view-high-rise-buildings-nxZDMUQhN4o
            </a>
            <h3 class="padd">Home Page images:</h3>
            <a
              href="https://unsplash.com/photos/woman-sitting-around-table-holding-tablet-JBwcenOuRCg "
              class="padd"
            >
              https://unsplash.com/photos/woman-sitting-around-table-holding-tablet-JBwcenOuRCg{" "}
            </a>
            <br />
            <a
              href="https://unsplash.com/photos/person-wearing-black-coat-close-up-photography-TFFn3BYLc5s"
              class="padd"
            >
              https://unsplash.com/photos/person-wearing-black-coat-close-up-photography-TFFn3BYLc5s
            </a>
            <br />
            <a
              href="https://unsplash.com/photos/two-people-shaking-hands-n95VMLxqM2I"
              class="padd"
            >
              https://unsplash.com/photos/two-people-shaking-hands-n95VMLxqM2I
            </a>
            <h3 class="padd">Dashboard Page Images</h3>
            <a
              href="https://unsplash.com/photos/silhouette-of-man-illustration-2LowviVHZ-E"
              class="padd"
            >
              https://unsplash.com/photos/silhouette-of-man-illustration-2LowviVHZ-E
            </a>
            <h3 class="padd">
              Datasets Used (Supplied by Kaggle): Job Listings Page dataset:
            </h3>
            <a
              href="https://www.kaggle.com/datasets/oyelajairemide/fakereal-job-posting-in-nigeria"
              class="padd"
            >
              https://www.kaggle.com/datasets/oyelajairemide/fakereal-job-posting-in-nigeria
            </a>
            <h3 class="padd">Reviews Page dataset:</h3>
            <a
              href="https://www.kaggle.com/datasets/tusharcorbic/amazon-job-reviews-usa-india-20082020"
              class="padd"
            >
              https://www.kaggle.com/datasets/tusharcorbic/amazon-job-reviews-usa-india-20082020
            </a>
            <h3 class="padd">
              The project was coded on CodeSandBox: https://codesandbox.io/
            </h3>
            <h3 class="padd">
              The project was stored on Github:
              https://github.com/Ameya-bit/FBLA_WCD_Project
            </h3>
            <h3 class="padd">
              Datasets were stored in Supabase: https://supabase.com
            </h3>
            <h3 class="padd">Project utilized Bootstrap</h3>
          </div>
        </div>
      </div>
      <SpacingCont amount="3" />
    </div>
  );
};

export default Citations;
