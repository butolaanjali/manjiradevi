import React from 'react';
import { Link } from "react-router-dom";
import './Nursing.css';
import Nursingcourses from './Nursingcourses';
import Library from '../Library/Library';
const Pharma = () => {
  return <div>
     <div class="container-fluid dpharmaimage1  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt mt-5 " data-aos="fade-down" >School Of D.Pharma </h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 dpharma-h1'><span className='nursing-span'>Best D.Pharma</span> College in Uttarkashi</h2>
    <p className='mt-3 nursing-p'>
    The D.Pharm course at Smt. Manjira Devi College is a two-year diploma program focused on pharmacy education and practice. The curriculum includes subjects such as pharmacology, pharmaceutical chemistry, pharmaceutics, and pharmacognosy. Students gain practical skills through laboratory work, industrial visits, and internships in healthcare settings. The course emphasizes the importance of ethical practices, patient care, and medication management. Faculty members are experienced pharmacists and educators dedicated to providing high-quality instruction and support. The program also includes training in community pharmacy and hospital pharmacy operations. Graduates are prepared to take up roles in various pharmaceutical sectors, including retail, hospitals, and research. The college offers state-of-the-art facilities and a supportive learning environment. Scholarships and financial aid options are available to assist eligible students in their studies.

</p>


    </div>
 
    <div class="col-md-6 ">
    <img src="bpharma.jpg" alt="" className="psychologyimage" />
        
      </div>

    </div>

  </div>
</div>
<Nursingcourses/>
<Library/>
</div>

}

export default Pharma;