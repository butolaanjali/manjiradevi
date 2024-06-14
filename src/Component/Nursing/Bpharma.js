import React from 'react';
import { Link } from "react-router-dom";
import './Nursing.css';
import Nursingcourses from './Nursingcourses';
import Library from '../Library/Library';
const Bpharma = () => {
  return <div>
     <div class="container-fluid bpharmaimage1  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt mt-5 " data-aos="fade-down" >School Of B.Pharma </h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 dpharma-h1'><span className='nursing-span'>Best B.Pharma</span> College in Uttarkashi</h2>
    <p className='mt-3 nursing-p'>
    The B.Pharm course at Smt. Manjira Devi College is a four-year undergraduate program designed to equip students with comprehensive knowledge and skills in the field of pharmacy. The curriculum encompasses a wide range of subjects, including pharmaceutical chemistry, pharmacology, pharmaceutics, and pharmacognosy. Students receive extensive practical training through well-equipped laboratories, industrial visits, and internships in pharmaceutical industries and healthcare settings. The program emphasizes the development of critical thinking, problem-solving abilities, and ethical practices in pharmacy. Faculty members are experienced professionals dedicated to mentoring students and providing quality education. Graduates are well-prepared for careers in pharmaceutical research, clinical pharmacy, regulatory affairs, and quality control. The college boasts modern facilities and a conducive learning environment.
</p>


    </div>
 
    <div class="col-md-6 ">
    <img src="dpharma.jpg" alt="" className="psychologyimage" />
        
      </div>

    </div>

  </div>
</div>
<Nursingcourses/>
<Library/>
</div>

}

export default Bpharma;