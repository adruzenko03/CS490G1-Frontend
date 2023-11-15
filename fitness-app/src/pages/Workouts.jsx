import React from "react";
import WorkoutFilter from "../Components/WorkoutFilter";
import "./styles/Workouts.css";

function Workouts() {
  return (
    <div className="Workout-page">
      <div className="header">
        <p>Workouts</p>
      </div>
      <div className="filter">
        <WorkoutFilter></WorkoutFilter>
      </div>
      <div className="list">
        <div className="Workout-details">
          <p>Workout name</p>
          <p>Goal:</p>
          <p>Equipment:</p>
        </div>
        <div className="Workout-details">
          <p>Workout name</p>
          <p>Goal:</p>
          <p>Equipment:</p>
        </div>
        <div className="Workout-details">
          <p>Workout name</p>
          <p>Goal:</p>
          <p>Equipment:</p>
        </div>
      </div>
    </div>
  );
}

export default Workouts;
