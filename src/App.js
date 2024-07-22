import React from 'react';
import Navbar from './components/navbar.js';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Photos from './components/pages/Photos';
import Handbook from './components/pages/Handbook.js';
import Overview from './components/handbook/hbpages/Overview.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/album' element={<Photos />} />
          <Route path='/handbook' element={<Handbook />} />
          <Route path='/overview' element={<Overview />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;