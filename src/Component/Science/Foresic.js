import React from "react";
import "./school2.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Foresic() {
  return (
    <div className="School1-page">
      <div className="head">
        <div className="layer">
          <h1>
            <span className="text" style={{ fontSize: "2.3rem" }}>
             Diploma in Forensic Science
            </span>
          </h1>
        </div>
        <img src="/science8.jpeg" alt="School Background" />
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
            A diploma in Forensic Science offers a focused and practical education path for those interested in the intersection of science and criminal justice. With durations ranging from 1 to 2 years, these programs are ideal for individuals seeking to quickly enter the forensic science field. Eligibility typically includes a high school diploma, basic science knowledge, and strong analytical skills. This diploma provides a solid foundation for various career opportunities in law enforcement, forensic laboratories, and legal settings.<br/>
The highly qualified faculties provide in-depth theoretical knowledge and render thorough guidance through the lab sessions. The practical sessions impart all the required skills to the students and equip them to progress from the basics to more distinguished order skills like Planning, Creating, and Managing small and significant structures. The students also develop the ability to assess designs & plans project infrastructure.
          </div>
         &emsp;&emsp; <div className="col-md-4 image-column"><br/><br/><br/>
            <img
              style={{ height: "65%" }}
              src="/science11.jpeg"
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
            <p><i className="fas fa-arrow-circle-right"></i>Minimum Requirement: Completion of secondary education (high school diploma or equivalent).<br/>
            <i className="fas fa-arrow-circle-right"></i> Preferred: A background in science subjects such as biology, chemistry, physics, or a related field can be beneficial.</p>
        </div>
        &emsp;&emsp;&emsp;&emsp;&emsp;<div className="col-md-4 image-column"><br/>
            <img
              style={{ height: "75%" }}
              src="/science12.jpeg"
              alt="School Vision"
            />
          </div>
        </div>
      </div>
      
      <Library/>
    </div>
  );
}

export default Foresic;