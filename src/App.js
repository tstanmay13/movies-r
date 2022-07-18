import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';



function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        {/* Home */}
        {/* Movies */}
        {/* Movies ID */}
      </div>
    </Router>
  );
}

export default App;
