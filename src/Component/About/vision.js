import React from 'react';

const Vision = () => {
  return (
    <div className="vision-page">
      <div className="header">
        <div className="overlay">
          <h1><span className="pipe">|</span> 
           <span className="text" style={{ fontSize: '2.3rem' }}>Vision & Mission</span></h1>
        </div>
        <img src="/vision.png" alt="Vision Background" />
      </div>
      <div className="container">
        <div className="content">
          <div className="vision">
            <h2>Our Vision</h2>
            <p>To foster a society of lifelong learners with the ability of critical thinking, entrepreneurship, leadership, and to create an environment for discovery, innovation, discourse and expression.</p>
          </div>
          <div className="mission">
            <h2>Our Mission</h2>
            <ul>
              <li>Setting a benchmark to improve performance and quality assurance in academics.</li>
              <li>Creating a thriving and sustainable research environment.</li>
              <li>Laying impetus on successful student support system so as to nurture creativity, resiliency, and problem-solving skills.</li>
              <li>Inculcate the spirit of "निश्चयदेवोयम्कर्मणा" (Nischay Devo Yamakarmana).</li>
              <li>Devise and design programs in consonance with national policies and global challenges.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="journey">
        <div className="journey-content">
          <div className="image-container">
            <img src="/vision.png" alt="Journey" className="journey-image" />
            <div className="overlay1">
              <h2 style={{ fontFamily: 'Arial, sans-serif' }}>It's All About the 
                <br/>Journey</h2><br/>
            </div>
          </div>
          <div className="journey-text">
            <p style={{ fontfamily: "Gill Sans Extrabold, sans-serif" }}>Our journey is about creating a sustainable and inclusive environment where every individual can thrive. We believe in the power of education and innovation to transform lives and communities. Together, we strive to push boundaries and explore new horizons.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;