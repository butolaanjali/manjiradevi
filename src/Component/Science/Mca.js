import React from "react";
import "./school2.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Mca() {
  return (
    <div className="School1-page">
        <div class="container-fluid mca-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt mt-5 " data-aos="fade-down" > Master of Computer Applications (MCA)</h2></center>
   
  </div>
      </div>
    </div>
</div>
     
      <div className="container mt-3">
        <div
          className="row"
          style={{
            border: "2px",
            borderRadius: "20px",
            boxShadow: "10px 10px 20px rgb(240, 117, 3)",
          }}
        >
          <br></br>
          <div className="col-md-0"></div>
          <div
            className="col-md-6 text-column p-3"
            style={{ fontSize: "18px",textAlign:"justify",fontFamily:"serif" }}
          >
            The Department of Master of Computer Applications (MCA) is a distinguished division within the School of Science and Technology, focused on providing advanced education in computer science and its applications. This department offers a comprehensive MCA program designed to equip students with the theoretical knowledge and practical skills required to excel in the IT industry and related fields. The MCA program is structured to cover a wide range of topics, from fundamental concepts to advanced applications, preparing students for diverse career opportunities.<br></br>
            The Department of MCA is dedicated to nurturing skilled professionals who can contribute to the ever-evolving field of computer applications. It aims to provide a strong educational foundation, practical skills, and research capabilities to prepare students for successful careers in technology and innovation.
            </div>
          &emsp;&emsp;&emsp;<div className="col-md-4 image-column"><br/><br/>
            <img
              style={{ height: "65%" }}
              src="/science7.jpeg"
              alt="School Vision"
            />
          </div>
          <div className="col-md-1"></div>
        </div>
        <br></br><br></br>
        
        <h1 className='library-heading'>Programme<span className='library-span'> Details</span></h1>
            <div className="row p-3" style={{
            border: "2px",
            borderRadius: "20px",
            boxShadow: "10px 10px 20px rgb(240, 117, 3)",
          }}>
            <div className="col-md-0"></div>
            <div className="col-md-6"><br></br>
            <p className="nursing-p">Designed as a skill enable program, the students actually learn by doing and progress from basics to higher order skills like planning, designing and maintaining small and large structures. Diploma graduates can start entrepreneurial ventures or can pursue higher studies.</p>
            <h3 className="library-heading">Duration</h3>
            <p className="nursing-p">3 yrs. (6 Semesters)</p><br/>
            <h3 className="library-heading">Eligibility Criteria(Qualifying Exam)</h3>
            <p className="nursing-p"><i className="fas fa-arrow-circle-right"></i>Undergraduate Degree: A bachelor's degree in computer applications (BCA), computer science, engineering, or a related field from a recognized university.<br></br><br/>
            <i className="fas fa-arrow-circle-right"></i>Minimum Marks: Generally, a minimum aggregate score of around 50% to 60% in the qualifying examination. </p>
        </div>
        <div className="col-md-4 image-column"><br/>
            <img
              style={{ height: "75%" }}
              src="/vision.png"
              alt="School Vision"
            />
          </div>
        </div>
      </div>
      
      <Library/>
    </div>
  );
}

export default Mca;