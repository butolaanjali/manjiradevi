import React from 'react';

import './Nursing.css';
import Nursingcourses from './Nursingcourses';
import Library from '../Library/Library';
const Pharma = () => {
  return <div>
     <div class="container-fluid dpharmaimage1  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt mt-5 " data-aos="fade-down" >School Of D.Pharma </h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 nursingbg2'>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 dpharma-h1'><span className='nursing-span'>Best D.Pharma</span> College in Uttarkashi</h2>
    <p className='mt-3 nursing-p'>
    The D.Pharm course at Smt. Manjira Devi College is a two-year diploma program focused on pharmacy education and practice. The curriculum includes subjects such as pharmacology, pharmaceutical chemistry, pharmaceutics, and pharmacognosy. Students gain practical skills through laboratory work, industrial visits, and internships in healthcare settings. The course emphasizes the importance of ethical practices, patient care, and medication management. Faculty members are experienced pharmacists and educators dedicated to providing high-quality instruction and support. The program also includes training in community pharmacy and hospital pharmacy operations. Graduates are prepared to take up roles in various pharmaceutical sectors, including retail, hospitals, and research. The college offers state-of-the-art facilities and a supportive learning environment. Scholarships and financial aid options are available to assist eligible students in their studies.

</p>


    </div>
 
    <div class="col-md-6 ">
    <img src="bpharma.jpg" alt="" className="psychologyimage" />
        
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

export default Pharma;