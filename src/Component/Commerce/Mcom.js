import React from "react";
import "./school3.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Mcom() {
  return (
    <div className="School1-page">
        <div class="container-fluid mcomcommerce-image ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt "  >Master of Commerce (M.Com)</h2></center>
   
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
          1.Subjects: Advanced Accounting, Business Environment, Financial Management, Corporate Governance, Research Methodology, Tax Planning, International Business.
          <br/>
          2.Skills Developed:
          Advanced financial analysis, research skills, strategic management, and in-depth understanding of commerce..<br></br>
         <span className="nursing-span">Subjects:</span>
                <span> Finance, Marketing, Human Resources (HR)</span><br/>
                <span className="nursing-span">Duration: </span>
                <span> 2 Years (4 Semesters).</span><br/>
                <span className="nursing-span">Eligibility: </span><b>Educational Qualification:</b> B.Com. / B.Com. Hons. / B.B.A. / B.A. Hons. Economics<br/>
                <span> 
                <span className="nursing-span">Career Opportunities: </span>
                <span> <br/>
                 <b>1.Finance Manager </b> <br/>
                 <b>2.Marketing Director</b><br/>
                 <b>3.HR Manager</b><br/>
                 <b>4.Business Development Manager</b>
                 <b>5.Management Consultant</b></span><br/><br/>
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

export default Mcom;