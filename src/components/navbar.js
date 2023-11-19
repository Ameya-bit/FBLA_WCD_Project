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
            <NavBarLinks name="Explore" link="/jobListings" />
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

function Card({ title, loc, emp, desc, clas }) {
  return (
    <div class={"card " + clas} style={{ width: "100%" }}>
      <div class="card-body">
        <h1 class="card-title">{title}</h1>
        <p class="card-text">{loc}</p>
        <p class="card-text">{emp}</p>
        <p class="card-text">{desc}</p>
      </div>
    </div>
  );
}

function Image({ pic1, text, clas, imgclas, textclas }) {
  return (
    <div class={"  " + clas}>
      <img class={"card-img-top " + imgclas} src={pic1} alt="" />
      <div id="textcont" class="card-img-overlay d-flex ">
        <h2 class={"card-text centered " + textclas}>{text}</h2>
      </div>
    </div>
  );
}

function Inputs({ name }) {
  return (
    <div class="input-group mb-3">
      <span class="input-group-text">{name}</span>
      <input type="text" class="form-control" />
    </div>
  );
}

export { Card, Image, Inputs, OffCanvas };
