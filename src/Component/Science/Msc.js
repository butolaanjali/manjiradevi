import React from "react";
import "./school2.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Msc() {
  return (
    <div className="School1-page">
      <div className="head">
        <div className="layer">
          <h1>
            <span className="text" style={{ fontSize: "2.3rem" }}>
            Master of Science (M.sc)
            </span>
          </h1>
        </div>
        <img src="/science2.jpeg" alt="School Background" />
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
            className="col-md-6 text-column"
            style={{ fontSize: "1.2rem" }}
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
        
                <h1>Programme Details</h1>
            <div className="row" style={{
            border: "2px",
            borderRadius: "20px",
            boxShadow: "10px 10px 20px rgb(240, 117, 3)",
          }}>
            <div className="col-md-0"></div>
            <div className="col-md-6"><br></br>
            <p>Designed as a skill enable program, the students actually learn by doing and progress from basics to higher order skills like planning, designing and maintaining small and large structures. Diploma graduates can start entrepreneurial ventures or can pursue higher studies.</p>
            <h3>Duration</h3>
            <p><h6>3 yrs. (6 Semesters)</h6></p><br></br>
            <h3>Eligibility Criteria(Qualifying Exam)</h3>
            <p><i className="fas fa-arrow-circle-right"></i>Undergraduate Degree: A bachelor's degree in a relevant field of science or engineering from a recognized institution.<br></br><br></br>
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