import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "./review.css";
import "./myrical.css";

import { AIintegrate } from "./components/jobs.js";
import OffCanvas from "./components/myrical.js";
import NavBar, { Footer } from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.js";
import JobListing from "./pages/jobListings";
import Profile from "./pages/profile";
import Apply from "./pages/apply.js";
import Review from "./pages/review.js";
import Citations from "./pages/citations.js";
import SignIn from "./pages/signIn.js";
import SignUp from "./pages/signUp.js";
import Error from "./pages/error.js";
import { SpacingCont } from "./pages/qualityOfLife";

try {
  ReactDOM.render(
    <React.StrictMode>
      <OffCanvas/>
      <Router>
        <NavBar
          id="navbar"
          clas="navbar navbar-expand-lg navbar-dark fixed-top"
        />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/jobListings" element={<JobListing />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Apply" element={<Apply />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/Citations" element={<Citations />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/error" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>,
    document.getElementById("root"),
  );
} catch(e) {
  console.log(e);
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(<Error />)
}


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AIintegrate></AIintegrate>
    </Router>
  </React.StrictMode>,
  document.getElementById("chatGPTintegrate"),
);
