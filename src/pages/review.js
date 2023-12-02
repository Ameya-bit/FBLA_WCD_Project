import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { Inputs, Card, Image } from "../components/navbar";
import { JobPush, StatusCard } from "../components/jobs";
import { ReviewCard, ReviewPush } from "../components/reviewComp";
import { useEffect, useState } from "react";
import supabase from "../components/supabase.js";

import software from "./img/reviewPage/software.jpg";
import marketing from "./img/reviewPage/marketing.jpg";
import healthcare from "./img/reviewPage/healthcare.jpg";
import law from "./img/reviewPage/law.jpg";

const Review = () => {
  const [reviews, setReviews] = useState("");

  async function getReviews() {
    let { data, error } = await supabase
      .from("JobReviews")
      .select()
      .range(0, 9);
    setReviews(data);
  }

  useEffect(() => {
    getReviews();
  }, []);
  return (
    <div class="main">
      <SpacingCont amount="7" />
      <h2 class="d-flex justify-content-center">
        Hear from our growing network
      </h2>
      <div class="  shaded">
        <div class="grid2 center padd">
          <ReviewCard
            pic1={software}
            title="Software"
            text="For people who enjoy computers and science"
            rating="4 stars"
          />
          <ReviewCard
            pic1={marketing}
            title="Marketing"
            text="For people gifted in selling"
            rating="4 stars"
          />
        </div>
        <div class="grid2 center padd">
          <ReviewCard
            pic1={healthcare}
            title="Healthcare"
            text="For people who help others"
            rating="4 stars"
          />
          <ReviewCard
            pic1={law}
            title="Law"
            text="For people who uphold the law"
            rating="4 stars"
          />
        </div>
      </div>
      <SpacingCont amount="3" />
      <div class="d-flex justify-content-center">
        <div class="col-10 shaded round">
          <ReviewPush data={reviews} len="4" />
        </div>
      </div>

      <SpacingCont amount="3" />
    </div>
  );
};

export default Review;
