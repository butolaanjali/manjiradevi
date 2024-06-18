import React, { useState } from 'react';
import './program.css';
import { Link } from 'react-router-dom';

function Program() {
  const [selectedProgram, setSelectedProgram] = useState('UNDERGRADUATE');

  const handleProgramClick = (program) => {
    setSelectedProgram(program);
  };

  const programs = {
    UNDERGRADUATE: [
      { school: 'School of Science And Technology', courses: ['B.Sc', 'BCA'] },
      { school: 'School Of Commerce And Management Studies', courses: ['B.Com', 'BBA'] },
      { school: 'School of Agriculture', courses: ['B.Sc (Agriculture)'] },
      { school: 'School of Arts and Humanity', courses: ['BA (Hindi/Sanskrit/English/Sociology/Education/Master of Social Work)', 'BA (Economics/History/ Political Science/Library Science)'] },
      { school: 'School of Yogic Science and Naturopathy', courses: ['BNYS', 'BSC'] },
      { school: 'School of Nursing, Paramedical and Allied Science', courses: ['B.Pharma', 'B.Sc Nursing', 'BPT'] },
      { school: 'School of Legal Studies', courses: ['BALLB', 'LLB'] },
      { school: 'School of Hotel Management & Tourism', courses: ['Bachelor of Hotel Management', 'BBA - Tourism'] },
    ],
    POSTGRADUATE: [
      { school: 'School of Science And Technology', courses: ['M.Sc', 'MCA' ] },
      { school: 'School Of Commerce And Management Studies', courses: ['M.Com', 'MBA', 'Ph.D'] },
      { school: 'School of Agriculture', courses: ['M.Sc (Agriculture/Horticulture)'] },
      { school: 'School of Arts and Humanity', courses: ['MA'] },
      { school: 'School of Yogic Science and Naturopathy', courses: ['M.A', 'Ph.D.', 'M.Sc'] },
      { school: 'School of Nursing, Paramedical and Allied Science', courses: ['MPH', 'M.Sc.(Clinical Psychology)'] },
    ],
    DIPLOMA: [
      { school: 'School of Engineering', courses: ['Diploma in CE', 'Diploma in ME', 'Diploma in CSE'] },
      { school: 'School of Science And Technology', courses: ['Diploma in AI and Machine Learning', 'Data Science & Cloud Technology', 'Cyber Security','Forensic Science'] },
      { school: 'School of Agriculture', courses: ['Diploma in Agriculture'] },
      { school: 'School of Yogic Science and Naturopathy', courses: [ 'PGD-Yoga'] },
      { school: 'School of Nursing, Paramedical and Allied Science', courses: ['ANM', 'GNM', 'D.Pharma'] },
      { school: 'School of Hotel Management & Tourism', courses: ['Diploma - Hotel Management'] },
    ],
    DOCTORATE: [
      { school: 'School Of Commerce And Management Studies', courses: ['Ph.D'] },
      { school: 'School of Arts and Humanity', courses: ['Ph.D.'] },
      { school: 'School of Yogic Science and Naturopathy', courses: ['Ph.D.'] },
    ],
  };

  return (
    <div className="container-fluid bd mb-4">
      <div className="dbuu-container">
        <div className="choose-programme">
          <h2>CHOOSE YOUR <span className="bd3">PROGRAMME</span></h2>
        </div>
        <div className="dbuu-programmes">
          <div className="programme-types">
            <ul>
              <li className={`bd2 text-white text-center ${selectedProgram === 'UNDERGRADUATE' ? 'active' : ''}`} onClick={() => handleProgramClick('UNDERGRADUATE')}>UNDERGRADUATE</li>
              <li className={`${selectedProgram === 'POSTGRADUATE' ? 'active' : ''}`} onClick={() => handleProgramClick('POSTGRADUATE')}>POSTGRADUATE</li>
              <li className={`${selectedProgram === 'DIPLOMA' ? 'active' : ''}`} onClick={() => handleProgramClick('DIPLOMA')}>DIPLOMA</li>
              <li className={`${selectedProgram === 'DOCTORATE' ? 'active' : ''}`} onClick={() => handleProgramClick('DOCTORATE')}>DOCTORATE</li>
            </ul>
          </div>
          <div className="programme-sections">
            {programs[selectedProgram].map((section, index) => (
              <div key={index} className="programme-section">
                <h3>{section.school}</h3>
                <ul>
                  {section.courses.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;
