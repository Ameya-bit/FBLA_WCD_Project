import data from "../data/jobs.json";
import { Card } from "../components/navbar";

function JobPush({ start, end, moreInfo, category, location, type }) {
  let send = [];
  category = isUnd(category, "");
  location = isUnd(location, "");
  type = isUnd(type, "");
  let dataset = assembleMultList(category, location, type);
  start = isUnd(start, 0);
  moreInfo = isUnd(moreInfo, false);
  end = isUnd2(end, dataset.length, dataset.length);

  for (var i = start; i < end; i++) {
    if (moreInfo == true) {
      send.push(
        <Card
          title={dataset[i]["job_title"]}
          loc={"Location: " + dataset[i]["location"]}
          emp={"Job Type: " + dataset[i]["employment_type"]}
          desc={"Description: " + dataset[i]["job_desc"]}
          link={dataset[i]["job_id"]}
        />,
      );
    } else {
      send.push(
        <Card
          title={dataset[i]["job_title"]}
          loc={"Department: " + dataset[i]["department"]}
          link={dataset[i]["job_id"]}
        />,
      );
    }
  }
  return send;
}

function isUnd(check, base) {
  if (check == undefined) {
    return base;
  } else {
    return check;
  }
}

function isUnd2(check, addCheck, base) {
  if (check == undefined || check > addCheck) {
    return base;
  } else {
    return check;
  }
}

function assembleMultList(category, location, type) {
  let cateFilt = assembleList(category, data);
  let locFilt = assembleList(location, cateFilt);
  let typeFilt = assembleList(type, locFilt);
  return typeFilt;
}

function assembleList(given, dataset) {
  if (given == "") {
    return dataset;
  }
  let array = dataset;
  let filteredArray = [];
  for (let i = 0; i < dataset.length; i++) {
    let obj = array[i];
    for (let j in obj) {
      if (obj[j] == given) {
        filteredArray.push(obj);
      }
    }
  }
  return filteredArray;
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
  console.log(comp);
  return (
    <div class={"card " + clas} style={{ width: "100%" }}>
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
