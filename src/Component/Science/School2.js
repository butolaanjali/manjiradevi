import React from "react";
import "./school2.css";
import Library from "../Library/Library";

function School2() {
  return (
    <div className="School1-page">
      <div className="head">
        <div className="layer">
          <h1>
            <span className="text" style={{ fontSize: "2.3rem" }}>
              School Of Science and Technology
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
            The School of Science and Technology is a dynamic academic division dedicated to fostering innovation and excellence in scientific and technological education. This department offers a wide range of programs in fields such as biology, chemistry, physics, computer science, engineering, and environmental science. With a commitment to cutting-edge research and hands-on learning, the school provides students with access to state-of-the-art laboratories, advanced technology, and collaborative projects. Faculty members are distinguished experts in their respective fields, contributing to both academic and industry advancements. Through interdisciplinary curricula and a focus on problem-solving skills, the School of Science and Technology prepares graduates to meet the challenges of the rapidly evolving scientific landscape and to become leaders in their chosen careers. The department also emphasizes community engagement and global perspectives, ensuring that students are well-equipped to contribute to society in meaningful ways.
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
              <h5 className="card-title">B.Sc</h5>
              <p className="card-text">
                Learn the fundamentals of Civil Engineering and develop skills in
                designing, building, and maintaining infrastructure.
              </p>
              <a href="/bsc" className="btn btn-primary">
                Know More
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{border:'2px', boxShadow:'0px 10px 10px rgb(00,0,0)'}}>
              <h5 className="card-title">BCA</h5>
              <p className="card-text">
                Explore the world of Mechanical Engineering and develop skills in
                designing, manufacturing, and maintaining mechanical systems.
              </p>
              <a href="/bca" className="btn btn-primary">
                Know More
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{border:'2px', boxShadow:'0px 10px 10px rgb(00,0,0)'}}>
              <h5 className="card-title" >Diploma in AI and Machine Learning</h5>
              <p className="card-text">
                Dive into the world of Computer Science and Engineering and
                develop skills in designing, developing, and maintaining software
                systems.
              </p>
              <a href="/ai" className="btn btn-primary">
                Know More
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card" style={{border:'2px', boxShadow:'0px 10px 10px rgb(00,0,0)'}}>
              <h5 className="card-title">M.Sc</h5>
              <p className="card-text">
                Learn the fundamentals of Civil Engineering and develop skills in
                designing, building, and maintaining infrastructure.
              </p>
              <a href="/msc" className="btn btn-primary">
                Know More
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{border:'2px', boxShadow:'0px 10px 10px rgb(00,0,0)'}}>
              <h5 className="card-title">MCA</h5>
              <p className="card-text">
                Explore the world of Mechanical Engineering and develop skills in
                designing, manufacturing, and maintaining mechanical systems.
              </p>
              <a href="/mca" className="btn btn-primary">
                Know More
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{border:'2px', boxShadow:'0px 10px 10px rgb(00,0,0)'}}>
              <h5 className="card-title" >Data Science And Cloud Technology</h5>
              <p className="card-text">
                Dive into the world of Computer Science and Engineering and
                develop skills in designing, developing, and maintaining software
                systems.
              </p>
              <a href="/data" className="btn btn-primary">
                Know More
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <div className="card" style={{border:'2px', boxShadow:'0px 10px 10px rgb(00,0,0)'}}>
              <h5 className="card-title">Cyber Security </h5>
              <p className="card-text">
                Learn the fundamentals of Civil Engineering and develop skills in
                designing, building, and maintaining infrastructure.
              </p>
              <a href="/cyber" className="btn btn-primary">
                Know More
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{border:'2px', boxShadow:'0px 10px 10px rgb(00,0,0)'}}>
              <h5 className="card-title">Forensic Science</h5>
              <p className="card-text">
                Explore the world of Mechanical Engineering and develop skills in
                designing, manufacturing, and maintaining mechanical systems.
              </p>
              <a href="/foresic" className="btn btn-primary">
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
      <img src="/science1.jpeg" className="d-block w-100 carousel-image" alt="Slide 1" />
    </div>
    <div className="carousel-item">
      <img src="/science2.jpeg" className="d-block w-100 carousel-image" alt="Slide 2" />
    </div>
    <div className="carousel-item">
      <img src="/science3.jpeg" className="d-block w-100 carousel-image" alt="Slide 3" />
    </div>
    <div className="carousel-item">
      <img src="/science4.jpeg" className="d-block w-100 carousel-image" alt="Slide 3" />
    </div>
    <div className="carousel-item">
      <img src="/science5.jpeg" className="d-block w-100 carousel-image" alt="Slide 3" />
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
  );
}

export default School2;