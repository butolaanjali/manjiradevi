import React from "react";
import "./school2.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Bca() {
  return (
    <div className="School1-page">
       <div class="container-fluid bca-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt" > Bachelor of Computer Applications (BCA)</h2></center>
   
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
          <div className="col-md-0"></div>
          <h2 className="mb-2 mt-4 nursingh">
                <span className="nursing-span">Course </span>Overview
              </h2>
          <div
            className="col-md-6 text-column"
            style={{ fontSize: "20px",textAlign:"justify",fontFamily:"serif" }}
          >Focuses on computer applications, software development, programming languages, database management, and computer networks. Includes practical training in software development and applications.
          <br></br>
          
                <span className="nursing-span">Duration: </span>
                <span>3 Years (6 Semesters)</span><br/>
                <span className="nursing-span">Eligibility: </span> Completion of higher secondary education (10+2) with Mathematics as a subject. Minimum Aggregate Score Requirement: Gen/OBC/Minority-50 %  and SC/ST- 45 %.
              <br/>
              <span className="nursing-span">Career Opportunities: </span>
                <span> <br/>
                 <b>1.Software developer,</b><br/>
                 <b>2.Web developer, </b><br/>
                 <b>3.System analyst, </b><br/>
                 <b>4.Database administrator,</b><br/>
                 <b>5.Network administrator,</b><br/>
                 <b>6.IT consultant.</b>
                 </span><br/><br/>
              </div>
          &emsp;&emsp;<div className="col-md-4 image-column"><br/><br/>
            <img
              style={{ height: "50%" }}
              src="/science7.jpeg"
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

export default Bca;