import React from 'react';
import './program.css';
import { Link } from 'react-router-dom';

function Program() {
  return (
    <div className="container-fluid bd mb-4">
      <div className="dbuu-container">
        <div className="choose-programme">
          <h2>CHOOSE YOUR <span className="bd3">PROGRAMME</span></h2>
        </div>
        <div className="dbuu-programmes">
          <div className="programme-types">
            <ul>
              <Link to='/program' className='a1'><li className='bd2 text-white text-center'>UNDERGRADUATE</li></Link>
              <Link to='/program' className='a1'><li>POSTGRADUATE</li></Link>
              <Link to='/program' className='a1'><li>DIPLOMA</li></Link>
              <Link to='/program' className='a1'><li>DOCTORATE</li></Link>
            </ul>
          </div>
          <div className="programme-sections">
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
                <li>BA (Hindi/Sanskrit/English/Sociology/Education/Master of Social Work)</li>
                <li>BA (Economics/History/ Political Science/Library Science)</li>
                <li>B.Ed</li>
                <li>Ph.D.</li>
                <li>MA</li>
              </ul>
              <h3>School of Yogic Science and Naturopathy</h3>
              <ul>
                <li>BNYS</li>
                <li>BSC</li>
                <li>M.A</li>
                <li>Ph.D.</li>
                <li>M.Sc</li>
                <li>PGD-Yoga</li>
              </ul>
              <h3>School of Nursing, Paramedical and Allied Science</h3>
              <ul>
                <li>B.Pharma</li>
                <li>B.Sc Nursing</li>
                <li>BPT</li>
                <li>ANM</li>
                <li>GNM</li>
                <li>D.Pharma</li>
                <li>MPH</li>
                <li>M.Sc.(Clinical Psychology)</li>
              </ul>
              <h3>School of Legal Studies</h3>
              <ul>
                <li>BALLB</li>
                <li>LLB</li>
              </ul>
              <h3>School of Hotel Management & Tourism</h3>
              <ul>
                <li>Diploma - Hotel Management</li>
                <li>Bachelor of Hotel Management</li>
                <li>BBA - Tourism</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;
