import React, { useEffect } from "react";
import "./school1.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Engineer() {
  return (
    <div className="School1-page">
      <div className="head">
        <div className="layer">
          <h1>
            <span className="text" style={{ fontSize: "2.3rem" }}>
              Diploma In Civil Engineering
            </span>
          </h1>
        </div>
        <img src="/civil.jpeg" alt="School Background" />
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
            Diploma in Civil engineering is one of the oldest engineering streams in India. It impacts almost every phase of modern human life. This course aims to produce highly qualified and efficient civil engineers by building a solid foundation in basic knowledge and troubleshooting skills.

While there is no lack of theoretically determined practitioners in Civil Engineering, there is a heavy requirement for highly skilled and practically oriented Engineers, Technologists, and Technicians. Therefore, here at Dev Bhoomi Institute of Polytechnic, students along with being exposed to various subjects of Civil Engineering such as Planning, Drafting (both manual and computer-aided), Surveying, Estimation & Costing, Construction Technology, Quality Control, Material Testing, Construction Management, Basics of Highway, Railway, Bridge, and Airport, etc. are also given practical knowledge in this field.

The highly qualified faculties provide in-depth theoretical knowledge and render thorough guidance through the lab sessions. The practical sessions impart all the required skills to the students and equip them to progress from the basics to more distinguished order skills like Planning, Creating, and Managing small and significant structures. The students also develop the ability to assess designs & plans project infrastructure. Acquainted with software like AUTOCAD & STAAD, they are also competent in effectively evaluating and managing risks, resources, and time.
          </div>
          <div className="col-md-4 image-column"><br/><br/><br/>
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

export default Engineer;