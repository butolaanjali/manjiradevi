import React from 'react';

import './BaArts.css';

import Library from '../Library/Library';
import Artscourses from './Artscourses';

const Phdarts = () => {
  return <div>
     <div class="container-fluid phdartsimage  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 artssmt mt-5 " data-aos="fade-down" >Ph.D in Arts and Humanity</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 nursingbg2 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 arts-h1'><span className='arts-span'>Best Ph.D in Arts and Humanity</span> College in Uttarkashi</h2>
    <p className='mt-3 arts-p'>
    A PhD in Arts and Humanities at Smt. Manjira Devi University in Uttarkashi is a rigorous research program aimed at advancing scholarly understanding and contributing new knowledge to fields such as literature, history, philosophy, and languages. This doctoral program typically spans several years and involves in-depth study, original research, and the completion of a dissertation under the guidance of experienced faculty mentors. Students engage in critical analysis, interdisciplinary study, and theoretical exploration, preparing them for leadership roles in academia, research institutions, and cultural organizations. The university provides a supportive environment with access to resources, conferences, and collaborative opportunities to enhance scholarly growth and professional development in the arts and humanities.
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
<Artscourses/>
<Library/>
</div>

}

export default Phdarts;