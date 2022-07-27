import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home/Home';
import Nav from './components/common/Nav/Nav';
import Work from './page/Work/Work';
import Comment from './page/Comment/Comment';
import About from './page/About/About';

import './styles/reset.css';
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Comment" element={<Comment />} />
          <Route path="/About" element={<About />} />
          <Route path="/Work" element={<Work />} />
        </Routes>
        <footer className='copyright'>© ChangHee Kim(PiperChang). All rights reserved.</footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
