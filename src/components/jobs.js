import { useEffect, useState } from "react";
import { supabase } from "../components/supabase.js";
import { Card } from "../components/navbar";
import { isUnd, isUnd2 } from "../components/qualityOfLife.js";

function JobPush({ start, end, moreInfo, category, location, keyword, type }) {
  category = isUnd(category, "");
  location = isUnd(location, "");
  type = isUnd(type, "");
  keyword = isUnd(keyword, "");
  console.log(keyword);
  const [reviews, setReviews] = useState("");

  async function getReviews() {
    let query = supabase.from("JobLIst").select();

    if (category != "") {
      query.eq("job_title", category);
    }
    if (location != "") {
      query.eq("location", location);
    }
    if (type != "") {
      query.eq("employment_type", type);
    }
    if (keyword != "") {
      query.ilike("department", "%" + keyword + "%");
    }

    query.range(0, 199);
    const { data, error } = await query;
    setReviews(data);
  }

  useEffect(() => {
    getReviews();
  }, []);

  let send = [];

  let dataset = reviews;
  start = isUnd(start, 0);
  moreInfo = isUnd(moreInfo, false);
  end = isUnd2(end, dataset.length, dataset.length);

  for (var i = start; i < end; i++) {
    var iInc = i + 1;
    if (moreInfo == "true") {
      send.push(
        <Card
          title={iInc + ". " + dataset[i]["job_title"]}
          loc={"Location: " + dataset[i]["location"]}
          emp={"Job Type: " + dataset[i]["employment_type"]}
          desc={"Description: " + dataset[i]["job_desc"]}
          link={dataset[i]["job_id"]}
        />,
      );
    } else {
      send.push(
        <Card
          title={iInc + ". " + dataset[i]["job_title"]}
          loc={"Department: " + dataset[i]["department"]}
          link={dataset[i]["job_id"]}
        />,
      );
    }
  }
  return send;
}

function StatusCard({
  clas,
  title,
  supervisor,
  supercont,
  interviewStat,
  start,
  compDates,
}) {
  let comp = compDates.replace(/;/g, "\n");
  return (
    <div class={"card glass  round " + clas} style={{ width: "100%" }}>
      <div class="card-body">
        <h1 class="card-title d-flex justify-content-center">{title}</h1>
        <div class="card-columns">
          <Card title="Upcoming Dates: " emp={interviewStat} button="no" />
          <Card
            title="Current Supervisor: "
            emp={supervisor}
            desc={supercont}
            button="no"
          />
          <Card
            title="Current Timeline: "
            emp={"You applied on " + start}
            desc={"Completed: " + comp}
            button="no"
          />
        </div>
        <div class="progress">
          <div
            class="progress-bar "
            style={{ width: "1%" }}
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
}

function AIintegrate() {
  return (
    <div>
      <div class="offcanvas-header">
        <h1 class="offcanvas-title">AI</h1>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>
      <div class="offcanvas-body">
        <p>fjdkslajfd</p>
        <p>Some text lorem ipsum.</p>
        <p>Some text lorem ipsum.</p>
        <button class="btn btn-secondary" type="button">
          A Button
        </button>
      </div>
    </div>
  );
}

export { JobPush, StatusCard, AIintegrate };
