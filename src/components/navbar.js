import { SpacingCont } from "./qualityOfLife";

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
        <button
              class="btn btn-primary d-flex justify-content-end"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#demo"
            >
              help
            </button>
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

function Card({ title, loc, emp, desc, clas, link, height }) {
  return (
    <div class={"card " + clas} style={{ height: height }}>
      <div class="card-body">
        <h3 class="card-title d-flex justify-content-center">{title}</h3>
        <p class="card-text">{loc}</p>
        <p class="card-text">{emp}</p>
        <p class="card-text">{desc}</p>
        <div class="card-columns d-flex justify-content-center padd">
          <Button link={"/Apply?applicationNumber=" + link} name="Apply Now"/>
          <Button link={"/jobListings?jobNum=" + link} name="Learn More"/>
        </div>
        
      </div>
    </div>
  );
}

function Button({link, name }){
  return (
    <div class="d-grid gap-2 col-4 mx-auto ">
      <a href={link} class="btn btn-primary">{name}</a>

    </div>
  )
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

function Inputs({ name, clas, type}) {
  return (
  <div class={"input-group mb-3 round " + clas}>
      <input type={type} class="form-control" placeholder={name}/>
    </div>
  );
}

function Footer(){
  return (
    <footer class="text-center gold">

      <div class="container pt-4 ">

      
      </div>
      <div class="text-center p-3 black gold" >
        Webstie
      </div>
    </footer>
  );
}

export { Card, Image, Inputs, OffCanvas, Button, Footer };
