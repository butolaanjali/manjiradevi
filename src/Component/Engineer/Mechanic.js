import React from "react";
import "./school1.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Mechanic() {
  return (
    <div className="School1-page">
      <div className="head">
        <div className="layer">
          <h1>
            <span className="text" style={{ fontSize: "2.3rem" }}>
              Diploma In Mechanical Engineering
            </span>
          </h1>
        </div>
        <img src="/mechanic.jpg" alt="School Background" />
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
            Collaboration with AutoDesk for “Center of Excellence” in the field of design engineering is a remarkable step towards creating a regular awareness amongst students for competing themselves with the budding engineers all over the world. Meticulous mentorship program helps the students in every sphere of learning and research.

To provide state-of-the-art infrastructure to students in order to impart quality education in Mechanical Engineering.
To develop the students for facing intellectual and ethical career challenges after graduation.
To motivate staff and students for creative thinking, thereby enriching the teaching learning experience and developing the research activity.
We strive for preparing Mechanical Engineering professionals having sound technical knowledge with innovative approach, who are proficient to pursue diverse and flourishing careers in present society.
          </div>
          <div className="col-md-4 image-column">
            <img
              style={{ height: "85%" }}
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
            <p>Pass with 50% aggregate marks in 10th (with Mathematics, Science and English) or equivalent.

For a candidate, who has not studied English as a subject, the condition of English may be waived off provided the candidate in his qualifying exam has studied in English medium or an equivalent subject.

Note: In case any student has studied Physics instead of Science then also eligible </p>
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

export default Mechanic;