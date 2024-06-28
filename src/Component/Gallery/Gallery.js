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
      image: 'img1.jpeg',
      link: '#',
    },
    {
      image: 'img2.jpg',
      link: '#',
    },
    {
      image: 'image1.jpeg',
      link: '#',
    },
    {
      image: 'student1.jpeg',
      link: '#',
    },
    {
      image: 'img5.jpg',
      link: '#',
    },
    {
      image: 'image1.jpeg',
      link: '#',
    },
    {
      image: 'student1.jpeg',
      link: '#',
    },
    {
      image: 'student2.jpeg',
      link: '#',
    },
    {
      image: 'student3.jpeg',
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
      <div className="our-schools-slider mb-4 ">
        <h2 class="text-center text-bold">OUR <span className='ga'> GALLERY</span></h2>
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