import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import TopNavBar from "./TopNav/TopNavbar";


import Notnav from "./NotNav/Notnav";
function Nav() {
  const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div>
      <TopNavBar/>
      <Notnav/>

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
              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-white ms-4 dropdown-toggle-no-arrow"
                  id="navbarDropdownAbout"
                  role="button"
                  onClick={() => toggleDropdown('about')}
                  aria-expanded={activeDropdown === 'about'}
                >
                  About Us
                </Link>
                {activeDropdown === 'about' && (
                  <ul className="dropdown-menu no-arrow" aria-labelledby="navbarDropdownAbout">
                    <li><Link className="dropdown-item" to="/about">About Manjira Devi</Link></li>
                    <li><Link className="dropdown-item" to="/vision">Our Vision and Mission</Link></li>
                  </ul>
                )}
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link text-white ms-4 dropdown-toggle-no-arrow"
                  id="navbarDropdownSchool"
                  role="button"
                  onClick={() => toggleDropdown('school')}
                  aria-expanded={activeDropdown === 'school'}
                >
                  School
                </Link>
                {activeDropdown === 'school' && (
                  <div className="dropdown-fullpage">
                    <div className="dropdown-menu-columns">
                      <ul className="dropdown-menu" style={{ fontSize: '13px', lineHeight: '1.1' }}>
                        <li><Link className="dropdown-item" to="/school1"><i className="fas fa-arrow-circle-right"></i> School of Engineering</Link></li>
                        <ul className="nested-dropdown">
                          <li><Link className="dropdown-item" to="/engineer">Diploma in CE</Link></li>
                          <li><Link className="dropdown-item" to="/mechanic">Diploma in ME</Link></li>
                          <li><Link className="dropdown-item" to="/cse">Diploma in CSE</Link></li>
                        </ul>
                        <li><Link className="dropdown-item" to="/school2"><i className="fas fa-arrow-circle-right"></i> School of Science And Technology</Link></li>
                        <ul className="nested-dropdown">
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
                        <ul className="nested-dropdown">
                          <li><Link className="dropdown-item" to="/bcom">B.Com</Link></li>
                          <li><Link className="dropdown-item" to="/bba">BBA</Link></li>
                          <li><Link className="dropdown-item" to="/mcom">M.Com</Link></li>
                          <li><Link className="dropdown-item" to="/mba">MBA</Link></li>
                          <li><Link className="dropdown-item" to="/phd">Ph.D</Link></li>
                        </ul>
                        <li><Link className="dropdown-item" to="/school4"><i className="fas fa-arrow-circle-right"></i> School of Agriculture</Link></li>
                        <ul className="nested-dropdown">
                          <li><Link className="dropdown-item" to="/diploma">Diploma in Agriculture</Link></li>
                          <li><Link className="dropdown-item" to="/bscagr">B.Sc in agriculture</Link></li>
                          <li><Link className="dropdown-item" to="/mscagr">M.Sc in Agriculture</Link></li>
                          <li><Link className="dropdown-item" to="/mschor">M.Sc in Horticulture</Link></li>
                        </ul>
                        <li><Link className="dropdown-item" to="/artsschool"><i className="fas fa-arrow-circle-right"></i> School of Arts and Humanity</Link></li>
                        <ul className="nested-dropdown">
                          <li><Link className="dropdown-item" to="/baarts">B.A</Link></li>
                          <li><Link className="dropdown-item" to="/bedarts">B.Ed</Link></li>
                          <li><Link className="dropdown-item" to="/maarts">M.A</Link></li>
                          <li><Link className="dropdown-item" to="/phdarts">Ph.D</Link></li>
                        </ul>
                        <li><Link className="dropdown-item" to="/yogicschool"><i className="fas fa-arrow-circle-right"></i> School of Yogic Science and Naturopathy</Link></li>
                        <ul className="nested-dropdown">
                          <li><Link className="dropdown-item" to="/yogicbnys">BNYS</Link></li>
                          <li><Link className="dropdown-item" to="/yogicbsc">B.Sc</Link></li>
                          <li><Link className="dropdown-item" to="/yogicma">M.A</Link></li>
                          <li><Link className="dropdown-item" to="/yogicmsc">M.Sc</Link></li>
                          <li><Link className="dropdown-item" to="/yogicphd">Ph.D</Link></li>
                          <li><Link className="dropdown-item" to="/yogicpgd">PGD-Yoga</Link></li>
                        </ul>
                        <li><Link className="dropdown-item" to="/nursingschool"><i className="fas fa-arrow-circle-right"></i> School of Nursing and Paramedical Science</Link></li>
                        <ul className="nested-dropdown">
                          <li><Link className="dropdown-item" to="/nursingbpharma">B.Pharma</Link></li>
                          <li><Link className="dropdown-item" to="/nursingbsc">B.Sc Nursing</Link></li>
                          <li><Link className="dropdown-item" to="/nursingmsc">M.Sc in Clinical Psychology</Link></li>
                          <li><Link className="dropdown-item" to="/nursingbpt">BPT</Link></li>
                          <li><Link className="dropdown-item" to="/nursinggnm">GNM</Link></li>
                          <li><Link className="dropdown-item" to="/nursinganm">ANM</Link></li>
                          <li><Link className="dropdown-item" to="/nursingmph">MPH</Link></li>
                          <li><Link className="dropdown-item" to="/nursingdpharma">D.Pharma</Link></li>
                        </ul>
                        <li><Link className="dropdown-item" to="/schoollegal"><i className="fas fa-arrow-circle-right"></i> School of Legal Studies</Link></li>
                        <ul className="nested-dropdown">
                          <li><Link className="dropdown-item" to="/legalballb">BALLB</Link></li>
                          <li><Link className="dropdown-item" to="/legalllb">LLB</Link></li>
                        </ul>
                        <li><Link className="dropdown-item" to="/hotelschool"><i className="fas fa-arrow-circle-right"></i> School of Hotel Management & Tourism</Link></li>
                        <ul className="nested-dropdown">
                          <li><Link className="dropdown-item" to="/hotelbhm">BHM</Link></li>
                          <li><Link className="dropdown-item" to="/hotelbba">BBA in Tourism</Link></li>
                          <li><Link className="dropdown-item" to="/hoteldiploma">Diploma in HM</Link></li>
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