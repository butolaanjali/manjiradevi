import React from 'react';
import { Link } from "react-router-dom";
import './Bscyogic.css';

import Library from '../Library/Library';
import Yogiccourses from './Yogiccourses';
const Bscyogic = () => {
  return <div>
     <div class="container-fluid bscyogic-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 bscyogic-smt mt-5" data-aos="fade-down" >B.sc in Yogic Science & Naturopathy</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 bscyogic-h1'><span className='bscyogic-span'>Best B.sc in Yogic Science & Naturopathy</span> College in Uttarkashi</h2>
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
<Yogiccourses/>
<Library/>
</div>

}

export default Bscyogic;