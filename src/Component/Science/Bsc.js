import React from "react";
import "./school2.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Bsc() {
  return (
    <div className="School1-page">
      <div className="head">
        <div className="layer">
          <h1>
            <span className="text" style={{ fontSize: "2.3rem",color:'black' }}>
            Bachelor of Science
            </span>
          </h1>
        </div>
        <img src="/science1.jpeg" alt="School Background" />
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
            style={{ fontSize: "1.3rem" }}
          >The Department of Bachelor of Science (BSc) is a vital part of the School of Science and Technology, offering a broad range of undergraduate programs aimed at providing a solid foundation in various scientific disciplines. This department is dedicated to delivering high-quality education in fields such as biology, chemistry, physics, mathematics, computer science, and environmental science. The BSc programs are designed to equip students with theoretical knowledge, practical skills, and analytical abilities essential for scientific exploration and innovation.<br></br>
          Graduates of the BSc programs are well-prepared for a variety of career paths, including scientific research, healthcare, education, environmental management, and technology development. They are also well-equipped to pursue advanced studies in their chosen fields, contributing to scientific advancements and addressing global challenges. The Department of BSc is committed to cultivating the next generation of scientists and innovators, driving progress in both academic and professional arenas.</div>
          &emsp;&emsp;<div className="col-md-4 image-column"><br/><br/><br/>
            <img
              style={{ height: "50%" }}
              src="/bsc.jpg"
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
            <p><i className="fas fa-arrow-circle-right"></i>Completion of Secondary Education: Candidates must have completed their higher secondary education (10+2) or equivalent from a recognized board or institution.<br></br>
            <i className="fas fa-arrow-circle-right"></i>Minimum Marks Requirement: Generally, a minimum aggregate score of 50% to 60% in the qualifying examination is required, though this can vary depending on the institution and the specific BSc program.
</p>
        </div>
        &emsp;&emsp;<div className="col-md-4 image-column"><br/>
            <img
              style={{ height: "75%" }}
              src="/science13.jpeg"
              alt="School Vision"
            />
          </div>
        </div>
      </div>
      
      <Library/>
    </div>
  );
}

export default Bsc;