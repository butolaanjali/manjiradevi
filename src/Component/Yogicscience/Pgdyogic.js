import React from 'react';
import { Link } from "react-router-dom";
import './Pgdyogic.css';

import Library from '../Library/Library';
import Yogiccourses from './Yogiccourses';
const Pgdyogic = () => {
  return <div>
     <div class="container-fluid pgdyogic-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 pgdyogic-smt mt-5" data-aos="fade-down" >PGD in Yogic Science & Naturopathy</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 pgdyogic-h1'><span className='pgdyogic-span'>Best PGD in Yogic Science & Naturopathy</span> College in Uttarkashi</h2>
    <p className='mt-3 pgdyogic-p'>
    Smt. Manjira Devi University offers a Postgraduate Diploma (PGD) in Yogic Science and Naturopathy, a 1-year program designed to provide specialized knowledge in yoga and natural health practices. The curriculum includes training in yoga asanas, pranayama, meditation, naturopathic treatments, diet and nutrition, and holistic health principles. This program is ideal for those seeking to enhance their skills in wellness and health management. Graduates can work as yoga instructors, naturopathy practitioners, wellness coaches, and holistic health consultants. Admission requires a bachelor's degree in any field. For more information, visit the university's official website or contact the admissions office.
</p>
 </div>
 <div class="col-md-6 ">
    <img src="yogic.jpeg" alt="" className="pgdyogicimage" />
        
      </div>

    </div>

  </div>
</div>
<Yogiccourses/>
<Library/>
</div>

}

export default Pgdyogic;