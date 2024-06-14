
import React from 'react';
import { Link } from "react-router-dom";
import './Nursing.css';
import Nursingcourses from './Nursingcourses';
import Library from '../Library/Library';
const Mph = () => {
  return <div>
     <div class="container-fluid mphimage1  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt mt-5 " data-aos="fade-down" >School Of Master of Public Health(MPH)</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 mph-h1'><span className='nursing-span'>Best MPH</span> College in Uttarkashi</h2>
    <p className='mt-3 nursing-p'>
    The Master of Public Health (MPH) program at Smt. Manjira Devi University is a comprehensive two-year course aimed at equipping students with the knowledge and skills necessary for addressing public health challenges. The curriculum covers a wide range of subjects, including Epidemiology, Biostatistics, Health Policy and Management, Environmental Health, and Social and Behavioral Sciences. Students benefit from experienced faculty members who provide mentorship and guidance throughout the program. The university offers state-of-the-art facilities and resources to support learning and research endeavors. The program includes practical training through internships and fieldwork, enabling students to gain hands-on experience in real-world public health settings. Accredited by relevant authorities, the MPH program ensures quality education and prepares graduates for impactful careers in public health practice, research, policy-making, and advocacy. 
    
</p>


    </div>
 
    <div class="col-md-6 ">
    <img src="gnm2.jpg" alt="" className="psychologyimage" />
        
      </div>

    </div>

  </div>
</div>
<Nursingcourses/>
<Library/>
</div>

}

export default Mph;