import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import OurSchool from '../Component/OurSchool/OurSchool';
import Program from '../Component/Program/Program';


import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Nav.css";

import StudentSpeak from "./Testimonial/StudentSpeak";
import StudentLife from "./Studentlife/Studentlife";
import Gallery from "./Gallery/Gallery";
import Accreditations from "./Accreditations/Accreditations";


function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
     
     <div class="container-fluid bg6 ">
  <div class="container">
    <div class="row">
       <div class="col-sm-6 mt-4 ">
    <h1 class="text-white  display-3 bg21 " data-aos="fade-down" >Smt. <span className="bg22">Manjira</span><br/>Devi University</h1>
   
      <p class="text-white bg23" data-aos="fade-up" >Established Under Govt. Of Uttarakhand Vide Act No.05 of 2024</p>
      <Link to="/contact" className="btn mt-3 px-4 py-3 anjali2  anjali24" data-aos="fade-up">
    Contact Us
  </Link>
                </div>
      </div>
    </div>
</div>

      

      <div className="container mt-5 ww1">
        <div className="row">
          <div className="col-md-6">
            <h1><span className="bg3">19+ Years</span> Of Excellence</h1>
            <div className="row mt-3 ">
              <div className="col-md-5 me-0 bg7 p-2">
                <h1 className="bg5">40 LPA</h1>
                <p className="bg8">Highest Offered CTC</p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-5 bg7 ms-0 p-2">
                <h1 className="bg5">850+</h1>
                <p className="bg8">Recruiters Across Industries</p>
              </div>
            </div>
            <div className="row mt-3 ">
              <div className="col-md-5 me-0 bg7 p-2">
                <h1 className="bg5">80%</h1>
                <p className="bg8">Placement Record</p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-5 bg7 ms-0 p-2">
                <h1 className="bg5">17500+</h1>
                <p className="bg8">Glorious Alumni</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-2 ">
          <h1><span className="bg3">Academics</span> Notifications</h1>
            <div className="row">
             
              <div className="col-md-4 ww  ">
              <div className="card bf mt-2 p-3 ">
            <center><h5 className="bf1 g-0 p-1">18-06-2024</h5></center>
            <center><p className="mt-3 bf3 ">Details Notifications  Ph.D Entrance Examination session 2024-25 <span className="new p-1">New</span></p></center>
      <center> <Link  to="/phdpdf"class="btn  bf4  " data-aos="fade-up">Open Pdf</Link></center>
    </div>
              </div>
              <div className="col-md-4 ww  ">
              <div className="card bf mt-2 p-3 ">
            <center><h5 className="bf1 g-0 p-1">18-06-2024</h5></center>
            <center><p className="mt-3 bf3 ">Details Notifications  B.Ed Entrance Examination session 2024-25 <span className="new p-1">New</span></p></center>
      <center> <Link  to="/bedpdf"class="btn  bf4  " data-aos="fade-up">Open Pdf</Link></center>
    </div>
              </div>
              <div className="col-md-4 ww  ">
              <div className="card bf mt-2 p-3 ">
            <center><h5 className="bf1 g-0 p-1">18-06-2024</h5></center>
            <center><p className="mt-3 bf3 ">Application Form Ph.D & B.Ed Entrance Examination session 2024-25 <span className="new p-1">New</span></p></center>
      <center> <Link  to="/entrancepdf"class="btn  bf4  " data-aos="fade-up">Open Pdf</Link></center>
    </div>
              </div>
              
              <Link to="/academics" className="notification">Click here for all Notifications<i class="fa-solid fa-arrow-right p-1"></i></Link>
            </div>
          
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5 about mb-5">
    <div className="row p-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
            <center>
                <h1 className="bga">Manjira Devi University</h1>
                <h1 className="bgb">The Best University in Uttarkashi, Uttarakhand</h1>
                <p className="bgc">
                Welcome to Smt. Manjira Devi University. Our university is housed in a magnificent, expansive building that offers a refreshing environment, naturally inspiring students to excel. We are dedicated to providing the highest quality education, facilitated by our experienced and highly educated faculty members. We proudly offer a full-time, two-year Bachelor of Education program, approved by the National Council for Teacher Education (NCTE) in Jaipur and affiliated with H.N.B. Garhwal University in Sri Nagar, Uttarakhand. Our faculty members are not only well-qualified but also deeply committed to their roles, ensuring that every student receives individual attention and support. At Smt. Manjira Devi University, we strive to cultivate an enriching educational experience that empowers students to achieve academic excellence and professional success. We believe in fostering a holistic development environment where students can explore and grow. Join us to embark on a journey of knowledge, growth, and success.
                
                </p>

                <Link to="/about" class="btn bgd" data-aos="fade-up">Know more</Link>
            </center>
        </div>
        <div className="col-md-2"></div>
    </div>
</div>

      <Program/>
      
      <OurSchool/>
      <Accreditations/>
     
      
      <StudentSpeak/>
      <StudentLife/>
      <Gallery/>
      
      
     
    </div>
  );
}

export default Home;