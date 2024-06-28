import React from 'react';
import './about.css';
import { Link } from "react-router-dom";
import Gallery from '../Gallery/Gallery';
import Library from '../Library/Library';

const About = () => {
  return (
    <div>
      <div className="container-fluid aboutimage">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-4">
              <center><h2 className="text-white display-3 aboutsmt" data-aos="fade-down">Smt. Manjira Devi University</h2></center>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5 aboutbg2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 p-5 ">
              <h1 className="mb-2 mt-2 about-h1"><span className="about-span">Smt. Manjira</span> Devi University</h1>
              <p className="mt-3 about-p">
                Smt. Manjira Devi University is a hub of academic excellence and innovation. Known for its dedicated faculty and diverse programs, the university fosters a nurturing environment for students. Cutting-edge research facilities and a vibrant campus life enrich the educational experience. The university emphasizes holistic development, offering numerous extracurricular activities. With a strong focus on community engagement, it prepares students to be socially responsible leaders. Smt. Manjira Devi University is a beacon of knowledge, shaping the future of education. Its picturesque campus provides an inspiring backdrop for learning and personal growth. The alumni network is robust, helping students build valuable connections in various industries. Regular workshops, seminars, and conferences keep the academic community engaged with the latest developments. The university's commitment to sustainability is reflected in its green initiatives and eco-friendly practices. Smt. Manjira Devi University stands as a testament to the power of education in transforming lives.
              </p>
            </div>

            <div className="col-md-6 mm">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="img1.jpeg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="img2.jpg" className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="img3.jpeg" className="d-block w-100" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5 about mb-5">
        <div className="row p-5">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <center>
              <h1 className="bga">Manjira Devi University</h1>
              <h1 className="bgb">The Best University in Uttarkashi, Uttarakhand</h1>
              <p className="bghu">
                Welcome to Smt. Manjira Devi University. Our university is housed in a magnificent, expansive building that offers a refreshing environment, naturally inspiring students to excel. We are dedicated to providing the highest quality education, facilitated by our experienced and highly educated faculty members. We proudly offer a full-time, two-year Bachelor of Education program, approved by the National Council for Teacher Education (NCTE) in Jaipur and affiliated with H.N.B. Garhwal University in Sri Nagar, Uttarakhand. Our faculty members are not only well-qualified but also deeply committed to their roles, ensuring that every student receives individual attention and support. At Smt. Manjira Devi University, we strive to cultivate an enriching educational experience that empowers students to achieve academic excellence and professional success. We believe in fostering a holistic development environment where students can explore and grow. Join us to embark on a journey of knowledge, growth, and success.
              </p>

              <Link to="/about" className="btn bgd" data-aos="fade-up">Know more</Link>
            </center>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>

      <Gallery />
      <Library />
    </div>
  );
};

export default About;
