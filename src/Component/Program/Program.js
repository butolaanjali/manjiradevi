 import React from 'react';
import './program.css';

function Program() {
  return (
    <div className='container-fluid bd mb-4'>
    <div className="dbuu-container">
      <div className="choose-programme">
        <h2>CHOOSE YOUR <span className='bd3 '>PROGRAMME</span> </h2>
      </div>
      <div className="dbuu-programmes">
        <div className="programme-types">
          <ul>
            <li className='bd2 text-white text-center'>UNDERGRADUATE</li>
            <li>POSTGRADUATE</li>
            <li>DIPLOMA</li>
            <li>DOCTORATE</li>
          </ul>
        </div>
        <div
          className="programme-sections"
          
        >
          <div className="programme-section">
            <h3>School of Engineering</h3>
            <ul>
              <li>Diploma in CE</li>
              <li>Diploma in ME</li>
              <li>Diploma in CSE</li>
            </ul>
            <h3>School of Science And Technology</h3>
            <ul>
            <li>B.Sc</li>
            <li>BCA</li>
              <li>M.Sc</li>
              <li>MCA</li>
              <li>Diploma in AI and Machine Learning</li>
              <li>Data Science & Cloud Technology</li>
              <li>Cyber Security</li>
              <li>Forensic Science</li>
            </ul>
            <h3>School Of Commerce And Management Studies</h3>
            <ul>
              <li>B.Com</li>
              <li>BBA</li>
              <li>M.Com</li>
              <li>MBA</li>
              <li>Ph.D</li>
            </ul>
            <h3>School of Agriculture</h3>
            <ul>
              <li>B.Sc (Agriculture)</li>
              <li>Diploma in Agriculture</li>
              <li>M.Sc (Agriculture/Horticulture)</li>
            </ul>
            <h3>School of Arts and Humanity</h3>
            <ul>
              <li>Bachelor of Science</li>
              <li>Bachelor of Hospital Administration (BHA)</li>
            </ul>
            <h3>School of Journalism & Liberal Arts</h3>
            <ul>
              <li>Bachelor of Arts</li>
              <li>Bachelor of Fine Arts (BFA)</li>
              <li>B.Des. Fashion Design</li>
              <li>B.Sc. Fashion Design</li>
            </ul>
            
            <h3>School of Hotel Management & Tourism</h3>
            <ul>
              <li>Diploma - Hotel Management</li>
              <li>Bachelor of Hotel Management</li>
              <li>BBA - Tourism </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Program;
