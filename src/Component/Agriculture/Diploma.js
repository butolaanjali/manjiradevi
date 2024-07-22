import React from "react";
import "./school4.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Diploma() {
  return (
    <div className="School1-page">
        <div class="container-fluid diplomaagriculture-image ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt " >Diploma in Agriculture (Dip - Agriculture)</h2></center>
   
  </div>
      </div>
    </div>
</div>
     
      <div className="container mt-2">
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
          <h2 className="mb-0 mt-2 nursingh">
                <span className="nursing-span">Course </span>Overview
              </h2>
          <div
            className="col-md-6 text-column"
            style={{ fontSize: "20px",textAlign:"justify",fontFamily:"serif" }}
          ><br/>
          Provides foundational knowledge in agriculture, including crop cultivation, soil management, agricultural economics, farm machinery, and pest management. Practical training in agricultural techniques.<br></br>
                <span className="nursing-span">Duration: </span>
                <span> 1 Years.</span><br/>
                <span className="nursing-span">Eligibility: </span><br/>1. Class 10th Passed.<br/>
                2.Minimum Aggregate Score Requirement: Gen/OBC/Minority-50 % and SC/ST- 45 %<br/>
                <span> 
                <span className="nursing-span">Career Opportunities: </span>
                <span> <br/>
                 <b>1.Agricultural Technician, </b> <br/>
                 <b>2.Farm Supervisor, </b><br/>
                 <b>3.Extension Worker, </b><br/>
                 <b>4.Agricultural Sales Representative,</b>
                 <b>5.Field Inspector.</b></span><br/><br/>
            </span><br/>
              </div>
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
        
        
      </div>
      
      <Library/>
    </div>
  );
}

export default Diploma;