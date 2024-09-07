import React from 'react';
import Navbar from '../components/Navbar';
import './Gallery.css';


function Gallery() {
  return (
    <div>
      <Navbar />
      <div className='gallery-desc'>
        <div className='gallery-box'>
          <h1>Examples of my work</h1>
        </div>
        <div className='gallery-box'>
          <p>I have worked on a variety of projects throughout my career, including livestock genetic improvement, sustainable agriculture policy development, and animal nutrition research. I have also provided research and consulting services to clients across the globe, including government agencies, NGOs, and private sector entities.</p>
        </div>
        
      </div>
      <p>jgkeojeok</p>
      
    </div>
  );
}

export default Gallery;
