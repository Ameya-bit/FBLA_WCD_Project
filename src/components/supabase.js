import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function RetrieveDataset(dataset, range) {
  const [reviews, setReviews] = useState("");

  async function getReviews() {
    let { data, error } = await supabase.from(dataset).select().range(0, range);
    setReviews(data);
  }

  useEffect(() => {
    getReviews();
  }, []);

  return reviews;
}

async function setUserData(input) {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let phoneNum = document.getElementById("phone").value;
  const { data, error } = await supabase
    .from("profiles")
    .insert([
      {
        id: input["user"]["id"],
        first_name: firstName,
        last_name: lastName,
        phone: phoneNum,
      },
    ])
    .select();
  if (error) {
    console.log(error);
  }
}

export { supabase, RetrieveDataset, setUserData };
