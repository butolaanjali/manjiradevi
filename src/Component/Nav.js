import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import TopNavBar from "./TopNav/TopNavbar";
import Notnav from "./NotNav/Notnav";

function Nav() {
  const [showPopup, setShowPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    setActiveSubDropdown(null); // Close sub-dropdowns when main dropdown changes
  };

  const toggleSubDropdown = (subDropdown) => {
    setActiveSubDropdown(activeSubDropdown === subDropdown ? null : subDropdown);
  };

  return (
    <div>
      <TopNavBar />
      <Notnav />
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
                  <ul className="dropdown-menu no-arrow mt-2" aria-labelledby="navbarDropdownAbout" style={{ columns: '1' }}>
                    <li><Link className="dropdown-item mt-2" to="/about">About Manjira Devi</Link></li><hr className="hr1nav" />
                    <li><Link className="dropdown-item mt-2" to="/vision">Our Vision and Mission</Link></li><hr className="hr1nav" />
                    <li><Link className="dropdown-item mt-2" to="/msg">Chancellor's Message</Link></li><hr className="hr1nav" />
                    <li><Link className="dropdown-item mt-2" to="/registarmsg">Registrar's Message</Link></li><hr className="hr1nav" />
                    <li><Link className="dropdown-item mt-2" to="/visemsg">Vice Chancellor's Message</Link></li>
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
                  <i className="fas fa-angle-down ms-2"></i>
                </Link>
                {activeDropdown === 'school' && (
                  <ul className="dropdown-menu no-arrow mt-2" aria-labelledby="navbarDropdownSchool" style={{ columns: '1' }}>
                    <li
                      className={`dropdown-submenu ${activeSubDropdown === 'engineering' ? 'show' : ''}`}
                      onMouseEnter={() => toggleSubDropdown('engineering')}
                      onMouseLeave={() => toggleSubDropdown(null)}
                    >
                      <Link className="dropdown-item mt-2" to="/school1">
                        School of Engineering
                        <i className="fas fa-angle-right float-end"></i>
                      </Link>
                      {activeSubDropdown === 'engineering' && (
      <ul className="dropdown-menu" style={{ columns: '1' }}>
        <li style={{ display: 'block' }}>
          <Link className="dropdown-item" to="/engineer">Diploma in CE</Link>
        </li>
        <li style={{ display: 'block' }}>
          <Link className="dropdown-item" to="/mechanic">Diploma in ME</Link>
        </li>
        <li style={{ display: 'block' }}>
          <Link className="dropdown-item" to="/cse">Diploma in CSE</Link>
        </li>
        <li style={{ display: 'block' }}>
          <Link className="dropdown-item" to="/electrical">Diploma in Electrical Engineering</Link>
        </li>
        <li style={{ display: 'block' }}>
          <Link className="dropdown-item" to="/computer">B.Tech CS & Engineering</Link>
        </li>
      </ul>
                      )}
                    </li>
                    <li
  className={`dropdown-submenu ${activeSubDropdown === 'science' ? 'show' : ''}`}
  onMouseEnter={() => toggleSubDropdown('science')}
  onMouseLeave={() => toggleSubDropdown(null)}
>
  <Link className="dropdown-item mt-2" to="/school2">
    School of Science And Technology
    <i className="fas fa-angle-right float-end"></i>
  </Link>
  {activeSubDropdown === 'science' && (
    <ul className="dropdown-menu " style={{ columns: '1' }}>
      <li><Link className="dropdown-item" to="/bsc">B.Sc</Link></li>
      <li><Link className="dropdown-item" to="/bca">BCA</Link></li>
      <li><Link className="dropdown-item" to="/data">Diploma in AI and ML / Data Science & Cloud Technology / Cyber Security / Forensic Science</Link></li>
      <li><Link className="dropdown-item" to="/msc">M.Sc</Link></li>
      <li><Link className="dropdown-item" to="/mca">MCA</Link></li>
    </ul>
  )}
</li>
<li
  className={`dropdown-submenu ${activeSubDropdown === 'arts' ? 'show' : ''}`}
  onMouseEnter={() => toggleSubDropdown('arts')}
  onMouseLeave={() => toggleSubDropdown(null)}
>
  <Link className="dropdown-item mt-2" to="/artsschool">
    School of Arts and Humanities
    <i className="fas fa-angle-right float-end"></i>
  </Link>
  {activeSubDropdown === 'arts' && (
    <ul className="dropdown-menu" style={{ columns: '1' }}>
    <li><Link className="dropdown-item" to="/baarts">B.A</Link></li>
    <li><Link className="dropdown-item" to="/bedarts">B.Ed</Link></li>
    <li><Link className="dropdown-item" to="/maarts">M.A</Link></li>
    <li><Link className="dropdown-item" to="/blibarts">B.Lib</Link></li>
    <li><Link className="dropdown-item" to="/mlibarts">M.Lib</Link></li>
    <li><Link className="dropdown-item" to="/phdarts">Ph.D</Link></li>
  </ul>
  )}
</li>
<li
  className={`dropdown-submenu ${activeSubDropdown === 'nursing' ? 'show' : ''}`}
  onMouseEnter={() => toggleSubDropdown('nursing')}
  onMouseLeave={() => toggleSubDropdown(null)}
>
  <Link className="dropdown-item mt-2" to="/nursingschool">
    School of Nursing, Paramedical & Allied Science
    <i className="fas fa-angle-right float-end"></i>
  </Link>
  {activeSubDropdown === 'nursing' && (
     <ul className="dropdown-menu" style={{ columns: '1' }}>
     <li><Link className="dropdown-item" to="/nursingbpharma">B.Pharma</Link></li>
     <li><Link className="dropdown-item" to="/nursingbsc">B.Sc Nursing</Link></li>
     <li><Link className="dropdown-item" to="/nursingbpt">BPT</Link></li>
     <li><Link className="dropdown-item" to="/nursinggnm">GNM</Link></li>
     <li><Link className="dropdown-item" to="/nursinganm">ANM</Link></li>
     <li><Link className="dropdown-item" to="/nursingdpharma">D.Pharma</Link></li>
   </ul>
  )}
</li>
                    <li
                      className={`dropdown-submenu ${activeSubDropdown === 'commerce' ? 'show' : ''}`}
                      onMouseEnter={() => toggleSubDropdown('commerce')}
                      onMouseLeave={() => toggleSubDropdown(null)}
                    >
                      <Link className="dropdown-item mt-2" to="/school3">
                        School Of Commerce And Management Studies
                        <i className="fas fa-angle-right float-end"></i>
                      </Link>
                      {activeSubDropdown === 'commerce' && (
                        <ul className="dropdown-menu" style={{ columns: '1' }}>
                          <li><Link className="dropdown-item" to="/bcom">B.Com</Link></li>
                          <li><Link className="dropdown-item" to="/bba">BBA</Link></li>
                          <li><Link className="dropdown-item" to="/mcom">M.Com</Link></li>
                          <li><Link className="dropdown-item" to="/mba">MBA</Link></li>
                          <li><Link className="dropdown-item" to="/phd">Ph.D</Link></li>
                        </ul>
                      )}
                    </li>
                    <li
                      className={`dropdown-submenu ${activeSubDropdown === 'agriculture' ? 'show' : ''}`}
                      onMouseEnter={() => toggleSubDropdown('agriculture')}
                      onMouseLeave={() => toggleSubDropdown(null)}
                    >
                      <Link className="dropdown-item mt-2" to="/school4">
                        School of Agriculture
                        <i className="fas fa-angle-right float-end"></i>
                      </Link>
                      {activeSubDropdown === 'agriculture' && (
                        <ul className="dropdown-menu" style={{ columns: '1' }}>
                          <li><Link className="dropdown-item" to="/diploma">Diploma in Agriculture</Link></li>
                          <li><Link className="dropdown-item" to="/bscagr">B.Sc in agriculture</Link></li>
                          <li><Link className="dropdown-item" to="/mscagr">M.Sc in Agriculture</Link></li>
                          <li><Link className="dropdown-item" to="/mschor">M.Sc in Horticulture</Link></li>
                        </ul>
                      )}
                    </li>
                   
                    <li
                      className={`dropdown-submenu ${activeSubDropdown === 'yogic' ? 'show' : ''}`}
                      onMouseEnter={() => toggleSubDropdown('yogic')}
                      onMouseLeave={() => toggleSubDropdown(null)}
                    >
                      <Link className="dropdown-item mt-2" to="/yogicschool">
                        School of Yogic Science and Naturopathy
                        <i className="fas fa-angle-right float-end"></i>
                      </Link>
                      {activeSubDropdown === 'yogic' && (
                        <ul className="dropdown-menu" style={{ columns: '1' }}>
                          <li><Link className="dropdown-item" to="/yogicbnys">BNYS</Link></li>
                          <li><Link className="dropdown-item" to="/yogicbsc">B.Sc</Link></li>
                          <li><Link className="dropdown-item" to="/yogicma">M.A</Link></li>
                          <li><Link className="dropdown-item" to="/yogicmsc">M.Sc</Link></li>
                        </ul>
                      )}
                    </li>
                   
                    <li
                      className={`dropdown-submenu ${activeSubDropdown === 'legal' ? 'show' : ''}`}
                      onMouseEnter={() => toggleSubDropdown('legal')}
                      onMouseLeave={() => toggleSubDropdown(null)}
                    >
                      <Link className="dropdown-item mt-2" to="/schoollegal">
                        School of Legal Studies
                        <i className="fas fa-angle-right float-end"></i>
                      </Link>
                      {activeSubDropdown === 'legal' && (
                        <ul className="dropdown-menu"style={{ columns: '1' }}>
                          <li><Link className="dropdown-item" to="/legalballb">BALLB</Link></li>
                          <li><Link className="dropdown-item" to="/legalllb">LLB</Link></li>
                        </ul>
                      )}
                    </li>
                    <li
                      className={`dropdown-submenu mb-0  ${activeSubDropdown === 'hotel' ? 'show' : ''}`}
                      onMouseEnter={() => toggleSubDropdown('hotel')}
                      onMouseLeave={() => toggleSubDropdown(null)}
                    >
                      <Link className="dropdown-item mt-2  " to="/hotelschool">
                        School of Hotel Management & Tourism
                        <i className="fas fa-angle-right float-end"></i>
                      </Link>
                      {activeSubDropdown === 'hotel' && (
                        <ul className="dropdown-menu" style={{ columns: '1' }}>
                          <li><Link className="dropdown-item" to="/hotelbhm">BHM</Link></li>
                          <li><Link className="dropdown-item" to="/hotelbba">BBA in Tourism</Link></li>
                          <li><Link className="dropdown-item" to="/hoteldiploma">Diploma in HM</Link></li>
                        </ul>
                      )}
                    </li>
                  </ul>
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
                <Link className="nav-link text-white ms-4" to="/gallery1">Gallery</Link>
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