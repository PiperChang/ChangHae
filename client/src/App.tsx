import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home/Home';
import Nav from './components/common/Nav/Nav';
import Work from './page/Work/Work';
import Comment from './page/Comment/Comment';
import About from './page/About/About';
import Footer from './components/common/Footer/Footer';
import './styles/reset.css';
import './styles/styles.css';
import Login from './components/Login/Login';

function App() {
  const [isShowLogin, setIsShowLogin] = useState(false)
  const handleLoginClick = () => {
    setIsShowLogin(!isShowLogin)
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Nav handleLoginClick={handleLoginClick}/>
        <Login isShowLogin={isShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Comment" element={<Comment />} />
          <Route path="/About" element={<About />} />
          <Route path="/Work" element={<Work />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
