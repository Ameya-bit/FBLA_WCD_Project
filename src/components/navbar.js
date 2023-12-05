import { SpacingCont } from "./qualityOfLife";
import { useEffect, useState } from "react";
import supabase from "../components/supabase.js";

export default function NavBar({ id, name, clas, link1, link2, link3 }) {
  return (
    <nav id={id} class={"navbar navbar-expand-sm " + clas}>
      <div class="container-fluid">
        <a class="navbar-brand col-1 goldtext" href="/" id="navname">
          MYRYA Jobs
        </a>
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse  justify-content-center col-10"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <NavBarLinks name="Discover" link="/Review" />
            <NavBarLinks name="Explore" link="/jobListings?jobNum=0" />
            <NavBarLinks name="Dashboard" link="/profile" />
          </ul>
        </div>

        <div class="col-1"></div>
      </div>
    </nav>
  );
}

function OffCanvas() {
  return (
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Offcanvas right</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">...</div>
    </div>
  );
}

function NavBarLinks({ name, link }) {
  return (
    <li class="nav-item">
      <a id="linkname" class="navbar-brand active" href={link}>
        {name}
      </a>
    </li>
  );
}

function Card({ title, loc, emp, desc, clas, link, height, button, ids }) {
  const queryParameters = new URLSearchParams(window.location.search);
  var i = queryParameters.get("jobNum");
  var category = queryParameters.get("category");
  var location = queryParameters.get("location");
  var type = queryParameters.get("type");
  var keyword = queryParameters.get("keyword");
  category = isUnd(category, "");
  location = isUnd(location, "");
  type = isUnd(type, "");
  keyword = isUnd(keyword, "");
  if (button == "no") {
    return (
      <div class={"card glass round " + clas} style={{ height: height }}>
        <div class="card-body padd">
          <h3 class="card-title d-flex justify-content-end padd">{title}</h3>
          <div class="padd">
            <p class="card-text">{loc}</p>
            <p class="card-text">{emp}</p>
            <p class="card-text">{desc}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div class={"card glass round " + clas} style={{ height: height }}>
        <div class="card-body padd">
          <h3 class="card-title d-flex justify-content-end padd">{title}</h3>
          <div class="padd">
            <p class="card-text">{loc}</p>
            <p class="card-text">{emp}</p>
            <p class="card-text">{desc}</p>
          </div>

          <div
            class="btn-group d-flex justify-content-center padd"
            role="group"
            aria-label="Basic example"
          >
            <Button
              link={"/Apply?applicationNumber=" + link}
              clas="-primary col-8"
              name="Apply Now"
            />
            <Button
              link={
                "/jobListings?jobNum=" +
                link +
                "&category=" +
                category +
                "&type=" +
                type +
                "&location=" +
                location +
                "&keyword=" +
                keyword
              }
              clas="-outline-success col-4 select"
              name="Select"
            />
          </div>
        </div>
      </div>
    );
  }
}

function isUnd(check, base) {
  if (check == undefined || check == null) {
    return base;
  } else {
    return check;
  }
}

function isUnd2(check, addCheck, base) {
  if (check == undefined || check > addCheck || check == null) {
    return base;
  } else {
    return check;
  }
}

function Button({ link, name, clas, click, ids }) {
  return (
    <a href={link} id={ids} onClick={click} class={"btn btn" + clas}>
      {name}
    </a>
  );
}

function Image({ pic1, text, clas, imgclas, textclas }) {
  return (
    <div class={"  " + clas}>
      <img class={"card-img-top " + imgclas} src={pic1} alt="" />
      <div id="textcont" class="card-img-overlay">
        <h2 class={"card-text leftbottom  " + textclas}>{text}</h2>
      </div>
    </div>
  );
}

function Inputs({ name, clas, type, ids, select, selectType }) {
  const [reviews, setReviews] = useState("");

  async function getReviews() {
    let { data, error } = await supabase.from("JobLIst").select();
    setReviews(data);
  }

  useEffect(() => {
    getReviews();
  }, []);
  if (select == "true") {
    let values = [];
    let returnVal = [];
    for (let i = 0; i < reviews.length; i++) {
      if (values.includes(reviews[i][selectType]) == false) {
        values.push(reviews[i][selectType]);
      }
    }
    for (let value in values) {
      if (value == 0) {
        returnVal.push(
          <option class="shadeWhite" value="">
            {name}
          </option>,
        );
      }
      returnVal.push(
        <option class="bluetext" value={values[value]}>
          {values[value]}
        </option>,
      );
    }
    return returnVal;
  } else {
    return (
      <input
        id={ids}
        type={type}
        class={"form-control shaded round shadeWhite  form-control-lg " + clas}
        placeholder={name}
      />
    );
  }
}

function Footer() {
  return (
    <footer class="text-center dodgerblue">
      <div class="container pt-4 ">
        <section class="">
          <form action="">
            <div class="row d-flex justify-content-center"></div>
          </form>
          <NavBarLinks name="Credits" link="/citations" />
        </section>
      </div>
      <div class="text-center p-3 black dodgerblue">MYRYA co.</div>
    </footer>
  );
}

export { Card, Image, Inputs, OffCanvas, Button, Footer };
