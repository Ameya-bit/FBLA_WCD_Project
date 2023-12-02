import { SpacingCont } from "./qualityOfLife";
import { Card } from "./navbar";

function ReviewCard({ pic1, title, text, rating, clas, imgclas, textclas }) {
  return (
    <div>
      <div class={"card round glass padd  " + clas}>
        <div class="card-body padd">
          <div class="padd">
            <p class="card-text">{'"' + text + '"'}</p>
            <p class="card-text">{rating}</p>
          </div>
          <h3 class="card-title d-flex justify-content-end padd">
            {"-" + title}
          </h3>
        </div>
      </div>
      <SpacingCont amount="1" />
    </div>
  );
}

function ReviewPush(data, { len }) {
  let sendReview = [];
  console.log(data["len"]);
  if (data["len"] == undefined) {
    len = data["data"].length;
  }
  console.log(data);
  if (data["data"] == []) {
    return sendReview;
  }
  for (let i = 0; i < data["len"]; i++) {
    sendReview.push(
      <ReviewCard
        title={data["data"][i]["Position"]}
        text={data["data"][i]["pros"]}
        rating={data["data"][i]["Overall ratting"] + " stars"}
      />,
    );
  }
  return sendReview;
}

export { ReviewCard, ReviewPush };
