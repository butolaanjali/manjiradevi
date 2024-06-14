import React from 'react';
import { Link } from "react-router-dom";
import './Phdyogic.css';

import Library from '../Library/Library';
import Yogiccourses from './Yogiccourses';
const Phdyogic = () => {
  return <div>
     <div class="container-fluid phdyogic-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 phdyogic-smt mt-5" data-aos="fade-down" >Ph.D in Yogic Science & Naturopathy</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 phdyogic-h1'><span className='phdyogic-span'>Best Ph.D in Yogic Science & Naturopathy</span> College in Uttarkashi</h2>
    <p className='mt-3 phdyogic-p'>
    Smt. Manjira Devi University offers a Ph.D. in Yogic Science and Naturopathy, focusing on advanced research and specialization in yoga and natural health practices. This doctoral program involves in-depth study of advanced yogic techniques, naturopathic treatments, holistic health, and wellness science. Candidates conduct original research, contributing to the field's academic and practical knowledge. Graduates can pursue careers as researchers, university professors, advanced practitioners, and consultants in holistic health. Admission requires a relevant master's degree and a research proposal. For detailed information, visit the university's official website or contact the admissions office.
    </p>
 </div>
 <div class="col-md-6 ">
    <img src="yoga7.jpg" alt="" className="phdyogicimage" />
        
      </div>

    </div>

  </div>
</div>
<Yogiccourses/>
<Library/>
</div>

}

export default Phdyogic;