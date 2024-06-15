import React from 'react';

import './Mscyogic.css';

import Library from '../Library/Library';
import Yogiccourses from './Yogiccourses';
const Mscyogic = () => {
  return <div>
     <div class="container-fluid mscyogic1image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 mscyogicsmt mt-5 " data-aos="fade-down" >MSc in Yogic Science & Naturopathy</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 nursingbg2 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 mscyoic-h1'><span className='mscyogic-span'>Best MSc in Yogic Science & Naturopathy</span> College in Uttarkashi</h2>
    <p className='mt-3 mscyogic-p'>
    Smt. Manjira Devi University offers an M.Sc. in Yogic Science and Naturopathy, a 2-year program focused on advanced studies in yoga and natural health practices. The curriculum includes in-depth training in advanced asanas, pranayama, meditation techniques, naturopathic treatments, dietetics, and holistic health management. Students also engage in research methodologies, clinical applications, and therapeutic techniques. Graduates can pursue careers as advanced yoga therapists, naturopathic practitioners, researchers, and educators in wellness institutions. Admission requires a relevant bachelor's degree in science. For detailed information, visit the university's official website or contact the admissions office.
    </p>


    </div>
 
    <div class="col-md-6 ">
    <img src="yoga7.jpg" alt="" className="mscyogicimage" />
        
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
<Yogiccourses/>
<Library/>
</div>

}

export default Mscyogic;