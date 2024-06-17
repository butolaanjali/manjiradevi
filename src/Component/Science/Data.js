import React from "react";
import "./school2.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Data() {
  return (
    <div className="School1-page">
         <div class="container-fluid data-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt mt-5 " data-aos="fade-down" >  Diploma Data Science & Cloud Technology</h2></center>
   
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
            style={{ fontSize: "18px",textAlign:"justify",fontFamily:"serif" }}
          >Data science and cloud technology together form a powerful alliance that revolutionizes how organizations handle and analyze data. Data science involves extracting insights from vast datasets using statistical methods, algorithms, and machine learning, transforming raw data into actionable knowledge. On the other hand, cloud technology provides the necessary infrastructure, platforms, and software services over the internet, offering scalability, storage, and computational power on a pay-as-you-go basis. By leveraging cloud technology, data scientists can efficiently manage large datasets, perform complex computations, and deploy machine learning models without the constraints of traditional on-premises systems. Cloud services facilitate real-time data processing, seamless collaboration, and integration of diverse data sources, enhancing the overall efficiency and effectiveness of data science projects. This synergy not only ensures robust data security and compliance but also enables cost-effective operations and scalability, driving innovation and informed decision-making across various industries.
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
        
        <h1 className='library-heading'>Programme<span className='library-span'> Details</span></h1>
            <div className="row p-3" style={{
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
            <p className="nursing-p"><i className="fas fa-arrow-circle-right"></i>Candidates should have a minimum of 10+2 (Higher Secondary) qualification in any stream (Science, Commerce, or Arts) from a recognized board.<br/>
            <i className="fas fa-arrow-circle-right"> </i>Minimum percentage of marks in the qualifying examination, typically 50% or above.
            <i className="fas fa-arrow-circle-right"> </i>Candidates with a background in mathematics, statistics, or computer science may have an advantage in the admission process.<br/>
            <i className="fas fa-arrow-circle-right"> </i>Working professionals with a bachelor's degree in any field and some experience in data analysis or related areas may also be eligible for the diploma program </p>
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

export default Data;