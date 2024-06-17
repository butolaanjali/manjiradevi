import React from "react";
import "./school4.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function Bcom() {
  return (
    <div className="School1-page">
         <div class="container-fluid mschoragriculture-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt mt-5 " data-aos="fade-down" >  MSc Horticulture</h2></center>
   
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
            style={{ fontSize:"18px",textAlign:"justify",fontFamily:"serif" }}
          >
          MSc Horticulture is a postgraduate degree program focused on the study of horticultural sciences within the field of agriculture. The duration of this course is typically two years. SGRR University, the best Msc Agriculture in Horticulture course college in Dehradun Uttarakhand makes sure that the students majorly learn about various aspects of horticulture, including plant breeding, crop production and management, plant pathology, soil science, post-harvest technology, and sustainable horticulture practices. They gain knowledge and skills in areas such as plant propagation, pest and disease management, greenhouse management, and landscape design. MSc Agriculture Horticulture equips students with advanced knowledge and practical skills to contribute to the development and improvement of horticultural practices, crop yields, and sustainable agriculture.
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
            <p className="nursing-p">3 yrs. (6 Semesters)</p><br></br>
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

export default Bcom;