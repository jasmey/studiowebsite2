import React from 'react';
import Navbar from './components/Navbar.js';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Photos from './components/pages/Photos';
import Handbook from './components/pages/Handbook.js';
import Recitals from './components/handbook/hbpages/Recitals.js';
import Studio from './components/handbook/hbpages/Studio.js';
import Lessons from './components/handbook/hbpages/Lessons.js';
import Juries from './components/handbook/hbpages/Juries.js';
import Tips from './components/handbook/hbpages/Tips.js';
import ChicagoMusic from './components/handbook/hbpages/ChicagoMusic.js';
import BienenGuide from './components/handbook/hbpages/BienenGuide.js';
import Inspo from './components/pages/Inspo.js';
import Explore from './components/pages/Explore.js';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/album' element={<Photos />} />
          <Route path='/handbook' element={<Handbook />} />
          <Route path='/reqs/recitals' element={<Recitals />} />
          <Route path='/reqs/studioclass' element={<Studio />} />
          <Route path='/reqs/lessons' element={<Lessons />} />
          <Route path='/reqs/juries' element={<Juries />} />
          <Route path='/tips' element={<Tips />} />
          <Route path='/chicagomusic' element={<ChicagoMusic />} />
          <Route path='/bienenguide' element={<BienenGuide />} />
          <Route path='/inspo' element={<Inspo />} />
          <Route path='/explore' element={<Explore />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;