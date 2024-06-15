import React from "react";
import "./school4.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Library from "../Library/Library";

function School4() {
  return (
    <div className="School1-page">
      <div className="head">
        <div className="layer">
          <h1>
            <span className="text" style={{ fontSize: "2.3rem" }}>
              School Of Agriculture
            </span>
          </h1>
        </div>
        <img src="/commerce.jpeg" alt="School Background" className="img-fluid" />
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
          <div className="col-md-6 text-column" style={{ fontSize: "1.2rem" }}>
          The School of Agriculture is dedicated to imparting the best quality of learning atmosphere, which makes it a key aspect of Manjira DEvi Uttarakhand University. is the top Agriculture University for modern agro-professional and advanced agricultural education, along with undergraduate and postgraduate degree programmes running under the school that emphasize the development of technical and professional skills, experiential learning for entrepreneurship and job opportunities, innovative research and extension, and many that integrate student progress in smart agriculture. SOA offers top-notch facilities and encourages students to meet a variety of local, regional, national, and international criteria.
          </div>
          <div className="col-md-4 image-column">
            <img style={{ height: "85%" }} src="/comm1.jpeg" alt="commerce" className="img-fluid" />
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card1" style={{ border: '2px', boxShadow: '0px 10px 10px rgb(00,0,0)' }}>
              <h5 className="card-title">B.Sc in Agriculture</h5>
              <p className="card-text">
                Learn the fundamentals of Civil Engineering and develop skills in
                designing, building, and maintaining infrastructure.
              </p>
              <a href="/BscAgr" className="btn btn-primary">
                Know More
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card1" style={{ border: '2px', boxShadow: '0px 10px 10px rgb(00,0,0)' }}>
              <h5 className="card-title">Diploma in Agriculture</h5>
              <p className="card-text">
                Explore the world of Mechanical Engineering and develop skills in
                designing, manufacturing, and maintaining mechanical systems.
              </p>
              <a href="/Diploma" className="btn btn-primary">
                Know More
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card1" style={{ border: '2px', boxShadow: '0px 10px 10px rgb(00,0,0)' }}>
              <h5 className="card-title">M.Sc in Agriculture</h5>
              <p className="card-text">
                Dive into the world of Computer Science and Engineering and
                develop skills in designing, developing, and maintaining software
                systems.
              </p>
              <a href="/MscAgr" className="btn btn-primary">
                Know More
              </a>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="card" style={{ border: '2px', boxShadow: '0px 10px 10px rgb(00,0,0)' }}>
              <h5 className="card-title">M.Sc in Horticulture</h5>
              <p className="card-text">
                Learn the fundamentals of Civil Engineering and develop skills in
                designing, building, and maintaining infrastructure.
              </p>
              <a href="/MscHor" className="btn btn-primary">
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
              <p style={{ color: 'white' }}>To become a center of excellence in skill development and groom the Engineering professional to cope up
                with the changing global scenario through research and innovation.</p>
              <hr></hr>
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
                  <img src="/img2.jpg" className="d-block w-100 carousel-image img-fluid" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                  <img src="/img3.jpeg" className="d-block w-100 carousel-image img-fluid" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                  <img src="/img5.jpg" className="d-block w-100 carousel-image img-fluid" alt="Slide 3" />
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

export default School4;
