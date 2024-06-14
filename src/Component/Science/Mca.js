import React from "react";
import "./school2.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Mca() {
  return (
    <div className="School1-page">
      <div className="head">
        <div className="layer">
          <h1>
            <span className="text" style={{ fontSize: "2.3rem" }}>
            Master of Computer Applications (MCA)
            </span>
          </h1>
        </div>
        <img src="/science4.jpeg" alt="School Background" />
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
            <p><h6>3 yrs. (6 Semesters)</h6></p><br/>
            <h3>Eligibility Criteria(Qualifying Exam)</h3>
            <p><i className="fas fa-arrow-circle-right"></i>Undergraduate Degree: A bachelor's degree in computer applications (BCA), computer science, engineering, or a related field from a recognized university.<br></br><br/>
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