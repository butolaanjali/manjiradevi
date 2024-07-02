import React from 'react';
import './Studentlife.css'; // Import CSS file (create if needed)

function StudentLife() {
  return (
    <section className="student-life">
      <h2 className="stud1">Students Life @ <span className="stud">Manjira Devi University</span></h2>
      <p>A community of curious seekers, inventors, researchers, poets, thinkers, musicians, artists, and scholars.</p>

      <div className="student-gallery">
        <div className="student-card">
          <img src="newimage.jpg" alt="Students practicing yoga" />
          <img src="newimage0.jpg" alt="Faculty members" />
        </div>
        <div className="student">
          <img src="new1.jpg" alt="Principal" />
        </div>
        <div className="student-card">
          <img src="newimage00.jpg" alt="Students practicing yoga" />
          <img src="newimage000.jpg" alt="Faculty members" />
        </div>
      </div>
    </section>
  );
}

export default StudentLife;
