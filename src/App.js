import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Products from './components/products';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Products />} />
    
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  );
}

export default App;
