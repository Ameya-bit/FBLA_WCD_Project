import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import NavBar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.js";
import About from "./pages/about";
import JobListing from "./pages/jobListings";
import Profile from "./pages/profile";
import { SpacingCont } from "./pages/qualityOfLife";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar
        id="navbar"
        clas="navbar navbar-expand-lg navbar-dark fixed-top"
      />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobListings" element={<JobListing />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      <SpacingCont amount="10" />
      <NavBar id="footer" clas="navbar navbar-expand-lg navbar-dark" />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
