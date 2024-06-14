import React from 'react';
import { Link } from "react-router-dom";
import './Artscourses.css';
const Artscourses = () => {
  return <div>
    <div className='container-fluid mt-5 baartsbg2 p-5'>
  <div className='container'>
  <h1 className=' baarts-heading mb-3'>Our <span className='baarts-span'>Courses</span> </h1>
    <div className='row'>
<div className='col-md-3  mt-2 '>
<div class="card baarts-col">
<img src="yoga1.jpg" class="card-img-top" alt="..." className='baartscard-image1'/>
<h4 class="card-title baarts-cardh  mt-3 mb-3 "  >Bachelor of Naturopathy & Yoga Sciences (BNYS)</h4>
<Link  to="/bnys" class="btn baarts-bt mb-4   " data-aos="fade-up">Read more</Link>
</div>
          </div>
          <div className='col-md-3   mt-2 '>
<div class="card cad-col">
<img src="yoga3.jpg" class="card-img-top" alt="..." className='card-image1'/>
<h4 class="card-title cardh  mt-3 mb-3 "  >B.sc in Yogic Science & Naturopathy</h4>
<Link  to="/bscyogic"class="btn bt mb-4   " data-aos="fade-up">Read more</Link>
</div>
          </div>
          <div className='col-md-3   mt-2 '>
<div class="card cad-col">
<img src="yoga3.jpg" class="card-img-top" alt="..." className='card-image1'/>
<h4 class="card-title cardh  mt-3 mb-3 "  >B.sc in Yogic Science & Naturopathy</h4>
<Link  to="/bscyogic"class="btn bt mb-4   " data-aos="fade-up">Read more</Link>
</div>
          </div>
          <div className='col-md-3   mt-2 '>
<div class="card cad-col">
<img src="yoga3.jpg" class="card-img-top" alt="..." className='card-image1'/>
<h4 class="card-title cardh  mt-3 mb-3 "  >B.sc in Yogic Science & Naturopathy</h4>
<Link  to="/bscyogic"class="btn bt mb-4   " data-aos="fade-up">Read more</Link>
</div>
          </div>
         
         

</div>

    </div>

  </div>
        </div>;
};

export default Artscourses;