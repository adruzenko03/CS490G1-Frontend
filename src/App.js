import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Sidebar/Navbar";
import LoginModal from "./Components/Sidebar/LoginModal";
import SignupModal from "./Components/Sidebar/SignupModal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coaches from "./pages/Coaches";
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import Activity from "./pages/Activity";
import Progress from "./pages/Progress";
import MyWorkout from "./pages/MyWorkout";
import Clients from "./pages/Clients";
import ClientWorkouts from "./pages/ClientWorkouts";
import MyCoach from "./pages/MyCoach";

function App() {
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isSignupVisible, setSignupVisible] = useState(false);
  const [user, setUser] = useState(null); //user state can help display user info and/or manage user sessions
  const [userRole, setUserRole] = useState(null);

  const onLoginSuccess = (isSuccess, message, userData) => {
    if (isSuccess) {
      setUser(userData); // Set the entire user object
      setUserRole(userData.role); // Set the user role
    } else {
      console.log(message);
    }
  };

  const onSignupSuccess = (userData) => {
    setUser(userData);
    setUserRole(userData.role);
  };
  
  const logout = () => {
    setUser(null);
    setUserRole(null);
  };

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
        <Navbar
          onLoginClick={toggleLoginModal}
          onSignupClick={toggleSignupModal}
          userRole={userRole}
        />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/Coaches" element={<Coaches />} />
          <Route path="/Workouts" element={<Workouts />} />
          <Route path="/Activity" element={<Activity />} />
          <Route path="/Progress" element={<Progress />} />
          <Route path="/MyWorkout" element={<MyWorkout />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/MyCoach" element={<MyCoach />} />
          <Route path="/ClientWorkouts" element={<ClientWorkouts />} />
        </Routes>
      </Router>
      <LoginModal
        isVisible={isLoginVisible}
        onClose={() => setLoginVisible(false)}
        onLoginSuccess={onLoginSuccess}
      />
      <SignupModal
        isVisible={isSignupVisible}
        onClose={() => setSignupVisible(false)}
        onSignupSuccess={onSignupSuccess}
      />
    </div>
  );
}
export default App;
