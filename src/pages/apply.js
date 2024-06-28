import React from "react";
import axios from "axios";
import { SpacingCont } from "../components/qualityOfLife.js";
import { Inputs, Card, Image, Button } from "../components/navbar.js";
import { useEffect, useState } from "react";
import {  compareEmbeddings } from "../components/myrical.js";
const OpenAIKey = process.env.REACT_APP_OPENAI_KEY;
import {
  supabase,
  RetrieveDataset,
  setUserData,
  signInUser,
  getCurrentUser,
} from "../components/supabase.js";

const queryParameters = new URLSearchParams(window.location.search);
let i = queryParameters.get("applicationNumber");

const Apply = () => {
  let userData = getCurrentUser();
  const date = new Date();
  const embedAr = RetrieveDataset2("posts", 200);

  let reviews = RetrieveDataset("JobLIst", 200, 0);

  var act = i - 1;

  async function getInformation() {
    var id = userData["id"];
    var start = startDate();
    var contact_name = "Steve Bobs";
    var contact_email = "stevebobs@company.com";
    var deadlines = [resumeDue()];
    var deadlines_assoc = ["Await email confirmation"];
    var status = "Ongoing";
    var application_name = reviews[act]["job_title"];

    const { data, error } = await supabase
      .from("applications")
      .insert([
        {
          id: id,
          start: start,
          contact_name: contact_name,
          contact_email: contact_email,
          deadlines: deadlines,
          deadline_assoc: deadlines_assoc,
          status: status,
          application_name: application_name,
        },
      ])
      .select();
    if (error) {
      console.log(error);
    }

    window.location.assign("/profile");
  }

  function resumeDue() {
    var day = date.getDate() + 5;
    var month = day > 30 ? date.getMonth() + 2 : date.getMonth() + 1;
    var year = date.getFullYear();

    var fullDate =
      month.toString() + "/" + day.toString() + "/" + year.toString();
    return fullDate;
  }

  function startDate() {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var fullDate =
      month.toString() + "/" + day.toString() + "/" + year.toString();
    return fullDate;
  }

  if (i == undefined || reviews == [] || !i || !userData || userData == null) {
    console.log(i, userData, reviews);
    return (
      <div class="main padd">
        <SpacingCont amount="14" />
        <div class="container shaded round col-8  ">
          <SpacingCont amount="2" />
          <h3 class="d-flex justify-content-center">Unexpected Error</h3>
          <h2 class="d-flex justify-content-center">¯\_(ツ)_/¯</h2>
          <h3 class="d-flex justify-content-center">
            Please refresh or click to another page on the navbar
          </h3>
          <SpacingCont amount="2" />
        </div>
        <SpacingCont amount="14" />
      </div>
    );
  } else {
    return (
      <div class="main">
        <SpacingCont amount="7" />
        <div class="center col-xl-10">
        <div class="row padd">
          <div class=" shaded round col-6 ">
            <SpacingCont amount="2" />
            <h2 class="d-flex justify-content-center">
              Congratulations! You are almost there!
            </h2>
            <SpacingCont amount="2" />
            <div class="">
              <div class="col-10">
                <Card
                  title={reviews[act]["job_title"]}
                  loc={"Location: " + reviews[act]["location"]}
                  emp={"Job Type: " + reviews[act]["employment_type"]}
                  desc={"Description: " + reviews[act]["job_desc"]}
                  clas="padd"
                  button="no"
                />
              </div>
            </div>
            <SpacingCont amount="3" />

            <div id="error" class=""></div>
            <GenerateResumeHelp user={userData} act={act} posts={embedAr}/>
            <SpacingCont amount="3"/>
            <div class="">
              <div class="padd ">
             
                <h3 class="">
                  Anything You Want To Highlight For Our Team:{" "}
                </h3>
                <SpacingCont amount="1"/>
                <Inputs
                  ids="extraInfo"
                  name="100 Word Limit"
                  clas=" padd"
                  type="text"
                />
                <SpacingCont amount="5" />
                <Button
                  name="Submit"
                  clas="-primary btn-lg d-flex justify-content-center"
                  click={getInformation}
                />
              </div>
            </div>

            <SpacingCont amount="3" />
          </div>
          <div class="sticky-top col standHeight">
            <GetResume userData={userData}/>
          </div>
        </div>
        </div>
        <SpacingCont amount="2" />
      </div>
    );
  }
};

const RetrieveDataset2 = (dataset, range, start) => {
  if(!start || start == null){
    start = 0;
  }
  const [reviews, setReviews] = useState("");

  async function getReviews() {
    let { data, error } = await supabase
      .from(dataset)
      .select()
      .range(start, range)
      .order('id');
    setReviews(data);
    if(error){
      console.log(error);
    }
  }

  

  useEffect(() => {
    getReviews();
  }, []);

  return reviews;
}

function GenerateResumeHelp({user, act, posts}) {
  var embedAr = posts;

  if(embedAr[act] == undefined){
    console.log(embedAr);
    console.log("act: " + act);
    return (
      <div class="shaded round padd">
        <h1 class="padd">
          Unable to generate AI Insights.
        </h1>
      </div>
    )
  }
  const [app, setApp] = useState("");
  const embedArr = user["resumeEmbed"];
  var embedQ = embedAr[act]["embedding"];
  var bodies = user["resumeBody"];
  console.log(embedAr);
  console.log("act: " + act);
  try {

    var context = findClosestParagraphs(embedArr, bodies, embedQ, 5);

    const newQuery = "You are helping a job applicant stand out in their job application to " +  embedAr[act]["title"] +". Suggest how highlighting these points on the job applicants resume would help them be appealing for the job :\n\n" +
    "Resume points :\n" +
    context.join("\n\n") +
    "\n\nJob Description :\n" +
    embedAr[act]["body"] +
    "? Address your response directly to the job applicant"

    console.log(newQuery);
    async function getResHelp() {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: newQuery }],
          temperature: 0,
          max_tokens: 1000,
        },
        {
          headers: {
            Authorization: `Bearer ${OpenAIKey}`,
          },
        }
      );
      setApp(response.data.choices[0].message.content);
    }
    
    useEffect(() => {
      getResHelp();
    }, []);

    if(app) {
      return (
        <div class="padd">
          
          <div class="shaded padd round">
          <h1 class="padd">AI Insights</h1>
            <pre class="h4 padd  ">{app}</pre> 
          </div>
        </div>
        
      );
    } else {
      return (
        <div class="padd">
          <div class="shaded padd round">
            <h1 class="padd">
              Loading AI Insights
            </h1>
            <Loader/>
          </div>
        </div>
      )
    }
  } catch (error) {
    console.error("Error generating response:", error);
    throw error;
  }
}

const Loader = (props) => {
  return (
    <div className="bouncing-loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const findClosestParagraphs = (embeds, bodies, questionEmbedding, count) => {

  var items = [];

  for (const key in embeds) {
    let paragraph = bodies[key];
    let currentEmbedding = embeds[key];




    items.push({
      paragraph: paragraph,
      score: compareEmbeddings(questionEmbedding, currentEmbedding),
    });
  }

  items.sort(function (a, b) {
    return b.score - a.score;
  });

  return items.slice(0, count).map((item) => item.paragraph);
};

function GetResume({ userData }) {
  try {
    const [media, setMedia] = useState([]);

    async function getMedia() {
      if (userData) {
        const { data, error } = await supabase.storage
          .from("Resumes")
          .list(userData["id"] + "/", {
            limit: 10,
            offset: 0,
            sortBy: {
              column: "name",
              order: "asc",
            },
          });

        if (data) {
          setMedia(data);
        } else {
          console.log(error);
        }
      }
    }

    useEffect(() => {
      getMedia();
    }, []);
    if (media || media != []) {
      
      return (
        <div class="shaded round standHeight">
          <div class="padd d-flex justify-content-center">
            <Button
              name="Change Resume"
              clas="-primary btn-lg  col-4 "
            />
          </div>
          
          <embed
            src={
              "https://blrlevxupfhqzfmanjla.supabase.co/storage/v1/object/public/Resumes/" + userData["id"] + "/" + 
              media[0]["name"] 
            }
            width="100%"
            class="newHeight padd "
          />
         
        </div>
      );
    } else {
      return <h1>idk</h1>;
    }
  } catch (e) {
    console.log(e);
  }
}

export default Apply;
