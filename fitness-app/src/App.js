import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import LoginModal from './Components/LoginModal';
import SignupModal from './Components/SignupModal';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Coaches from './pages/Coaches';
import Home from './pages/Home';
import Workouts from './pages/Workouts';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isSignupVisible, setSignupVisible] = useState(false);
  const [user, setUser] = useState(null);

  const onLoginSuccess = (userData) => {
    setUser(userData);
  }

  const toggleLoginModal = () => {
    setLoginVisible(!isLoginVisible);
    setSignupVisible(false);
  };

  const toggleSignupModal = () => {
    setSignupVisible(!isSignupVisible);
    setLoginVisible(false);
  };
  return (
    <div className="App">
      <Router>
        <Navbar onLoginClick={toggleLoginModal} onSignupClick={toggleSignupModal}/>
        <Routes>
          <Route path="" element={<Home/>} />
          <Route path="/Coaches" element={<Coaches/>} />
          <Route path="/Workouts" element={<Workouts/>} />
        </Routes>
      </Router>
      <LoginModal isVisible={isLoginVisible} onClose={() => setLoginVisible(false)} />
      <SignupModal isVisible={isSignupVisible} onClose={() => setSignupVisible(false)} />
    </div>
  );
}
export default App;
