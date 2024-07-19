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
      { school: 'School of Science And Technology', courses: [{ name: 'B.Sc', url: '/bsc' }, { name: 'BCA', url: '/bca' }] },
      { school: 'School Of Commerce And Management Studies', courses: [{ name: 'B.Com', url: '/bcom' }, { name: 'BBA', url: '/bba' }] },
      { school: 'School of Agriculture', courses: [{ name: 'B.Sc (Agriculture)', url: '/bsc-agriculture' }] },
      { school: 'School of Arts and Humanity', courses: [{ name: 'BA (Hindi/Sanskrit/English/Sociology/Education/Political Science/History/Economics)', url: '/baarts' }] },
      { school: 'School of Yogic Science and Naturopathy', courses: [{ name: 'BNYS', url: '/bnys' }, { name: 'BSC', url: '/bsc-yoga' }] },
      { school: 'School of Nursing, Paramedical and Allied Science', courses: [{ name: 'B.Pharma', url: '/bpharma' }, { name: 'B.Sc Nursing', url: '/bsc-nursing' }, { name: 'BPT', url: '/bpt' }] },
      { school: 'School of Legal Studies', courses: [{ name: 'BALLB', url: '/ballb' }, { name: 'LLB', url: '/llb' }] },
      { school: 'School of Hotel Management & Tourism', courses: [{ name: 'Bachelor of Hotel Management', url: '/hotel-management' }, { name: 'BBA - Tourism', url: '/bba-tourism' }] },
    ],
    POSTGRADUATE: [
      { school: 'School of Science And Technology', courses: [{ name: 'M.Sc', url: '/msc' }, { name: 'MCA', url: '/mca' }] },
      { school: 'School Of Commerce And Management Studies', courses: [{ name: 'M.Com', url: '/mcom' }, { name: 'MBA', url: '/mba' }, { name: 'Ph.D', url: '/phd-commerce' }] },
      { school: 'School of Agriculture', courses: [{ name: 'M.Sc (Agriculture/Horticulture)', url: '/msc-agriculture' }] },
      { school: 'School of Arts and Humanity', courses: [{ name: 'MA', url: '/ma-humanity' }] },
      { school: 'School of Yogic Science and Naturopathy', courses: [{ name: 'M.A', url: '/ma-yoga' }, { name: 'Ph.D.', url: '/phd-yoga' }, { name: 'M.Sc', url: '/msc-yoga' }] },
      { school: 'School of Nursing, Paramedical and Allied Science', courses: [{ name: 'MPH', url: '/mph' }, { name: 'M.Sc.(Clinical Psychology)', url: '/msc-psychology' }] },
    ],
    DIPLOMA: [
      { school: 'School of Engineering', courses: [{ name: 'Diploma in CE', url: '/diploma-ce' }, { name: 'Diploma in ME', url: '/diploma-me' }, { name: 'Diploma in CSE', url: '/diploma-cse' }] },
      { school: 'School of Science And Technology', courses: [{ name: 'Diploma in AI and Machine Learning', url: '/diploma-ai' }, { name: 'Data Science & Cloud Technology', url: '/diploma-data-science' }, { name: 'Cyber Security', url: '/diploma-cyber-security' }, { name: 'Forensic Science', url: '/diploma-forensic' }] },
      { school: 'School of Agriculture', courses: [{ name: 'Diploma in Agriculture', url: '/diploma-agriculture' }] },
      { school: 'School of Yogic Science and Naturopathy', courses: [{ name: 'PGD-Yoga', url: '/pgd-yoga' }] },
      { school: 'School of Nursing, Paramedical and Allied Science', courses: [{ name: 'ANM', url: '/anm' }, { name: 'GNM', url: '/gnm' }, { name: 'D.Pharma', url: '/dpharma' }] },
      { school: 'School of Hotel Management & Tourism', courses: [{ name: 'Diploma - Hotel Management', url: '/diploma-hotel-management' }] },
    ],
    DOCTORATE: [
      { school: 'School Of Commerce And Management Studies', courses: [{ name: 'Ph.D', url: '/phd-commerce' }] },
      { school: 'School of Arts and Humanity', courses: [{ name: 'Ph.D.', url: '/phd-humanity' }] },
      { school: 'School of Yogic Science and Naturopathy', courses: [{ name: 'Ph.D.', url: '/phd-yoga' }] },
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
                    <li key={i}>
                      <Link to={course.url}>{course.name}</Link>
                    </li>
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
