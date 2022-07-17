import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// components
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
// import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      {/* <Header /> */}
      <Nav />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;