import React from 'react';

import './Legal.css';

import Library from '../Library/Library';
import Legalcourses from './Legalcourses';


const Ballb = () => {
  return <div>
     <div class="container-fluid ballb-image  ">
 <div class="container">
    <div class="row">
       <div class="col-sm-12 mt-4 ">
   <center> <h2 class="text-white  display-3 artssmt mt-5 " data-aos="fade-down" >B.A in LLB</h2></center>
   
  </div>
      </div>
    </div>
</div>
<div className='container-fluid mt-5 nursingbg2 '>
  <div className='container p-5'>
    <div className='row'>
    <div className='col-md-6 '>
    <h2 className='mb-2 mt-2 arts-h1'><span className='arts-span'>Best B.A in LLB</span> College in Uttarkashi</h2>
    <p className='mt-3 arts-p'>
    At Smt. Manjira Devi University, the BA in LLB program offers a unique blend of legal education integrated with a strong foundation in arts disciplines. Spanning five years, this program aims to provide students with a deep understanding of both law and humanities subjects. The curriculum covers key aspects of law including constitutional, criminal, civil, and corporate law, while also incorporating subjects from fields like political science, sociology, and economics. The faculty comprises experienced legal professionals and scholars who bring practical insights into the classroom. Students engage in moot court competitions, internships, and legal clinics to gain hands-on experience and practical skills. Ethics and social responsibility are emphasized throughout the program, preparing graduates to become ethical and competent legal professionals. The BA in LLB program at Smt. Manjira Devi University ensures students are well-prepared for diverse career opportunities in the legal field and beyond.
    </p>


    </div>
 
    <div class="col-md-6 ">
    <img src="law4.jpg" alt="" className="arts1image" />
        
      </div>

    </div>

  </div>
</div>
<div className='container mt-5'>
<h1 className='library-heading'>	Course <span className='library-span'>Overview</span></h1>
            <div className="row" style={{
            border: "2px",
            borderRadius: "20px",
            boxShadow: "10px 10px 20px rgb(240, 117, 3)",
          }}>
            <div className="col-md-0"></div>
            <div className="col-md-6"><br></br>
            <p className='nursing-p'>
            The B.A. LL.B program integrates undergraduate education in Arts (B.A.) and legal education (LL.B). It covers subjects such as Political Science, History, Economics, Sociology, along with foundational legal subjects like Constitutional Law, Legal Methods, Contracts, and Torts. The curriculum emphasizes both theoretical knowledge and practical skills through moot courts, internships, and legal clinics.
            </p>
            <h3 className='library-heading'>Duration</h3>
            <p><h6 className='nursing-p'>5 Years (10 Semesters)</h6></p><br></br>
            <h3 className='library-heading'>Eligibility Criteria (Qualifying Exam)</h3>
            <p className='nursing-p'>
            Completion of higher secondary education (10+2) from a recognized board. Minimum Aggregate Score Requirement: Gen-45 % , OBC-42 % and SC/ST- 40 %.

               </p>
               <h3 className='library-heading'>	Career Opportunities</h3>
<p className='nursing-p'>
Graduates can pursue careers as lawyers in law firms, corporate legal departments, judiciary, civil services, legal consultants, public prosecutors, legal advisors in government and private sectors, and academia. The integrated nature of the program provides a comprehensive understanding of legal principles and their application in various domains.


</p>
        </div>
        <div className="col-md-4 image-column mt-5"><br/>
            <img
              style={{ height: "100%" }}
              src="/vision.png"
              alt="School Vision"
            />
          </div>
        </div>

</div>
<Legalcourses/>
<Library/>
</div>

}

export default Ballb;