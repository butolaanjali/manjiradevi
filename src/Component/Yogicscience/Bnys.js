import React from 'react';

import './Bnys.css';

import Library from '../Library/Library';
import Yogiccourses from './Yogiccourses';
const Bnys = () => {
  return <div>
     <div class="container-fluid bnysimage  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 bnyssmt mt-5 " data-aos="fade-down" >Bachelor of Naturopathy & Yoga Sciences(BNYS)</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 nursingbg2 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 bnys-h1'><span className='bnys-span'>Best BNYS</span> College in Uttarkashi</h2>
    <p className='mt-3 bnys-p'>
    The Bachelor of Naturopathy and Yoga Sciences (BNYS) program at Smt. Manjira Devi University is a comprehensive degree that combines traditional naturopathy and yoga with modern medical science. The program spans five and a half years, including a one-year internship. The curriculum covers a wide range of subjects, including anatomy, physiology, biochemistry, pathology, microbiology, and community medicine. Students also receive in-depth training in yoga therapy, nutrition, herbology, and acupuncture. The course is designed to equip students with the skills to promote holistic health and wellness. Graduates can pursue careers in healthcare, wellness centers, research, and education. The program emphasizes hands-on experience and practical training, ensuring students are well-prepared for professional practice.
    </p>


    </div>
 
    <div class="col-md-6 ">
    <img src="yoga7.jpg" alt="" className="bnys1image" />
        
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
<Yogiccourses/>
<Library/>
</div>

}

export default Bnys;