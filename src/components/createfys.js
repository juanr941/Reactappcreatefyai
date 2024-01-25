import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import Artificial from "../pages/artificialint";
import About from "../pages/about";
import Contact from "../pages/contact";
import Index from "../pages/index";

const CreateFys = () => {
  return (
    <Router>
      <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
  
          <Link to="/" className="logo d-flex align-items-center">
            <h1><span>.</span></h1>
          </Link>
  
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide bi bi-x d-none"></i>
          
          <nav id="navbar" className="navbar">
            <ul>
              <li><Link to="/" className="active">Chatbot</Link></li>
              <li><Link to="/artificialint">Why Ai</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
            </ul>
          </nav>
  
        </div>
      </header>
  
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/artificialint" element={<Artificial />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>

    
  );
};

export default CreateFys;


