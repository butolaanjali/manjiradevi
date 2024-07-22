import React, { useState } from "react";
import { Link } from "react-router-dom";
import PopupForm from './PopupForm';  // Ensure this file exists and the name is correct
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Notnav.css";

const Notnav = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  

 
  return (
    <div>
      <div className="container-fluid ww3">
        <div className="row mb-0">
          <div className="col-md-4 mt-0">
            <img src="Smt1.png" height="110px" width="230px" alt="Manjira Logo" />
          </div>
          
          <div className="col-md-3">
            <p className="a1">
              <i className="bi bi-telephone-fill a me-2 mb-0"></i>+917017388084
              <br />
              <i className="fa-brands fa-whatsapp a me-2"></i>+917017388084
            </p>
          </div>
          <div className="col-md-3">
            <button className="open-form-btn p-2 lo" onClick={togglePopup}>Enquiry Form  2024</button>
            <PopupForm show={showPopup} handleClose={togglePopup} />
            <h6 className="ml-2 cl mt-1">Click here Fee payment</h6>
          </div>
          <div className="col-md-2">
            <Link to="/entrancepdf" className="n" data-aos="fade-up">
              <h6 className="add p-1">Ph.D & B.Ed Admissions open June- 2024</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notnav;
