import React from 'react';

import './Hotel.css';

import Library from '../Library/Library';
import Hotelcourses from './Hotelcourses';

const Bachelorhm = () => {
  return <div>
     <div class="container-fluid bachelorhm-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 artssmt mt-5 " data-aos="fade-down" >Bachelor of Hotel Management</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 nursingbg2 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 arts-h1'><span className='arts-span'>Best Bachelor of Hotel Management</span> College in Uttarkashi</h2>
    <p className='mt-3 arts-p'>
    The Bachelor of Hotel Management at SMT Manjira Devi University offers an in-depth program designed to develop future leaders in the hospitality industry. Our curriculum encompasses key areas such as front office management, culinary arts, food and beverage service, and hospitality marketing. Students gain hands-on experience through internships, practical workshops, and industry projects, ensuring they are well-prepared for real-world challenges. Taught by experienced faculty with extensive industry knowledge, the program emphasizes customer service excellence, operational efficiency, and innovative management practices. State-of-the-art facilities and strong industry partnerships enhance the learning experience. Graduates are equipped with the skills needed for diverse roles in hotels, resorts, restaurants, and event management. Join us to embark on a successful career in hotel management.
    </p>

    </div>
 
    <div class="col-md-6 ">
    <img src="hm4.jpg" alt="" className="arts1image" />
        
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
            <p><h6 className='nursing-p'>4 yrs. (8 Semesters)</h6></p><br></br>
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

export default Bachelorhm;