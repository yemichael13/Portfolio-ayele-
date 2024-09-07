import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Pic_phd from '../assets/pic_phd.JPG';
import Tick from '../assets/tick.png';
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';
import Twitter from '../assets/twitter.png';

import './Contact.css';

function Contact() {
  return (
    <div >
      <Navbar />
      <div className='contact-full'>
        <div className='contact-container'>
          <img src={Pic_phd} alt='pic' />
          <div className='contact-title'>
            <h1>Get in Touch Today</h1>
            <p>Get in Touch Today
            If you are interested in learning more about my 
            research and consulting services, please don’t 
            hesitate to get in touch. I offer tailored 
            solutions to meet your specific needs, and I 
            am always happy to discuss how my expertise can 
            help you achieve your goals.</p>
            <ul>
              <li><img src={Tick} alt='tick' />Expert advice on animal science</li>
              <li><img src={Tick} alt='tick' />Tailored research and consulting services</li>
              <li><img src={Tick} alt='tick' />Global expertise with a local focus</li>
            </ul>
            <div className='contact-btn'>
              <Link to="">Get In Touch</Link>
            </div>
            <div className='social-media'>
              <Link to=''><img src={Facebook} alt='facebook' /></Link>
              <Link to=''><img src={Instagram} alt='instagram' /></Link>
              <Link to=''><img src={Twitter} alt='Twitter' /></Link>
            </div>
            
          </div>
        </div>
        
        <div className='contact-promo'>
          <h1>Let's work together to promote sustainable agriculture</h1>
          <div className='contact-promo-btn'>
            <Link to=''>Let's Talk</Link>
          </div>
      </div>
        
      </div>
      
    </div>
  );
}

export default Contact;
