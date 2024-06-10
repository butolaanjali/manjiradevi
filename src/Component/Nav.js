import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Nav.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="container">
        <div className="row mt-2">
          <div className="col-md-6 mb-2">
            <img src="manjira.png" height="120px" width="150px" alt="Manjira Logo" />
          </div>
          <div className="col-md-2">
            <h5 className="mt-4 a1 "><i class="bi bi-envelope me-3 a"></i>Email</h5>
            <p className="a11">manjiradevi@gmail.com</p>
          </div>
          <div className="col-md-2 ">
            <h5 className="mt-4 a1"><i className="bi bi-telephone-fill a me-3"></i>Call</h5>
            <p className="a11">Call us:+919089098987</p>
          </div>
          <div className="col-md-2 mb-2">
            <a className="btn mt-4 ms-auto me-auto a2" data-aos="fade-up">Contact Us</a>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark mt-0 p-2">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link className="nav-link active ms-4" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ms-4" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ms-4" to="/schools">Schools</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ms-4" to="/programmes">Programmes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ms-4" to="/admissions">Admissions</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ms-4" to="/academics">Academics</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ms-4" to="/research">Research</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ms-4" to="/placements">Placements</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ms-4" to="/lifemanjira">Life@MANJIRA</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ms-4" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
     
    </div>
  );
}

export default Nav;