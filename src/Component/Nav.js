import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div >
      <div className="container">
        <div className="row  mb-0" >
          <div className="col-md-5 mt-0 ">
            <img src="manjira.png" height="70px" width="100px" alt="Manjira Logo" />
          </div>
          <div className="col-md-3 mt-2">
            <h5 className=" a1 "><i class="bi bi-envelope me-3 a"></i>Email</h5>
            <p className="a11 ">smtmanjiradeviuniversity2024@gmail.com</p>
          </div>
          <div className="col-md-2 mt-2 ">
            <h5 className=" a1"><i className="bi bi-telephone-fill a me-3"></i>Call</h5>
            <p className="a11">Call us:+917017388084</p>
          </div>
          <div className="col-md-2 mt-3 mb-1 ">
            <Link to="/contact" className="btn  ms-auto me-auto a2" data-aos="fade-up">Contact Us</Link>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark mt-0 p-2">
        <div className="container-fluid" >
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
              <li className="nav-item dropdown">
                <Link 
                  className="nav-link text-white ms-4 dropdown-toggle-no-arrow"  
                  id="navbarDropdown" 
                  role="button"
                  aria-expanded="false"
                >
                  About Us
                </Link>
                <ul className="dropdown-menu no-arrow" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/about">About Manjira Devi</Link></li>
                  <li><Link className="dropdown-item" to="/vision">Our Vision and Mission</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown" onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown}>
  <Link 
    className="nav-link text-white ms-4 dropdown-toggle-no-arrow"  
    id="navbarDropdownSchool" 
    role="button"
    aria-expanded="false"
  >
    School
  </Link>
  {isDropdownOpen && (
  <div className="dropdown-fullpage" >
    <div className="dropdown-menu-columns" >
      <ul className="dropdown-menu"  style={{columns:'2', fontSize: '14px', lineHeight: '1.2'}}>
        <li><Link className="dropdown-item" to="/school1"><i className="fas fa-arrow-circle-right"></i> School of Engineering</Link></li>
        <ul  style={{columns:'2'}}>
          <li><Link className="dropdown-item" to="/engineer">Diploma in CE</Link></li>
          <li><Link className="dropdown-item" to="/mechanic">Diploma in ME</Link></li>
          <li><Link className="dropdown-item" to="/cse">Diploma in CSE</Link></li>
        </ul>
        <li><Link className="dropdown-item" to="/school2"><i className="fas fa-arrow-circle-right"></i> School of Science And Technology</Link></li>
        <ul  style={{columns:'2'}}>
          <li><Link className="dropdown-item" to="/bsc">B.Sc</Link></li>
          <li><Link className="dropdown-item" to="/bca">BCA</Link></li>
          <li><Link className="dropdown-item" to="/ai">Diploma in AI And Machine Learning</Link></li>
          <li><Link className="dropdown-item" to="/data">Diploma in Data Science & Cloud Technology</Link></li>
          <li><Link className="dropdown-item" to="/cyber">Diploma in Cyber Security</Link></li>
          <li><Link className="dropdown-item" to="/foresic">Diploma in Forensic Science</Link></li>
          <li><Link className="dropdown-item" to="/msc">M.Sc</Link></li>
          <li><Link className="dropdown-item" to="/mca">MCA</Link></li>
        </ul>
        <li><Link className="dropdown-item" to="/school3"><i className="fas fa-arrow-circle-right"></i> School Of Commerce And Management Studies</Link></li>
        <ul style={{columns:'2'}}>
          <li><Link className="dropdown-item" to="/compEng">B.Com</Link></li>
          <li><Link className="dropdown-item" to="/compEng">BBA</Link></li>
          <li><Link className="dropdown-item" to="/compEng">M.Com</Link></li>
          <li><Link className="dropdown-item" to="/compEng">MBA</Link></li>
          <li><Link className="dropdown-item" to="/compEng">Ph.D</Link></li>
        </ul>
        <li><Link className="dropdown-item" to="/school4"><i className="fas fa-arrow-circle-right"></i> School of Agriculture</Link></li>
        <ul style={{columns:'2'}}>
          <li><Link className="dropdown-item" to="/compEng">Diploma in Agriculture</Link></li>
          <li><Link className="dropdown-item" to="/compEng">B.Sc in agriculture</Link></li>
          <li><Link className="dropdown-item" to="/compEng">M.Sc in Agriculture</Link></li>
          <li><Link className="dropdown-item" to="/compEng">M.Sc in Horticulture</Link></li>
        </ul>
        <br></br><br></br>
        <li><Link className="dropdown-item" to="/school5"><i className="fas fa-arrow-circle-right"></i> School of Arts and Humanity</Link></li>
        <ul style={{columns:'2'}}>
          <li><Link className="dropdown-item" to="/compEng">B.A</Link></li>
          <li><Link className="dropdown-item" to="/compEng">B.Ed</Link></li>
          <li><Link className="dropdown-item" to="/compEng">M.A</Link></li>
          <li><Link className="dropdown-item" to="/compEng">Ph.D</Link></li>
        </ul>
        <li><Link className="dropdown-item" to="/school6"><i className="fas fa-arrow-circle-right"></i> School of Yogic Science and Naturopathy</Link></li>
        <ul style={{columns:'2'}}>
          <li><Link className="dropdown-item" to="/compEng">BNYS</Link></li>
          <li><Link className="dropdown-item" to="/compEng">B.Sc</Link></li>
          <li><Link className="dropdown-item" to="/compEng">M.A</Link></li>
          <li><Link className="dropdown-item" to="/compEng">M.Sc</Link></li>
          <li><Link className="dropdown-item" to="/compEng">Ph.D</Link></li>
          <li><Link className="dropdown-item" to="/compEng">PGD-Yoga</Link></li>
        </ul>
        <li><Link className="dropdown-item" to="/school7"><i className="fas fa-arrow-circle-right"></i> School of Nursing and Paramedical Science</Link></li>
        <ul style={{columns:'2'}}>
          <li><Link className="dropdown-item" to="/compEng">B.Pharma</Link></li>
          <li><Link className="dropdown-item" to="/compEng">B.Sc Nursing</Link></li>
          <li><Link className="dropdown-item" to="/compEng">M.Sc in Clinical Psychology</Link></li>
          <li><Link className="dropdown-item" to="/compEng">BPT</Link></li>
          <li><Link className="dropdown-item" to="/compEng">GNM</Link></li>
          <li><Link className="dropdown-item" to="/compEng">ANM</Link></li>
          <li><Link className="dropdown-item" to="/compEng">MPH</Link></li>
          <li><Link className="dropdown-item" to="/">D.Pharma</Link></li>
        </ul>
        <li><Link className="dropdown-item" to="/school8"><i className="fas fa-arrow-circle-right"></i> School of Legal Studies</Link></li>
        <ul style={{columns:'2'}}>
          <li><Link className="dropdown-item" to="/compEng">BALLB</Link></li>
          <li><Link className="dropdown-item" to="/compEng">LLB</Link></li>
        </ul>
        <li><Link className="dropdown-item" to="/school9"><i className="fas fa-arrow-circle-right"></i> School of Hotel Management & Tourism</Link></li>
        <ul style={{columns:'2'}}>
          <li><Link className="dropdown-item" to="/compEng">BHM</Link></li>
          <li><Link className="dropdown-item" to="/compEng">BBA in Tourism</Link></li>
          <li><Link className="dropdown-item" to="/compEng">Diploma in HM</Link></li>
        </ul>
      </ul>
    </div>
  </div>
)}

</li>
              <li className="nav-item">
                <Link className="nav-link text-white ms-4" to="/program">Programmes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ms-4" to="/admission">Admissions</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ms-4" to="/academics">Academics</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ms-4" to="/research">Research</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white ms-4" to="/layout">Placements</Link>
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
