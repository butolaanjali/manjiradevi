import React from 'react';
import { Link } from "react-router-dom";
import './Yogic.css';
const Yogiccourses = () => {
  return <div>
    <div className='container-fluid mt-5 yogicbg2 p-5'>
  <div className='container'>
  <h1 className=' yogic-heading mb-3'>Our <span className='yogic-span'>Courses</span> </h1>
    <div className='row'>
<div className='col-md-4  mt-2 '>
<div class="card cad-col">
<img src="yoga1.jpg" class="card-img-top" alt="..." className='card-image1'/>
<h4 class="card-title cardh  mt-3 mb-3 "  >Bachelor of Naturopathy & Yoga Sciences (BNYS)</h4>
<Link  to="/bnys" class="btn bt mb-4   " data-aos="fade-up">Read more</Link>
</div>
          </div>
          <div className='col-md-4 hhover  mt-2 '>
<div class="card cad-col">
<img src="yoga3.jpg" class="card-img-top" alt="..." className='card-image1'/>
<h4 class="card-title cardh  mt-3 mb-3 "  >B.sc in Yogic Science & Naturopathy</h4>
<Link  to="/bscyogic"class="btn bt mb-4   " data-aos="fade-up">Read more</Link>
</div>
          </div>
          <div className='col-md-4 hhover  mt-2 '>
<div class="card cad-col">
<img src="yoga4.jpg" class="card-img-top" alt="..." className='card-image1'/>
<h4 class="card-title cardh  mt-3 mb-3 "  >MSc in Yogic Science & Naturopathy</h4>
<Link  to="/mscyogic"class="btn bt mb-4   " data-aos="fade-up">Read more</Link>
</div>
          </div>
         

</div>
<div className='row mt-3'>
<div className='col-md-4 hhover mt-2 '>
<div class="card cad-col">
<img src="yoga2.jpg" class="card-img-top" alt="..." className='card-image1'/>
<h4 class="card-title cardh  mt-3 mb-3 "  >M.A in Yogic Science & Naturopathy</h4>
<Link  to="/mayogic"class="btn bt mb-4   " data-aos="fade-up">Read more</Link>
</div>
          </div>
          <div className='col-md-4 hhover  mt-2 '>
<div class="card cad-col">
<img src="yoga5.jpg" class="card-img-top" alt="..." className='card-image1'/>
<h4 class="card-title cardh  mt-3 mb-3 "  >Ph.D in Yogic Science & Naturopathy </h4>
<Link  to="/phdyogic"class="btn bt mb-4   " data-aos="fade-up">Read more</Link>
</div>
          </div>
          <div className='col-md-4 hhover  mt-2 '>
<div class="card cad-col">
<img src="yoga.jpg" class="card-img-top" alt="..." className='card-image1'/>
<h4 class="card-title cardh  mt-3 mb-3 "  >PGD in Yogic Science & Naturopathy </h4>
<Link  to="/pgdyogic"class="btn bt mb-4   " data-aos="fade-up">Read more</Link>
</div>
          </div>
         
</div>
    </div>

  </div>
        </div>;
};

export default Yogiccourses;