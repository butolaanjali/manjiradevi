import React from "react";
import "./school1.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Engineer() {
  return (
    <div className="School1-page">
      <div class="container-fluid civil-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt mt-5 " data-aos="fade-down" > Diploma - Civil Engineering</h2></center>
   
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
          <h2 className="mb-2 mt-4 nursingh">
                <span className="nursing-span">Course </span>Overview
              </h2>
          <div
            className="col-md-6 text-column"
            style={{ fontSize: "20px",textAlign:"justify",fontFamily:"serif" }}
          >Focuses on fundamentals of civil engineering, including construction materials, surveying, structural analysis, and project management.
          <br></br>
          
                <span className="nursing-span">Duration: </span>
                <span>3 Years (6 Semesters)</span><br/>
                <span className="nursing-span">Eligibility: </span>The candidate must have passed 10th examination or equivalent with 40% marks or equivalent Grade Point Average (GPA) from a recognized board 
              <br/>
                <span className="nursing-span">Duration & Eligibility (Lateral Entry): </span> 2 Years (4 Semesters). 10+2 or equivalent with PCM OR ITI Diploma (2 Years) with 40% marks or equivalent Grade Point Average (GPA) from a recognized board.
              <br/>
              <span className="nursing-span">Career Opportunities: </span>
                <span>Depends on the specific stream chosen: <br/>
                 <b>1.Civil engineering technician,</b> <br/>
                 <b>2.Site supervisor,</b><br/>
                 <b>3.Construction project coordinator, </b><br/>
                 <b>4.CAD technician.</b></span><br/><br/>
              </div>
         &emsp;&emsp;&emsp;&emsp; <div className="col-md-4 image-column"><br/>
            <img
              style={{ height: "65%" }}
              src="/science6.jpeg"
              alt="School Vision"
            />
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <Library/>
    </div>
  );
}

export default Engineer;