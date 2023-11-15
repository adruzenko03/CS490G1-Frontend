import React from "react";
import WorkoutFilter from "../Components/WorkoutFilter";
import "./Workouts.css";

function Workouts() {
  return (
    <div className="Workout-page">
      <div className="header">
        <p>Workouts</p>
      </div>
      <div className="filter">
        <WorkoutFilter></WorkoutFilter>
      </div>
    </div>
  );
}

export default Workouts;
