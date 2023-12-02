import { SpacingCont } from "./qualityOfLife";
import { Card } from "./navbar";

function ReviewCard({ pic1, title, text, rating, clas, imgclas, textclas }) {
  return (
    <div class={"card round shaded text-white " + clas}>
      <div class="card-body padd">
        <h3 class="card-title d-flex justify-content-end padd">{title}</h3>
        <div class="padd">
          <p class="card-text">{text}</p>
          <p class="card-text">{rating}</p>
        </div>
      </div>
    </div>
  );
}

function ReviewPush(data) {
  let sendReview = [];
  console.log(data["data"]);
  for (let i = 0; i < data["data"].length; i++) {
    sendReview.push(
      <Card
        title={data["data"][i]["Position"]}
        loc={data["data"][i]["pros"]}
      />,
    );
  }
  return sendReview;
}

export { ReviewCard, ReviewPush };
