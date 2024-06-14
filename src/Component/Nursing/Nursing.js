import React from 'react';
import { Link } from "react-router-dom";
import './Nursing.css';
import Nursingcourses from './Nursingcourses';
import Library from '../Library/Library';
const Nursing = () => {
  return <div>
     <div class="container-fluid nursingimage1  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt mt-5 " data-aos="fade-down" >School Of B.sc Nursing</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 nursingh'><span className='nursing-span'>Best B.sc Nursing</span> College in Uttarkashi</h2>
    <p className='mt-3 nursing-p'>
    Smt. Manjira Devi University, located in Uttarkashi, is renowned for its top-tier B.Sc Nursing program. The institution is dedicated to providing quality education and comprehensive training to aspiring nurses. With state-of-the-art facilities and a highly qualified faculty, the university ensures students receive both theoretical knowledge and practical experience. The curriculum is designed to meet international standards, preparing students for global healthcare challenges. Additionally, the university emphasizes research and development, encouraging students to engage in innovative healthcare solutions. Smt. Manjira Devi University stands out for its commitment to producing competent and compassionate nursing professionals. Its serene location in Uttarkashi offers a conducive environment for focused learning and personal growth.
    
 </p>


    </div>
 
    <div class="col-md-6 ">
    <img src="nursing2.jpg" alt="" className="nursingimage" />
        
      </div>

    </div>

  </div>
</div>
<Nursingcourses/>
<Library/>
</div>

}

export default Nursing;