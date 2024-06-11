import React from 'react';
import './gallery.css';
const Gallery = () => {
  return <div>
   <section class="gallery min-vh-100">
    <div class="container-lg mt-5">
      <h2 class="text-center text-bold">OUR <span className='ga'> GALLERY</span></h2>
      <hr/>
      <div class="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div class="col">
          <img src="img1.jpeg" class="gallery-item" alt="Gallery1"/>
        </div>

        <div class="col">
          <img src="img2.jpg" class="gallery-item" alt="Gallery2"/>
        </div>

        <div class="col">
          <img src="img3.jpeg" class="gallery-item" alt="Gallery3"/>
        </div>

        <div class="col">
          <img src="img4.jpeg" class="gallery-item" alt="Gallery4"/>
        </div>

        <div class="col">
          <img src="img5.jpg" class="gallery-item" alt="Gallery5"/>
        </div>

        <div class="col">
          <img src="image1.jpeg" class="gallery-item" alt="Gallery6"/>
        </div>

        <div class="col">
          <img src="student1.jpeg" class="gallery-item" alt="Gallery7"/>
        </div>

        <div class="col">
          <img src="student2.jpeg" class="gallery-item" alt="Gallery8"/>
        </div>

        <div class="col">
          <img src="student3.jpeg" class="gallery-item" alt="Gallery9"/>
        </div>
      </div>
    </div>
  </section>


<div class="modal fade" id="gallery-popup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> 
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img src="images/1.jpg" class="modal-img" alt="Modal Image"/>
      </div>
    </div>
  </div>
</div>
        </div>;
};

export default Gallery;