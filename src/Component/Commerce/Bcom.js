import React from "react";
import "./school3.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Bcom() {
  return (
    <div className="School1-page">
        <div class="container-fluid bcomcommerce-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt  " >Bachelor of Commerce (B.Com)</h2></center>
   
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
          1. <span className="nursing-span">Subjects: </span>
            Financial Accounting, Business Law, Economics, Taxation, Auditing, Cost Accounting, Business Management.
          <br></br>
          2. <span className="nursing-span">Skills Developed: </span>
          Analytical skills, financial literacy, business acumen, and understanding of commercial and economic principles.<br></br>
          
                <span className="nursing-span">Duration: </span>
                <span> 3 Years (6 Semesters).</span><br/>
                <span className="nursing-span">Eligibility: </span> 10+2 OR equivalent in any discipline  
              <br/>
              <span className="nursing-span">Career Opportunities: </span>
                <span> <br/>
                 <b>1.Accountant  </b> <br/>
                 <b>2.Financial Analyst</b><br/>
                 <b>3.Business Consultant</b><br/>
                 <b>4.Auditor</b>
                 <b>5.Tax Advisor</b></span><br/><br/>
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

export default Bcom;