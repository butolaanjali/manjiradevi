import React from "react";
import "./school1.css";
import Library from "../Library/Library";

function Mechanic() {
  return (
    <div className="School1-page">
      <div className="head">
        <div className="layer">
          <h1>
            <span className="text" style={{ fontSize: "2.3rem" }}>
              Diploma In CSE
            </span>
          </h1>
        </div>
        <img src="/cse.jpg" alt="School Background" />
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
            Diploma in Computer Science Engineering is a program designed for students who plan to seek employment in a professional career requiring a comprehensive qualification in Computer Science and for those planning to continue studying Computer Science at the undergraduate level. This program will help students’ inbuilt basic knowledge of Database Systems, Software Engineering, Computer Networking, and Operating Systems for Software Applications designing and developing a Program, Algorithms, and Projects using open source tools and efficient data structure.

<b>Manjira Devi</b> offers, the diploma in CSE program that designed to provide an excellent background to the students. The program is student-centric and works towards making them learn and practice key Computer Science concepts. This eventually helps them build their versions of popular Web Applications, widely used Programming Language, and Computer Science basics.

Upon completion of this diploma program, students can pursue various career paths in the rapidly evolving field of IT, They may work as computer programmers, software developers, system analysts, web developers. Additionally, the diploma serves as a stepping stone for further academic pursuits in computer science and engineering, such as pursuing a bachelor’s degree or higher education.
          </div>
          <div className="col-md-4 image-column"><br></br>
            <img
              style={{ height: "75%" }}
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