import React from 'react';
import { Link } from "react-router-dom";
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
<div className='container-fluid mt-5 '>
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
<Yogiccourses/>
<Library/>
</div>

}

export default Mscyogic;