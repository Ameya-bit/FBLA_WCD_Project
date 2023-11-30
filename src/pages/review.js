import React from "react";
import { SpacingCont } from "../components/qualityOfLife";
import { Inputs, Card } from "../components/navbar";
import { JobPush, StatusCard } from "../components/jobs";
import { useEffect, useState } from "react";
import supabase from "../components/supabase.js";

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
      <h1>idk</h1>
      <SpacingCont amount="3" />
    </div>
  );
};

export default Review;
