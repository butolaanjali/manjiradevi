import React from 'react';
import './Legal.css';

import Library from '../Library/Library';
import Legalcourses from './Legalcourses';
const Legalschool = () => {
  return <div>
     <div class="container-fluid legalimage1  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt mt-5 " data-aos="fade-down" >School Of Legal Studies</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5  '>
  <div className='container p-5 '>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 nursingh'><span className='nursing-span'>Best Legal Studies </span>  College in Uttarkashi</h2>
    <p className='mt-3 nursing-p'>
    The legal studies program at Smt. Manjira Devi University aims to provide a comprehensive understanding of law and its applications. The curriculum encompasses various branches of law, including constitutional, criminal, civil, and corporate law. Students are trained in legal research, critical analysis, and effective communication skills essential for the legal profession. The faculty comprises experienced legal practitioners and academicians who bring practical insights into the classroom. The university emphasizes moot court sessions, internships, and legal aid clinics to provide hands-on experience. Ethical practice and social responsibility are core values instilled throughout the program. Graduates are well-prepared for careers as lawyers, judges, legal advisors, and policymakers. The program also encourages engagement in contemporary legal issues and reforms, ensuring students are at the forefront of legal developments.
    </p>


    </div>
 
    <div class="col-md-6 ">
    <img src="arts6.jpg" alt="" className="artsimage" />
        
      </div>

    </div>

  </div>
</div>
<Legalcourses/>
<div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mt-2">
            <div className="vision-section">
              <h2>Vision</h2>
              <p style={{color:'white'}}>To become a center of excellence in skill development and groom the Engineering professional to cope up
                 with the changing global scenario through research and innovation.</p>
           <hr></hr>
              <h2>Mission</h2>
              <ul style={{color:'white'}}>
                <li>Enhancing academics by including the latest technologies to make the students industry-ready.</li>
                <li>Providing a scholarly and professional environment in the field of engineering.</li>
                <li>Promote cutting-edge research and innovation for the development of the nation.</li>
                <li>To create academic-industry linkage for experiential learning and practical exposure.</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 mt-2">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/img2.jpg" className="d-block w-100 carousel-image" alt="Slide 1" />
    </div>
    <div className="carousel-item">
      <img src="/img3.jpeg" className="d-block w-100 carousel-image" alt="Slide 2" />
    </div>
    <div className="carousel-item">
      <img src="/img5.jpg" className="d-block w-100 carousel-image" alt="Slide 3" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </a>
</div>
          </div>
        </div>
        </div>

<Library/>
</div>

}

export default Legalschool;