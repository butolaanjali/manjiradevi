import React from 'react';
import './Placement.css';
import '../Layout/layout.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function Placement() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const placementSlides = [
    {
      title: 'Placement Highlight 1',
      image: 'image1.jpeg',
    },
    {
      title: 'Placement Highlight 2',
      image: 'img3.jpeg',
    },
    {
      title: 'Placement Highlight 3',
      image: 'img2.jpg',
    },
    {
      title: 'Placement Highlight 4',
      image: 'img4.jpeg',
    },
    // Add more slides for placement highlights section as needed
  ];

  return (
    <div>
      <div className="placements-overview">
        <div className="header">
          <h1 className="overview-title"><b>Placements Overview</b></h1>
          <p className="overview-motto"><b>Our Motto is Arise, Awake & Achieve!</b></p>
        </div>
        <div className="stats">
          <div className="stat-item">
            <p><b>Offer letters</b></p>
          </div>
          <div className="stat-item">
            <p><b>Highest Package Offered</b></p>
          </div>
          <div className="stat-item">
            <p><b>Dreams Fulfilled</b></p>
          </div>
          <div className="stat-item">
            <p><b>Companies Visited Per Year</b></p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="impeccable-placements">
          <div className="impeccable-header">
            <h1>Impeccable Placements</h1>
            <p style={{fontSize:"20px"}}>Bridging the gap between industry & Academia</p>
          </div>
          <div className="impeccable-content">
            <div className="description">
              <p style={{fontSize:"18px"}}>At Smt. Manjira Devi University, the Placement department constantly keeps working towards bridging the gap between industry & Academia. Our endeavor is to keep the needs of the industry perspective and in turn make the learning more pragmatic and applicable. The placement activities are for the students and by the students. Manjira Devi has been successful in adding more and more companies in the list of its recruiters in the last few years. The Training and placement cell of Manjira Devi strives for converting every student into a 100% employable asset while they are pursuing their education with us and endeavors for accomplishing the concept – “One Person One Job.”</p>
            </div>
            <div className="images">
              <img style={{ height: "310px", width: "410px" }} src="labgallery1.jpg" alt="Placement 1" className="thumbnail" />
            </div>
          </div>
        </div>
      </div>
      <div className="vision-section">
        <h2>Our Vision</h2>
        <p>Best Campus Experience, Best Placements and Best Culture</p>
        <div className="vision-cards">
          <div className="vision-card">
            <h3>Professional Skill Development</h3>
            <p>Equip students with relevant professional skills for their bright career.</p>
          </div>
          <div className="vision-card">
            <h3>Maximum Opportunities</h3>
            <p>Create maximum opportunities for the students for their bright future.</p>
          </div>
          <div className="vision-card">
            <h3>Employable Graduates</h3>
            <p>Develop employable and market-ready graduates.</p>
          </div>
          <div className="vision-card">
            <h3>Professional Skill Development</h3>
            <p>Guide students towards the bright career with core values of sincerity, honesty and hard work.</p>
          </div>
        </div>
      </div>
      <div className="dbuu-layout">
        <div className="left-column">
          <section className="placement-highlights">
            <h2 className="section-title"><span className='happening'>Placement</span> Highlights</h2>
            <Slider {...sliderSettings}>
              {placementSlides.map((slide, index) => (
                <div key={index} className="slide">
                  <img src={slide.image} alt={slide.title} className="placement-image" />
                </div>
              ))}
            </Slider>
          </section>
        </div>
        <div className="right-column">
          <section className="campus-life">
            <h2 className="section-title text-center"><span className='happening'>Campus Life</span> @Manjira Devi University</h2>
            <div className="campus-life-content">
              <div className="campus-life-item">
                <img src="image1.jpeg" alt="Students on campus" className="campus-image" />
                <h2 className='text mt-2'><span className='happening'>8000+</span> Students on campus</h2>
              </div>
              <div className="campus-life-item">
                <img src="img2.jpg" alt="Student Activity Clubs" className="campus-image" />
                <p className='text mt-2'><span className='happening'>Student</span> Activity Clubs</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Placement;
