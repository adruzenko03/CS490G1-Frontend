import React from "react";
import "./styles/MyWorkout.css";
export default function MyWorkout() {
  return (
    <div className="myworkout-page">
      <div className="header">My Workout</div>
      <div className="form-container">Monday</div>
      <div className="form-container">Tuesday</div>
      <div className="form-container">Wednesday</div>
      <div className="form-container">Thursday</div>
      <div className="form-container">Friday</div>
      <div className="form-container">Saturaday</div>
      <div className="form-container">Sunday</div>
    </div>
  );
}
