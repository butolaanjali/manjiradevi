import React from 'react';
import { Link } from "react-router-dom";
import './Mayogic.css';

import Library from '../Library/Library';
import Yogiccourses from './Yogiccourses';
const Mayogic = () => {
  return <div>
     <div class="container-fluid mayogic-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 mayogic-smt mt-5" data-aos="fade-down" >M.A in Yogic Science & Naturopathy</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 mayogic-h1'><span className='mayogic-span'>Best M.A in Yogic Science & Naturopathy</span> College in Uttarkashi</h2>
    <p className='mt-3 mayogic-p'>
    Smt. Manjira Devi University offers an M.A. in Yogic Science and Naturopathy, a 2-year program emphasizing advanced theoretical and practical knowledge in yoga and natural healing methods. The curriculum covers advanced yoga practices, meditation, naturopathic therapies, diet and nutrition, holistic health, and wellness management. Students are trained in research methodologies and therapeutic applications. Graduates can become yoga therapists, naturopathy practitioners, wellness consultants, researchers, or educators. Admission requires a bachelor's degree in a related field. For more information, visit the university's official website or contact the admissions office.
</p>
 </div>
 <div class="col-md-6 ">
    <img src="yogic.jpeg" alt="" className="mayogicimage" />
        
      </div>

    </div>

  </div>
</div>
<Yogiccourses/>
<Library/>
</div>

}

export default Mayogic;