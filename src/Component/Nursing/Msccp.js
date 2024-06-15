import React from 'react';

import './Nursing.css';
import Nursingcourses from './Nursingcourses';
import Library from '../Library/Library';
const Msccp = () => {
  return <div>
     <div class="container-fluid psychologyimage1  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt mt-5 " data-aos="fade-down" >School Of M.Sc (Clinical Psychology) </h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 nursingbg2 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 msc-h1'><span className='nursing-span'>Best M.Sc (Clinical Psychology)</span> College in Uttarkashi</h2>
    <p className='mt-3 nursing-p'>
    The MSc Clinical Psychology course at Smt. Manjira Devi College offers a comprehensive curriculum designed to provide in-depth knowledge and practical skills in clinical psychology. The program covers various theoretical frameworks, diagnostic techniques, and therapeutic approaches. Students receive hands-on training through supervised clinical placements and internships. The course emphasizes evidence-based practices and psychological research methods. Faculty members are experienced professionals dedicated to mentoring and guiding students. Graduates are well-prepared for careers in clinical settings, research, and higher education. The college also provides opportunities for students to engage in community outreach programs. Scholarships and financial aid are available for eligible students to support their academic journey.
    
</p>


    </div>
 
    <div class="col-md-6 ">
    <img src="psychology2.jpg" alt="" className="psychologyimage" />
        
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
            <p><h6 className='nursing-p'>2 yrs. (4 Semesters)</h6></p><br></br>
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
<Nursingcourses/>
<Library/>
</div>

}

export default Msccp;