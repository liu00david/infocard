import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/infocard" /> }/>
        <Route exact path="/infocard" element={<Home />} />
        <Route path="*" element={ <Navigate to="/infocard" /> }/>
      </Routes>
    </Router>
  );
}

export default App;
