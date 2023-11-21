import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import NavBar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.js";
import JobListing from "./pages/jobListings";
import Profile from "./pages/profile";
import Apply from "./pages/apply.js"
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
        <Route path="/jobListings" element={<JobListing />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Apply" element={<Apply />} />
      </Routes>
      <NavBar id="footer" clas="navbar navbar-expand-lg navbar-dark" />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
