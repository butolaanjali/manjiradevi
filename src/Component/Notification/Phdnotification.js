import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import './Phdnotification.css';  // Ensure this file exists and has valid styles

const Phdnotification = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="pdf-viewer-container">
      
    
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js">
        <div className="pdf-viewer">
          <Viewer fileUrl="/phd.pdf" plugins={[defaultLayoutPluginInstance]} />
        </div>
      </Worker>
      <a href="/phd.pdf" className="btn bf4" download>
        Download PDF
      </a>
    </div>
  );
};

export default Phdnotification;
