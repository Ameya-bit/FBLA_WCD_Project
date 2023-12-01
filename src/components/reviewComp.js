import { SpacingCont } from "./qualityOfLife";

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

export { ReviewCard };
