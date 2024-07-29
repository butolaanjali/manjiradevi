import React from 'react';
import './contact.css';

const ContactUs = () => {
  return (
    <div className="container mt-4">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="text-left mb-3">Get in Touch</h1>
        </div>
        <div className="col-md-6">
          <h3 className="text-left">Address</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex justify-content-left mb-4">
            <a href="tel:+917017388084" className="btn mr-2" style={{ background: "orange", color: "white" }}>
              <i className="fas fa-phone-alt rotate-icon"></i> Call us
            </a>
            <a href="https://wa.me/+917017388084" className="btn mr-2" style={{ background: "orange", color: "white" }}>
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact-details">
            <p>
              Manjira Devi Campus Hintanu Dhanari, Uttarkashi<br />
              Dehradun, Uttarakhand, INDIA
            </p>
            <hr />
            <h3>Phone Number</h3>
            <p>+917017388084</p>
            <hr />
            <h3>Email</h3>
            <p>
              General: info@smdu.edu.in 
              <br />
              Admissions: admissioncell@smdu.edu.in
            </p>
            <hr />
            <div className='map'>
              <h3>Fax</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27438.12366717514!2d78.40828628244735!3d30.724993358535425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43df5e75903282df%3A0x5f050bf30019be68!2sSmt.Manjira%20Devi%20University!5e0!3m2!1sen!2sin!4v1718098513652!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Manjira Devi Campus Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
