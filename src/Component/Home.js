import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import OurSchool from '../Component/OurSchool/OurSchool';
import Program from '../Component/Program/Program';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Nav.css";
import Layout from "./Layout/Layout";
import StudentSpeak from "./Testimonial/StudentSpeak";
import StudentLife from "./Studentlife/Studentlife";

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
      <a  class="btn mt-3 px-4 py-3  bg24 " data-aos="fade-up">Contact Us</a>
                </div>
      </div>
    </div>
</div>
<div class="container-fluid">
  <div class="row">
    <div class="col-md-3 bg1 p-5">
      <h2 class="text-center"><i class="bi bi-people-fill"></i></h2>
      <h4 class="text-center">Certified Teachers</h4>
      <p class="text-center ">Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse et augue  iaculis  dapibus urna. Mauris malesuada.</p>
      
    </div>
     
    
    <div class="col-sm-3 p-5 bg2">
       <h2 class="text-center"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16">
  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
</svg></h2>
      <h4 class="text-center">Best Education</h4>
      <p class="text-center ">Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse et augue  iaculis  dapibus urna. Mauris malesuada.</p>
      
    </div>
    <div class="col-sm-3 p-5 bg1">
       <h2 class="text-center"><i class="bi bi-book-fill"></i></h2>
      <h4 class="text-center">Book & Library</h4>
      <p class="text-center ">Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse et augue  iaculis  dapibus urna. Mauris malesuada.</p>
      
    </div>
    <div class="col-sm-3 p-5 bg2">
       <h2 class="text-center"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16">
  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/>
  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/>
</svg></h2>
      <h4 class="text-center">Bachelor’s and Master’s</h4>
      <p class="text-center ">Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse et augue  iaculis  dapibus urna. Mauris malesuada.</p>
      
    </div>
  </div>
</div>
      

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h1><span className="bg3">19+ Years</span> Of Excellence</h1>
            <div className="row mt-3 g-2">
              <div className="col-md-5 me-0 bg7 p-1">
                <h1 className="bg5">40 LPA</h1>
                <p className="bg8">Highest Offered CTC</p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-5 bg7 ms-0 p-1">
                <h1 className="bg5">850+</h1>
                <p className="bg8">Recruiters Across Industries</p>
              </div>
            </div>
            <div className="row mt-3 g-2">
              <div className="col-md-5 me-0 bg7 p-1">
                <h1 className="bg5">80%</h1>
                <p className="bg8">Placement Record</p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-5 bg7 ms-0 p-1">
                <h1 className="bg5">17500+</h1>
                <p className="bg8">Glorious Alumni</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-2">
            <h1><span className="bg3 ">Academics</span> Notifications</h1>
            <div className="row  mt-4">
              <div className="col-md-4   ">
              <div className="card bf mt-2">
            <center><h5 className="bf1 g-0 p-1">14-06-2924</h5></center>
            <center><p className="mt-3 bf3 ">Ph.D Programme Addmissions open-June 2024</p></center>
      <center> <a  class="btn  bf4  " data-aos="fade-up">Read more</a></center>
    </div>
              </div>
              <div className="col-md-4   ">
              <div className="card bf mt-2 ">
            <center><h5 className="bf1 g-0 p-1">14-06-2924</h5></center>
            <center><p className="mt-3 bf3 ">Ph.D Programme Addmissions open-June 2024</p></center>
      <center> <a  class="btn  bf4  " data-aos="fade-up">Read more</a></center>
    </div>
              </div>
              <div className="col-md-4   ">
              <div className="card bf mt-2 ">
            <center><h5 className="bf1 g-0 p-1">14-06-2924</h5></center>
            <center><p className="mt-3 bf3 ">Ph.D Programme Addmissions open-June 2024</p></center>
      <center> <a  class="btn  bf4  " data-aos="fade-up">Read more</a></center>
    </div>
              </div>

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
                Welcome to Smt. Manjira Devi University Our university is housed in a magnificent, expansive building that offers a refreshing environment, naturally inspiring students to excel. We are dedicated to providing the highest quality education, facilitated by our experienced and highly educated faculty members. We proudly offer a full-time, two-year Bachelor of Education program, approved by the National Council for Teacher Education (NCTE) in Jaipur and affiliated with H.N.B. Garhwal University in Sri Nagar, Uttarakhand. Our faculty members are not only well-qualified but also deeply committed to their roles, ensuring that every student receives individual attention and support. At Smt. Manjira Devi University, we strive to cultivate an enriching educational experience that empowers students to achieve academic excellence and professional success.
              </p>
              
              <a  class="btn  bgd   " data-aos="fade-up">Know more</a>
            </center>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <Program/>
      <OurSchool/>
      <Layout/>
      <StudentSpeak/>
      <StudentLife/>
      
     
    </div>
  );
}

export default Home;