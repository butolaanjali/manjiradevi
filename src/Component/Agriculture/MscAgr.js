import React from "react";
import "./school4.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Bcom() {
  return (
    <div className="School1-page">
      <div className="head">
        <div className="layer">
          <h1>
            <span className="text" style={{ fontSize: "2.3rem",color:'black' }}>
            M.Sc. Agriculture 
            </span>
          </h1> l
        </div>
        <img src="/agr2.jpeg" alt="School Background" />
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
           M.Sc. Agriculture  is a postgraduate programme devised to equip a footing and scientific knowledge of crop production via adequate field management. It incorporates an in-depth understanding of crop physiology, organic farming, weed science, water & nutrient management, and other related disciplines. Agronomy, or scientific agriculture, applies several soil and plant sciences to soil management and crop production. Modern concepts in drought physiology, herbicides, crop production, and crop production, physiological aspects of crop yield, principles of physiology of crop plants, advanced irrigation agronomy, crop nutrition, advanced crop ecology, applied conservation agronomy, arid zone agronomy, agricultural research organizations, cropping and farming systems, and agro-meteorology are some of the subjects covered in this degree, Students who complete the P.G. degree in M.Sc. Agronomy will have several options in various areas.

Our School of Agriculture offers a master's degree in agriculture that aims to provide instruction to qualified applicants on enhancing agricultural output and, as a result, food security and help society streamline more effective food production processes. By integrating research with in-depth training in Climatology, Genetics, Biochemistry, Physiology, and Plant Breeding, students are trained to apply such information to real-world settings where scientific concepts around agronomy are implemented.</div>
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

export default Bcom;