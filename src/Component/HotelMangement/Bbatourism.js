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
<h1 className='library-heading'>Programme<span className='library-span'> Details</span></h1>
            <div className="row" style={{
            border: "2px",
            borderRadius: "20px",
            boxShadow: "10px 10px 20px rgb(240, 117, 3)",
          }}>
            <div className="col-md-0"></div>
            <div className="col-md-6"><br></br>
            <p className='nursing-p'>Designed as a skill enable program, the students actually learn by doing and progress from basics to higher order skills like planning, designing and maintaining small and large structures. Diploma graduates can start entrepreneurial ventures or can pursue higher studies.</p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>3 yrs. (6 Semesters)</h6></p><br></br>
            <h3 className='library-heading'>Eligibility Criteria (Qualifying Exam)</h3>
            <p className='nursing-p'>Pass with 50% aggregate marks in 10th (with Mathematics, Science and English) or equivalent.

For a candidate, who has not studied English as a subject, the condition of English may be waived off provided the candidate in his qualifying exam has studied in English medium or an equivalent subject.

Note: In case any student has studied Physics instead of Science then also eligible </p>
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
<Hotelcourses/>
<Library/>
</div>

}

export default Bbatourism;