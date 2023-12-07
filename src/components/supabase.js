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

async function signOutUser() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.log(error);
  }
  window.location.reload();
}

async function signInUser(email, pass) {
  console.log(email, pass);
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: pass,
  });

  console.log("they signed in");
  if (error) {
    console.log(error);
  }
  if (data) {
    window.location.assign("/profile");
  }
}

function getCurrentUser() {
  const [user, getUser] = useState("");
  const [userData, getUserData] = useState("");

  console.log("working");
  async function getCurrentUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    getUser(user);
    if (user) {
      getCurrentUserData(user["id"]);
    }
  }

  async function getCurrentUserData(user) {
    console.log(user);
    let { data: profiles, error } = await supabase
      .from("profiles")
      .select()
      .eq("id", user);

    getUserData(profiles);
    if (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCurrentUser();
  }, []);

  if (userData) {
    console.log(userData[0]["first_name"]);
    return userData[0];
  } else {
    console.log("Please sign in");
    return null;
  }
}

export {
  supabase,
  RetrieveDataset,
  setUserData,
  getCurrentUser,
  signOutUser,
  signInUser,
};
