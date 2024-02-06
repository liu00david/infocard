import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/fun" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
