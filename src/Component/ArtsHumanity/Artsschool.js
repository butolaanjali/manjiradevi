import React from 'react';
import './Artscourses.css';
import Artscourses from './Artscourses';
import Library from '../Library/Library';

const Artsschool = () => {
  return (
    <div>
      <div className="container-fluid artsimage1">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mt-4">
              <center>
                <h2 className="text-white display-3 nursingsmt mt-5" data-aos="fade-down">
                  School Of Arts and Humanity
                </h2>
              </center>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="container p-5">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mb-2 mt-2 nursingh">
                <span className="nursing-span">Best Arts and Humanity </span> Science College in Uttarkashi
              </h2>
              <p className="mt-3 nursing-p">
                Smt. Manjira Devi University in Uttarkashi excels in the field of Arts and Humanities, offering a diverse range of programs that foster creativity, critical thinking, and cultural understanding. The university's curriculum is designed to explore various disciplines such as literature, history, philosophy, languages, and performing arts. Students benefit from a rich academic environment supported by experienced faculty who encourage intellectual growth and expression. Practical components such as workshops, seminars, and cultural events enhance learning and promote interdisciplinary perspectives. Smt. Manjira Devi University is committed to producing well-rounded graduates equipped with both academic knowledge and practical skills to contribute meaningfully to society and the arts.
              </p>
            </div>
            <div className="col-md-6">
              <img src="arts6.jpg" alt="" className="artsimage" />
            </div>
          </div>
        </div>
      </div>
      <Artscourses />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mt-2">
            <div className="vision-section">
              <h2>Vision</h2>
              <p style={{ color: 'white' }}>
                To become a center of excellence in skill development and groom the Engineering professional to cope up with the changing global scenario through research and innovation.
              </p>
              <hr />
              <h2>Mission</h2>
              <ul style={{ color: 'white' }}>
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
      <Library />
    </div>
  );
};

export default Artsschool;
