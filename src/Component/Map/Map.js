import React from 'react';
import './map.css';

const Map = () => {
  return (
    <div>
      <div className='map mt-5 g-0'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27438.12366717514!2d78.40828628244735!3d30.724993358535425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43df5e75903282df%3A0x5f050bf30019be68!2sSmt.Manjira%20Devi%20University!5e0!3m2!1sen!2sin!4v1718098513652!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
