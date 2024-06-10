import React from 'react';
import Slider from 'react-slick';
import './OurSchool.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#0D1128', borderRadius: '50%', width: '40px', height: '40px' }}
      onClick={onClick}
    />
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: '#0D1128', borderRadius: '50%', width: '40px', height: '40px' }}
      onClick={onClick}
    />
  );
};
const OurSchool = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const slides = [
    {
      title: 'School of Engineering ',
      image: 'mechanical.jpeg',
      link: '#',
    },
    {
      title: 'School of Science And Technology',
      image: 'msc.jpg',
      link: '#',
    },
    {
      title: 'School of Commerce And Management Studies',
      image: 'bcom.jpeg',
      link: '#',
    },
    {
      title: 'School of Agriculture',
      image: 'agri.jpeg',
      link: '#',
    },
    {
      title: 'School of Arts And Humanities',
      image: 'tour.jpeg',
      link: '#',
    },
    {
      title: 'School of Yogic Science And Naturopathy',
      image: 'yogic.jpeg',
      link: '#',
    },
    {
      title: 'School of Nursing, Paramedical & Allied Science',
      image: 'nursing.jpeg',
      link: '#',
    },
    {
      title: 'School of Legal',
      image: 'llb.jpeg',
      link: '#',
    },
    {
      title: 'School of Hotel Management And Tourism',
      image: 'dhm.jpg',
      link: '#',
    },
  ];

  return (
    <div className="our-schools-slider mb-4 ">
      <h2 className="slider-title">Our Schools</h2>
      <p className="slider-subtitle">THE RIGHT CHOICE IS RIGHT IN FRONT OF YOU</p>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={slide.title} className="slide-image" />
            <div className="slide-content">
              <h3 className="slide-title">{slide.title}</h3>
              <a href={slide.link} className="slide-button">Know more</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurSchool;
