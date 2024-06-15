import React from "react";
import "./school4.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function BscAgr() {
  return (
    <div className="School1-page">
      <div className="head">
        <div className="layer">
          <h1>
            <span className="text" style={{ fontSize: "2.3rem" }}>
            B.Sc. in Agriculture
            </span>
          </h1> l
        </div>
        <img src="/agr4.jpeg" alt="School Background" />
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
          B Sc. Agriculture deals with rendering the knowledge about various aspects of agriculture and its related specializations. B.Sc Agriculture. from DBUU, covers an in-depth study of the subjects such as Agronomy, Plant Pathology, Entomology, Soil Science, Food Technology, Agricultural Economics, Genetics, Plant Breeding, Horticulture, Food Microbiology, Animal Husbandry, Basic Sciences, Humanities, and Agricultural Engineering.

School of Agriculture, at DBUU follows modern teaching pedagogy, which deals with a stable teaching approach, thus including the practical and theoretical phases of the subject. Agriculture Course includes imparting relevant theoretical knowledge about the topics like the machinery and techniques and use of modern scientific instruments in Plant and Animal- Land Surveying Soil Science, Water Resource Management, Based Farming Systems, Animal and Poultry Management, basics of Biotechnology etc., also make sure to enhance the intellectual and pragmatic skills of the students through the adequate exposure to make them industry-ready. B Sc. in Agriculture(Hons.) possesses an agricultural farm inside the college campus that is maintained and managed by the students to give hands-on understanding and experience of the real environment, working environment and the industry.</div>
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

export default BscAgr;