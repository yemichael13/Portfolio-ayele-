import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className='hero'>
        <div className='hero-title'>
            <Link to='/'>Ayele Abebe</Link>
        </div>
        <div className='hero-links'>
            <ul>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        <div className='btn'>
          <Link to='/contact'>Let's Talk</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
