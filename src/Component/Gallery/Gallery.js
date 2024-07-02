import React from 'react';
import Slider from 'react-slick';
import './gallery.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

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

const Gallery = () => {
  const slides = [
    {
      image: 'medicalimage1.jpg',
      link: '#',
    },
    {
      image: 'medicalimage2.jpg',
      link: '#',
    },
    {
      image: 'medicalimage3.jpg',
      link: '#',
    },
    {
      image: 'medicalimage4.jpg',
      link: '#',
    },
    {
      image: 'medicalimage5.jpg',
      link: '#',
    },
    {
      image: 'medicalimage6.jpg',
      link: '#',
    },
    {
      image: 'medicalimage7.jpg',
      link: '#',
    },
    {
      image: 'medicalimage8.jpg',
      link: '#',
    },
   
  ];

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
    responsive: [
      {
        breakpoint: 768, // for mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="our-schools-slider  ">
        <h2 class="medical-text ms-5 mb-4">The School of Medicine at Smt. Manjira Devi University is dedicated to preparing students for the demands of the healthcare industry through meticulously crafted programs devised in collaboration with esteemed medical professionals.
</h2>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <img src={slide.image} className="slide-image" />
              <div className="slide-content">
               
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;