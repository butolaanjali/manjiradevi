import React from 'react';

import './Bscyogic.css';

import Library from '../Library/Library';
import Yogiccourses from './Yogiccourses';
const Certificateyoga = () => {
  return <div>
     <div class="container-fluid bscyogic-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 bscyogic-smt mt-5" data-aos="fade-down" >Certificate in yoga</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 nursingbg2 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 bscyogic-h1'><span className='bscyogic-span'>Certificate in yoga  </span> College in Uttarkashi</h2>
    <p className='mt-3 bscyogic-p'>
    Smt. Manjira Devi University offers a B.Sc. in Yogic Science and Naturopathy, combining traditional yoga practices with naturopathic treatments. This 3-year program includes training in yoga asanas, pranayama, meditation, diet, hydrotherapy, and herbal medicine, along with studies in anatomy, physiology, and preventive healthcare. Graduates can work as yoga instructors, naturopaths, wellness coaches, or health educators. Admission requires higher secondary education, preferably in science. The course emphasizes holistic health, preparing students for various wellness industry roles. For more information, visit the university's official website or contact the admissions office.
</p>
 </div>
 <div class="col-md-6 ">
    <img src="yogic.jpeg" alt="" className="bscyogicimage" />
        
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
            Introductory program covering fundamental yoga postures, breathing techniques, meditation practices, and basic yoga philosophy.

              </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>6 Months (1 Semesters)</h6></p><br></br>
            <h3 className='library-heading'>Eligibility Criteria (Qualifying Exam)</h3>
            <p className='nursing-p'>
            Open to all; typically, completion of 10th standard or equivalent is required. Some programs may require 10+2 or equivalent 

            </p>
            <h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
• Yoga Instructor<br/>
• Fitness Trainer<br/>
• Wellness Coach<br/>


</p>
        </div>
        <div className="col-md-4 image-column mt-5 mb-5"><br/>
            <img
              style={{ height: "100%" }}
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

export default Certificateyoga;