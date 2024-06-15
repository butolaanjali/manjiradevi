import React from "react";
import "./school3.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Phd() {
  return (
    <div className="School1-page">
      <div className="head">
        <div className="layer">
          <h1>
            <span className="text" style={{ fontSize: "2.3rem" }}>
            Ph.D in Management
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
           Ph.D. in Management is a research-based academic programme with a professional orientation. The programme aims to equip individuals of exceptional promise and possibility for professions in higher education as faculty members employed in education and analysis and for high-level managerial and research careers in the public and private domains. Individuals after the completion of the degree programme will demonstrate an in-depth knowledge of international business research methods and a high potential for driving noteworthy assistance to their domain of specialization in business.

The curriculum of this program at DBUU offers the breadth of knowledge of the critical elements of business administration and the depth of area specialization acceptable to allow the student to make significant contributions to the discipline. The flexibility in the curriculum permits each student to create upon his or her own powers and to acclimate students to various classes of practice in an expansive variety of fields. A Ph.D. in Business Management demands competence in the basic disciplines of research tools, international business, and one of the subsequent concentrations: supply chain management, finance, information technology, marketing, or strategic management. An essential set of outcomes that will be associated with this program will be the success of our Ph.D. graduates in teaching and conducting research in business associated with emerging economies. Therefore, the likely career path of our Ph.D. graduates will be primarily within the faculties of business schools mainly related to these regions.</div>
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
            <p><h6>2 yrs. (4 Semesters)</h6></p><br></br>
            <h3>Eligibility Criteria(Qualifying Exam)</h3>
            <p><i className="fas fa-arrow-circle-right"></i>Completion of Secondary Education: Candidates must have completed their higher secondary education (10+2) or equivalent from a recognized board.<br></br>
            <i className="fas fa-arrow-circle-right"></i>Minimum Marks Requirement: A minimum aggregate score, typically around 50% to 60% in the qualifying examination, though this can vary depending on the institution.</p>
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

export default Phd;