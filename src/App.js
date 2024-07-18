import React from 'react';
import Navbar from './components/navbar.js';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Photos from './components/pages/Photos';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/album' element={<Photos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;