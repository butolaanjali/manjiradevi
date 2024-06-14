import React from 'react';
import { Link } from "react-router-dom";
import './Nursing.css';
import Nursingcourses from './Nursingcourses';
import Library from '../Library/Library';
const Msccp = () => {
  return <div>
     <div class="container-fluid psychologyimage1  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt mt-5 " data-aos="fade-down" >School Of M.Sc (Clinical Psychology) </h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 msc-h1'><span className='nursing-span'>Best M.Sc (Clinical Psychology)</span> College in Uttarkashi</h2>
    <p className='mt-3 nursing-p'>
    The MSc Clinical Psychology course at Smt. Manjira Devi College offers a comprehensive curriculum designed to provide in-depth knowledge and practical skills in clinical psychology. The program covers various theoretical frameworks, diagnostic techniques, and therapeutic approaches. Students receive hands-on training through supervised clinical placements and internships. The course emphasizes evidence-based practices and psychological research methods. Faculty members are experienced professionals dedicated to mentoring and guiding students. Graduates are well-prepared for careers in clinical settings, research, and higher education. The college also provides opportunities for students to engage in community outreach programs. Scholarships and financial aid are available for eligible students to support their academic journey.
    
</p>


    </div>
 
    <div class="col-md-6 ">
    <img src="psychology2.jpg" alt="" className="psychologyimage" />
        
      </div>

    </div>

  </div>
</div>
<Nursingcourses/>
<Library/>
</div>

}

export default Msccp;