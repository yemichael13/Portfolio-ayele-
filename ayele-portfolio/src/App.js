import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import Gallery from './pages/Gallery';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';

function App() {
  return (
    
      <Router>
    
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/experience' element={<Experience />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
       
      </Router>
    
  );
}

export default App;
