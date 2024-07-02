import React from 'react';
import Slider from 'react-slick';
import './StudentSpeak.css';
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
const StudentSpeak = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const students = [
    {
      name: 'Nitesh Kumar',
      batch: 'Civil | Batch 2021-2023',
      quote: 'I am honoured to be a Smt. Manjira Devi University Diploma in civil student and even more honoured to have been hired by Adon Publicity. My excellent business and management background from the university has enabled me to do well throughout my internship at Adon Publicity. The education is both demanding and gratifying, and the teachers are competent and devoted to their students\' success. I\'ve had the chance to work on actual business initiatives, hone my leadership and teamwork abilities, and get practical experience in my area of expertise.',
      image: 'review1.jpg',
    },
    {
      name: 'Amrita Rawat',
      batch: 'BPT | Batch 2020-2023',
      quote: 'I am honoured to be a Smt. Manjira Devi University Bpt student and even more honoured to have been hired by Adon Publicity. My excellent business and management background from the university has enabled me to do well throughout my internship at Adon Publicity. The education is both demanding and gratifying, and the teachers are competent and devoted to their students\' success. I\'ve had the chance to work on actual business initiatives, hone my leadership and teamwork abilities, and get practical experience in my area of expertise.',
      image: 'review2.jpg',
    },
    {
      name: 'Aryan Negi',
      batch: 'H.M | Batch 2020-2023',
      quote: 'I am honoured to be a Smt. Manjira Devi University H.M student and even more honoured to have been hired by Adon Publicity. My excellent business and management background from the university has enabled me to do well throughout my internship at Adon Publicity. The education is both demanding and gratifying, and the teachers are competent and devoted to their students\' success. I\'ve had the chance to work on actual business initiatives, hone my leadership and teamwork abilities, and get practical experience in my area of expertise.',
      image: 'review3.jpg',
    },
  ];

  return (
    <div className="student-speak">
      <h2 className="subheading">Student Speak</h2>
      <h1 className="title">What Our Students Say</h1>
      <Slider {...settings}>
        {students.map((student, index) => (
          <div key={index} className="student1-card">
            <div className="student-image">
              <img src={student.image} alt={student.name} />
            </div>
            <div className="student-content">
              <h2>STUDENT SPEAK</h2>
              <p className="testimonial-text">{student.quote}</p>
              <h3 className="testimonial-name">{student.name}</h3>
              <p className="testimonial-course">({student.batch})</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StudentSpeak;
