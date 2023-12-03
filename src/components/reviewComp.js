import { SpacingCont } from "./qualityOfLife";
import { Card } from "./navbar";

function ReviewCard({ pic1, title, text, rating, employee, clas, contact }) {
  return (
    <div>
      <div class={"card round transparent padd  " + clas}>
        <div class="card-body padd">
          <h3 class="card-title d-flex justify-content-end padd">{title}</h3>
          <div class="padd">
            <p class="card-text">{'"' + text + '"'}</p>
            <p class="card-text">{rating}</p>
            <p class="card-text d-flex justify-content-end">{"-" + employee}</p>
            <p class="card-text d-flex justify-content-end">{contact}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewPush({ data, start, len }) {
  let sendReview = [];
  if (len == undefined) {
    len = data.length;
  }
  if (data == []) {
    return sendReview;
  }
  if (start == undefined) {
    start = 0;
  }
  for (let i = start; i < len; i++) {
    sendReview.push(
      <ReviewCard
        title={data[i]["Position"]}
        text={data[i]["pros"]}
        rating={data[i]["Overall ratting"] + " stars"}
        employee="John Doe"
        contact="johnDoe@myrya.com"
      />,
    );
  }
  return sendReview;
}

export { ReviewCard, ReviewPush };
