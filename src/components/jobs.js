import data from "../data/db";
import { Card } from "../components/navbar";

function JobPush({ num }) {
  let send = [];
  let dataHead = data["jobs"];
  let amount;
  if (num == undefined) {
    amount = dataHead.length;
  } else {
    amount = num;
  }
  for (var i = 0; i < amount; i++) {
    send.push(
      <Card
        title={dataHead[i]["title"]}
        loc={"Location: " + dataHead[i]["location"]}
        emp={"Job Type: " + dataHead[i]["employment_type"]}
        desc={"Description: " + dataHead[i]["description"]}
      />
    );
  }
  return send;
}

function StatusCard({ clas, title, interviewStat, estimatedTime }) {
  return (
    <div class={"card " + clas} style={{ width: "100%" }}>
      <div class="card-body">
        <h1 class="card-title d-flex justify-content-center">{title}</h1>
        <div class="card-columns">
          <Card
            title="Upcoming Dates: "
            emp="Resume Deadline, Feb 13"
            desc="Interview, Feb 29"
          />
          <Card
            title="Current Supervisor: "
            emp="Assistant Manager (Rob Jobs)"
            desc="Contact: robjobs@company.com"
          />
          <Card
            title="Current Timeline: "
            emp="You applied 3 weeks ago"
            desc=""
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

export { JobPush, StatusCard };
