import React from 'react';

import './Bnys.css';

import Library from '../Library/Library';
import Yogiccourses from './Yogiccourses';
const Yogicschool = () => {
  return <div>
     <div class="container-fluid bnysimage  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 bnyssmt mt-5 " data-aos="fade-down" >School of Yogic Science & Naturopathy </h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5  '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 bnys-h1'><span className='bnys-span'>Best Yogic Science & Naturopathy</span> College in Uttarkashi</h2>
    <p className='mt-3 bnys-p'>
    At Smt. Manjira Devi University in Uttarkashi, Yogic Science & Naturopathy are integral disciplines focused on holistic health and wellness. The university offers a comprehensive curriculum blending traditional wisdom with modern scientific principles. Students receive rigorous training in yoga techniques, naturopathic therapies, and holistic health practices. The program emphasizes both theoretical knowledge and practical application through experiential learning and clinical internships. Faculty members are highly qualified and experienced, guiding students towards becoming skilled practitioners in promoting natural healing and well-being. Smt. Manjira Devi University stands out for its commitment to nurturing compassionate healthcare professionals equipped to meet the evolving needs of society through integrative health practices.
</p>
 </div>
 
    <div class="col-md-6 ">
    <img src="yoga7.jpg" alt="" className="bnys1image" />
        
      </div>

    </div>

  </div>
</div>

<Yogiccourses/>
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

export default Yogicschool;