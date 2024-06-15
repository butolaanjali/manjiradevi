import React from "react";
import "./school3.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Bba() {
  return (
    <div className="School1-page">
      <div className="head">
        <div className="layer">
          <h1>
            <span className="text" style={{ fontSize: "2.3rem" }}>
            Bachelor of Business Administration (BBA)
            </span>
          </h1>
        </div>
        <img src="/science6.jpeg" alt="School Background" />
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
            Bachelor of Business Administration (BBA) is a significant decision for students interested in business and management careers. The BBA program offers a comprehensive education in various aspects of business, including marketing, finance, accounting, human resources, and operations. This broad curriculum ensures that students gain a solid foundation in all critical areas of business, equipping them with essential skills such as leadership, communication, problem-solving, and strategic thinking.

One of the primary advantages of pursuing a BBA is the diverse career opportunities it opens up. Graduates can find roles in multiple industries and job functions, including marketing manager, financial analyst, human resource manager, and operations manager, among others. Additionally, a BBA degree often leads to higher entry-level salaries compared to other undergraduate degrees, making it a financially rewarding choice.

A BBA also serves as an excellent foundation for advanced studies. For those planning to pursue a Master of Business Administration (MBA), a BBA provides the necessary knowledge base and prepares students for more specialized postgraduate studies in areas such as finance, marketing, international business, or entrepreneurship.</div>
         &emsp;&emsp; <div className="col-md-4 image-column"><br/><br/><br/>
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
            <p><h6>3 yrs. (6 Semesters)</h6></p><br></br>
            <h3>Eligibility Criteria(Qualifying Exam)</h3>
            <p><i className="fas fa-arrow-circle-right"></i>Candidates must have completed their higher secondary education (10+2) or equivalent from a recognized board or institution.<br></br>
            <i className="fas fa-arrow-circle-right"></i>A minimum aggregate score, usually ranging from 50% to 60%, is often required, though this can vary by institution.</p>
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

export default Bba;