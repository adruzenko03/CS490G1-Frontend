import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Coaches from './pages/Coaches';
import Home from './pages/Home';
import Workouts from './pages/Workouts';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="" element={<Home/>} />
          <Route path="/Coaches" element={<Coaches/>} />
          <Route path="/Workouts" element={<Workouts/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
