import { SpacingCont } from "./qualityOfLife";
import { Card } from "./navbar";

function ReviewCard({
  pic1,
  title,
  text,
  rating,
  employee,
  clas,
  contact,
  condense,
}) {
  return (
    <div class="padd col">
      <div class={"card h-100 round glass " + clas}>
      <div class=" padd">
        <div class="padd">
          <p class="">{'"' + text + '"'}</p>
          <p class=" d-flex justify-content-end">{rating}</p>
          <p class=" d-flex justify-content-end">{"-" + contact}</p>
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
      />
    );
  }
  return sendReview;
}

export { ReviewCard, ReviewPush };
