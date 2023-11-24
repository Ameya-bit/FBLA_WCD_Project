import data from "../data/jobs";
import { Card } from "../components/navbar";

function JobPush({ start, end, moreInfo }) {
  let send = [];
  let amount;
  if (start == undefined) {
    start = 1;
  }
  if (moreInfo == undefined) {
    moreInfo = true;
  }
  if (end == undefined) {
    end = dataHead.length;
  }
  for (var i = start; i < end; i++) {
    console.log(i)
    if(moreInfo == true){
      send.push(
        <Card
          title={data[i]["job_title"]}
          loc={"Location: " + data[i]["location"]}
          emp={"Job Type: " + data[i]["employment_type"]}
          desc={"Description: " + data[i]["job_desc"]}
          link={i}
  
        />
      );
    }
    else{
      send.push(
        <Card
          title={data[i]["job_title"]}
          loc={"Department: " + data[i]["department"]}
          link={i}
        />
      );
    }
  }
  return send;
}

function StatusCard({ clas, title, supervisor, supercont, interviewStat, start, compDates }) {
  let comp = compDates.replace(/;/g, "\n")
  console.log(comp)
  return (
    <div class={"card " + clas} style={{ width: "100%" }}>
      <div class="card-body">
        <h1 class="card-title d-flex justify-content-center">{title}</h1>
        <div class="card-columns">
          <Card
            title="Upcoming Dates: "
            emp={interviewStat}
            button="no"
          />
          <Card
            title="Current Supervisor: "
            emp={supervisor}
            desc={supercont}
            button="no"
          />
          <Card
            title="Current Timeline: "
            emp={"You applied on " + start }
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

function AIintegrate(){
  return(
    <div>
      <div class="offcanvas-header">
        <h1 class="offcanvas-title">AI</h1>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
      </div>
      <div class="offcanvas-body">
        <p>fjdkslajfd</p>
        <p>Some text lorem ipsum.</p>
        <p>Some text lorem ipsum.</p>
        <button class="btn btn-secondary" type="button">A Button</button>
      </div>
    </div>
  )
}

export { JobPush, StatusCard, AIintegrate };
