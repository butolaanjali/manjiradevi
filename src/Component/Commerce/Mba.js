import React from "react";
import "./school3.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Mba() {
  return (
    <div className="School1-page">
       <div class="container-fluid mbacommerce-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt mt-5 " data-aos="fade-down" >  Master of Business Administration (MBA)</h2></center>
   
  </div>
      </div>
    </div>
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
            className="col-md-6 text-column p-3"
            style={{ fontSize:"19px",textAlign:"justify",fontFamily:"serif" }}
          >
           Master of Business Administration (MBA) is a 2-year postgraduate program designed to equip students with a comprehensive understanding of the business world and develop their managerial skills. The program at dbuu one of the best mba college in uttarakhand focuses on providing a strong foundation in core business disciplines while also offering specializations in HR, Marketing, Finance, and International Business, Logistics & Supply Chain Management and Agri Business. With a rigorous curriculum, experienced faculty, and a practical approach to learning, the MBA program prepares students to excel in today's dynamic and competitive business environment. The School of Management and Commerce at DBUU offers MBA programs with the following specializations, allowing you to choose according to your interests.</div>
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
        
        <h1 className='library-heading'>Programme<span className='library-span'> Details</span></h1>
            <div className="row" style={{
            border: "2px",
            borderRadius: "20px",
            boxShadow: "10px 10px 20px rgb(240, 117, 3)",
          }}>
            <div className="col-md-0"></div>
            <div className="col-md-6"><br></br>
            <p className="nursing-p">Designed as a skill enable program, the students actually learn by doing and progress from basics to higher order skills like planning, designing and maintaining small and large structures. Diploma graduates can start entrepreneurial ventures or can pursue higher studies.</p>
            <h3 className="library-heading">Duration</h3>
            <p className="nursing-p">2 yrs. (4 Semesters)</p><br></br>
            <h3 className="library-heading">Eligibility Criteria(Qualifying Exam)</h3>
            <p className="nursing-p"><i className="fas fa-arrow-circle-right"></i>Completion of Secondary Education: Candidates must have completed their higher secondary education (10+2) or equivalent from a recognized board.<br></br>
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

export default Mba;