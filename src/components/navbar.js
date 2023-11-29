import { SpacingCont } from "./qualityOfLife";
import data from "../data/jobs.json";

export default function NavBar({ id, name, clas, link1, link2, link3 }) {
  return (
    <nav id={id} class={clas}>
      <div class="container-fluid">
        <a class="navbar-brand col-1" href="/" id="navname">
          FBLA Jobs
        </a>

        <div
          class="collapse navbar-collapse  justify-content-center col-10"
          id="navbarNav"
        >
          <ul class="navbar-nav">
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

function Card({ title, loc, emp, desc, clas, link, height, button }) {
  if (button == "no") {
    return (
      <div class={"card " + clas} style={{ height: height }}>
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
      <div class={"card " + clas} style={{ height: height }}>
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
              link={"/jobListings?jobNum=" + link}
              clas="-outline-success col-4"
              name="Select"
            />
          </div>
        </div>
      </div>
    );
  }
}

function Button({ link, name, clas, click }) {
  return (
    <a href={link} onClick={click} class={"btn btn" + clas}>
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
  if (select == "true") {
    let values = [];
    let returnVal = [];
    for (let i = 0; i < data.length; i++) {
      if (values.includes(data[i][selectType]) == false) {
        values.push(data[i][selectType]);
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
      returnVal.push(<option value={values[value]}>{values[value]}</option>);
    }
    return returnVal;
  } else {
    return (
      <div class={"input-group mb-3 shadeWhite round " + clas}>
        <input
          id={ids}
          type={type}
          class="form-control shaded shadeWhite form-control-lg"
          placeholder={name}
        />
      </div>
    );
  }
}

function Footer() {
  return (
    <footer class="text-center dodgerblue">
      <div class="container pt-4 ">
        <section class="">
          <form action="">
            <div class="row d-flex justify-content-center">
              <div class="col-auto">
                <p class="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div class="col-md-5 col-12">
                <div data-mdb-input-init class="form-outline mb-4">
                  <input
                    type="email"
                    id="form5Example26"
                    class="form-control"
                  />
                  <label
                    class="form-label"
                    placeholder="Email address"
                    for="form5Example26"
                  ></label>
                </div>
              </div>

              <div class="col-auto">
                <button
                  data-mdb-ripple-init
                  type="submit"
                  class="btn btn-primary mb-4"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>
      <div class="text-center p-3 black dodgerblue">(Insert company name)</div>
    </footer>
  );
}

export { Card, Image, Inputs, OffCanvas, Button, Footer };
