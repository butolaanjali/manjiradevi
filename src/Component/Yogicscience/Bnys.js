import React from 'react';
import { Link } from "react-router-dom";
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
<div className='container-fluid mt-5 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 bnys-h1'><span className='bnys-span'>Best BNYS</span> College in Uttarkashi</h2>
    <p className='mt-3 bnys-p'>
    The Bachelor of Naturopathy and Yoga Sciences (BNYS) program at Smt. Manjira Devi University is a comprehensive degree that combines traditional naturopathy and yoga with modern medical science. The program spans five and a half years, including a one-year internship. The curriculum covers a wide range of subjects, including anatomy, physiology, biochemistry, pathology, microbiology, and community medicine. Students also receive in-depth training in yoga therapy, nutrition, herbology, and acupuncture. The course is designed to equip students with the skills to promote holistic health and wellness. Graduates can pursue careers in healthcare, wellness centers, research, and education. The program emphasizes hands-on experience and practical training, ensuring students are well-prepared for professional practice.
    </p>


    </div>
 
    <div class="col-md-6 ">
    <img src="yoga1.jpg" alt="" className="bnys1image" />
        
      </div>

    </div>

  </div>
</div>
<Yogiccourses/>
<Library/>
</div>

}

export default Bnys;