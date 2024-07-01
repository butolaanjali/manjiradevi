import React from 'react';

import './Hotel.css';

import Library from '../Library/Library';
import Hotelcourses from './Hotelcourses';

const Bbatourism = () => {
  return <div>
     <div class="container-fluid bbatourism-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 artssmt mt-5 " data-aos="fade-down" >Bachelor of Business Administration in Tourism</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 nursingbg2 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 arts-h1'><span className='arts-span'>Best BBA in Tourism</span> College in Uttarkashi</h2>
    <p className='mt-3 arts-p'>
    The BBA in Tourism at SMT Manjira Devi University is designed to equip students with the essential business and management skills needed for the dynamic tourism industry. Our comprehensive curriculum covers tourism management, marketing, hospitality operations, and sustainable tourism practices. Students benefit from hands-on learning through industry internships and field trips, providing real-world experience. The program is delivered by experienced faculty members who bring industry insights into the classroom. Cutting-edge facilities and strong industry connections enhance the educational experience. Emphasis is placed on customer service, cultural awareness, and innovative solutions. Graduates are prepared for diverse roles in travel agencies, tour operations, hospitality, and destination management. Join us to explore exciting career opportunities in the global tourism sector.
    </p>

    </div>
 
    <div class="col-md-6 ">
    <img src="arts7.jpg" alt="" className="arts1image" />
        
      </div>

    </div>

  </div>
</div>
<div className='container mt-5'>
<h1 className='library-heading'>	Course <span className='library-span'>Overview</span></h1>
            <div className="row" style={{
            border: "2px",
            borderRadius: "20px",
            boxShadow: "10px 10px 20px rgb(240, 117, 3)",
          }}>
            <div className="col-md-0"></div>
            <div className="col-md-6"><br></br>
            <p className='nursing-p'>
            BBA Tourism is a specialized undergraduate program that focuses on the management and business aspects of the tourism industry. It equips students with knowledge and skills related to tourism operations, hospitality management, marketing, and strategic planning.

              </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>3 years (6 Semesters)</h6></p><br></br>
            <h3 className='library-heading'>Eligibility Criteria (Qualifying Exam)</h3>
            <p className='nursing-p'>
            10+2 Examination passed in any stream. Minimum 50% marks (45% in case of SC/ST category).
            </p>
            <h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
•	Tourism Manager<br/>
•	Event Planner<br/>
•	Travel Consultant<br/>
•	Hotel Manager<br/>
•	Resort Manager<br/>
•	Destination Manager<br/>
•	Tour Operations Executive<br/>
•	Event Manager<br/>
•	Cruise Manager<br/>


</p>
     
        </div>
        <div className="col-md-4 image-column mt-5"><br/>
            <img
              style={{ height: "100%" }}
              src="/vision.png"
              alt="School Vision"
            />
          </div>
        </div>

</div>
<Hotelcourses/>
<Library/>
</div>

}

export default Bbatourism;