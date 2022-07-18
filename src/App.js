import './App.css';
// import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './pages/Home';



function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Routes>
          {/* Home */}
          <Route path="/" exact element={<Home />}/>
          {/* Movies */}
          {/* Movies ID */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
