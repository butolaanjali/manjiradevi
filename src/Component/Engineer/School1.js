import React from "react";
import "./school1.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";
import { Link } from "react-router-dom";

function School1() {
  return (
    <div className="school1-page">
      <div className="container-fluid engineering-image">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-4">
              <center>
                <h2 className="text-white display-3 nursingsmt mt-5" data-aos="fade-down">
                  School Of Engineering
                </h2>
              </center>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div
          className="row"
          style={{
            border: "2px",
            borderRadius: "20px",
            boxShadow: "10px 10px 20px rgb(240, 117, 3)",
          }}
        >
          <div className="col-md-6 text-column"
               style={{ fontSize: "1.2rem", fontFamily: "serif", textAlign: "justify" }}>
            The School of Engineering is known for its ability to enhance creative
            skills through excellent teaching and hands-on training. We intend to
            meet the requirements of the students in almost all the engineering
            disciplines of the university. The school aims to produce versatile
            students, making them ready to be employed in both the private and
            government sectors.The courses are designed to equip students with
            lifelong learning skills, a focus on a wide range of contemporary
            issues, and mandatory social and professional training. Engineering
            is applied to many areas of work, so the coursework starts broad with
            introductory and foundational courses, and concludes with topics like
            management, computer systems, electrical engineering, and applied
            mechanics. The school has well-equipped laboratories and innovative
            pedagogy that focuses on creating links between theory and practical.
          </div>
          <div className="col-md-6 image-column">
            <img
              className="img-fluid"
              src="/vision.png"
              alt="School Vision"
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card1" style={{ border: '2px', boxShadow: '0px 10px 10px rgb(00,0,0)' }}>
              <h4 className="card-title khusbhucard-heading">Diploma in CE</h4>
              <p className="card-text khusbhucard-paiding">
                Learn the fundamentals of Civil Engineering and develop skills in
                designing, building, and maintaining infrastructure.
              </p>
              <Link to="/engineer" className="btn btn-primary">Know more</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card1" style={{ border: '2px', boxShadow: '0px 10px 10px rgb(00,0,0)' }}>
              <h5 className="card-title khusbhucard-heading">Diploma in ME</h5>
              <p className="card-text khusbhucard-paiding">
                Explore the world of Mechanical Engineering and develop skills in
                designing, manufacturing, and maintaining mechanical systems.
              </p>
              <Link to="/mechanic" className="btn btn-primary">Know more</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card1" style={{ border: '2px', boxShadow: '0px 10px 10px rgb(00,0,0)' }}>
              <h5 className="card-title khusbhucard-heading">Diploma in CSE</h5>
              <p className="card-text khusbhucard-paiding">
                Dive into the world of Computer Science and Engineering and
                develop skills in designing, developing, and maintaining software
                systems.
              </p>
              <Link to="/cse" className="btn btn-primary">Know more</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="vision-section">
              <h2>Vision</h2>
              <p style={{ color: 'white' }}>To become a center of excellence in skill development and groom the Engineering professional to cope up
                with the changing global scenario through research and innovation.</p>
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
          <div className="col-md-6">
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
}

export default School1;
