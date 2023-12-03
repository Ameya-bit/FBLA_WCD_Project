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
      <div class="padd">
        <div class="glass round">
          <div class="containerAdd padd">
            <ReviewPush data={reviews} len="10" />
          </div>
        </div>
      </div>

      <SpacingCont amount="3" />
    </div>
  );
};

export default Review;
