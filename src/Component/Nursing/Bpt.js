
import React from 'react';
import { Link } from "react-router-dom";
import './Nursing.css';
import Nursingcourses from './Nursingcourses';
import Library from '../Library/Library';
const Bpt = () => {
  return <div>
     <div class="container-fluid bptimage1  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt mt-5 " data-aos="fade-down" >School Of Bachelor of Physiotherapy (BPT)</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 bpt-h1'><span className='nursing-span'>Best BPT</span> College in Uttarkashi</h2>
    <p className='mt-3 nursing-p'>
    The Bachelor of Physiotherapy (BPT) course at Smt. Manjira Devi University is a comprehensive program designed to equip students with the necessary knowledge and skills to become competent physiotherapy professionals. Spanning four years and divided into eight semesters, the curriculum covers a diverse range of subjects, including Anatomy, Physiology, Biomechanics, Pharmacology, and Rehabilitation. With a focus on both theoretical learning and practical application, students undergo rigorous clinical training, facilitated by experienced faculty members and supported by state-of-the-art facilities and equipment. The program also emphasizes research opportunities, allowing students to engage in projects aimed at advancing the field of physiotherapy. A mandatory internship period provides valuable hands-on experience in various healthcare settings, preparing graduates for a fulfilling career in hospitals, rehabilitation centers, sports clinics, or private practice.
     </p>
    </div>
 
    <div class="col-md-6 ">
    <img src="theraphy.jpg" alt="" className="psychologyimage" />
        
      </div>

    </div>

  </div>
</div>
<Nursingcourses/>
<Library/>
</div>

}

export default Bpt;