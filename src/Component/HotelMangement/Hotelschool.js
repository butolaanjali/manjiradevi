import React from 'react';
import './Hotel.css';

import Library from '../Library/Library';
import Hotelcourses from './Hotelcourses';
const Hotelschool = () => {
  return <div>
     <div class="container-fluid hmimage1  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 nursingsmt mt-5 " data-aos="fade-down" >School Of Hotel Management & Tourism</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5  '>
  <div className='container p-5 '>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 nursingh'><span className='nursing-span'>Best Hotel Management & Tourism </span> Science College in Uttarkashi</h2>
    <p className='mt-3 nursing-p'>
    The School of Hotel Management and Tourism Science at SMT Manjira Devi University offers a comprehensive curriculum designed to equip students with the skills and knowledge necessary for a successful career in the hospitality and tourism industry. Our programs blend theoretical learning with hands-on experience, ensuring graduates are well-prepared for the dynamic and global nature of this field. Students benefit from state-of-the-art facilities, experienced faculty, and industry partnerships that provide valuable insights and opportunities. The school emphasizes customer service, operational management, and cultural awareness. With a focus on innovation and sustainability, graduates are trained to meet the evolving demands of the industry. Join us to explore a world of possibilities and pave your way to a thriving career in hotel management and tourism.
    </p>


    </div>
 
    <div class="col-md-6 ">
    <img src="hm3.jpg" alt="" className="hmimage" />
        
      </div>

    </div>

  </div>
</div>
<Hotelcourses/>

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

export default Hotelschool;