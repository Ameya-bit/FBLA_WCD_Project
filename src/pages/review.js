import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { Inputs, Card, Image } from "../components/navbar";
import { JobPush, StatusCard } from "../components/jobs";
import { ReviewCard } from "../components/reviewComp";
import { useEffect, useState } from "react";
import supabase from "../components/supabase.js";

import software from "./img/reviewPage/software.jpg";
import marketing from "./img/reviewPage/marketing.jpg";

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
  console.log(reviews);
  return (
    <div class="main">
      <SpacingCont amount="15" />
      <div class="col-6 center">
        <div class="grid2 padd">
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
        <div class="grid2 padd">
          <ReviewCard
            pic1={software}
            title="Healthcare"
            text="For people who help others"
            rating="4 stars"
          />
          <ReviewCard
            pic1={software}
            title="Software"
            text="For people who enjoy computers and science"
            rating="4 stars"
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
