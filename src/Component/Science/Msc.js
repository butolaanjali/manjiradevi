import React from "react";
import "./school2.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Msc() {
  return (
    <div className="School1-page">
       <div class="container-fluid msc-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt mt-5 " data-aos="fade-down" >  Master of Science (M.sc)</h2></center>
   
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
            style={{ fontSize: "18px",textAlign:"justify",fontFamily:"serif"}}
          >
           The Department of Master of Science (MSc) is a prestigious academic division within the School of Science and Technology, dedicated to advanced scientific education and research. This department offers a range of MSc programs designed to provide in-depth knowledge and specialized skills in various scientific disciplines. The programs are tailored to equip students with the expertise needed to pursue professional careers or further academic research in their chosen fields.<br></br>
           The Department of MSc is committed to fostering a stimulating academic environment that encourages innovation, critical thinking, and scientific excellence. It aims to produce graduates who are well-equipped to contribute to scientific advancements and address global challenges through research and professional practice. </div>
         &emsp;&emsp;&emsp; <div className="col-md-4 image-column"><br/>
            <img
              style={{ height: "65%" }}
              src="/vision.png"
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
            <p className="nursing-p">3 yrs. (6 Semesters)</p><br></br>
            <h3 className="library-heading">Eligibility Criteria(Qualifying Exam)</h3>
            <p className="nursing-p"><i className="fas fa-arrow-circle-right"></i>Undergraduate Degree: A bachelor's degree in a relevant field of science or engineering from a recognized institution.<br></br><br></br>
            <i className="fas fa-arrow-circle-right"></i>Minimum Marks: A minimum aggregate score, typically around 55% to 60%, depending on the institution. </p>
        </div>
        &emsp; &emsp; &emsp; &emsp; &emsp;<div className="col-md-4 image-column"><br/>
            <img
              style={{ height: "75%" }}
              src="/science1.jpeg"
              alt="School Vision"
            />
          </div>
        </div>
      </div>
      
      <Library/>
    </div>
  );
}

export default Msc;