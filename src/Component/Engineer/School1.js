import React, { useEffect } from "react";
import "./school1.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function School1() {
  return (
    <div className="School1-page">
      <div className="head">
        <div className="layer">
          <h1>
            <span className="text" style={{ fontSize: "2.3rem" }}>
              School Of Engineering
            </span>
          </h1>
        </div>
        <img src="/school.jpeg" alt="School Background" />
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
          <br></br>
          <div className="col-md-0"></div>
          <div
            className="col-md-6 text-column"
            style={{ fontSize: "1.2rem" }}
          >
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
          <div className="col-md-4 image-column">
            <img
              style={{ height: "85%" }}
              src="/vision.png"
              alt="School Vision"
            />
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card" style={{border:'2px', boxShadow:'0px 10px 10px rgb(00,0,0)'}}>
              <h5 className="card-title">Diploma in CE</h5>
              <p className="card-text">
                Learn the fundamentals of Civil Engineering and develop skills in
                designing, building, and maintaining infrastructure.
              </p>
              <a href="/engineer" className="btn btn-primary">
                Know More
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{border:'2px', boxShadow:'0px 10px 10px rgb(00,0,0)'}}>
              <h5 className="card-title">Diploma in ME</h5>
              <p className="card-text">
                Explore the world of Mechanical Engineering and develop skills in
                designing, manufacturing, and maintaining mechanical systems.
              </p>
              <a href="/mechanic" className="btn btn-primary">
                Know More
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{border:'2px', boxShadow:'0px 10px 10px rgb(00,0,0)'}}>
              <h5 className="card-title" >Diploma in CSE</h5>
              <p className="card-text">
                Dive into the world of Computer Science and Engineering and
                develop skills in designing, developing, and maintaining software
                systems.
              </p>
              <a href="/cse" className="btn btn-primary">
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
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
    </div>
  );
}

export default School1;