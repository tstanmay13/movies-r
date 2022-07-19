import './App.css';
// import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDesc from './pages/MovieDesc';


function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Routes>
          {/* Home */}
          <Route path="/" exact element={<Home />}/>
          {/* Movies */}
          <Route path=":search" element={<Movies />}/>
          {/* Movies ID */}
          <Route path="/movie/:id"  element={<MovieDesc/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
