import React from "react";
import WorkoutFilter from "../Components/WorkoutFilter";
import "./styles/Workouts.css";

function Workouts() {
  const mockData = [
    {
      name: "Jogging",
      goal: "Weight Loss",
      equipment: "No Equipment",
    },
    {
      name: "Strength Training with Dumbbells",
      goal: "Muscle Gain",
      equipment: "Dumbbell",
    },
    {
      name: "Pull-up Bar Circuit",
      goal: "Muscle Gain",
      equipment: "Pull-up Bar",
    },
    {
      name: "Yoga for Weight Loss",
      goal: "Weight Loss",
      equipment: "No Equipment",
    },
    {
      name: "Bodyweight Muscle Building",
      goal: "Muscle Gain",
      equipment: "No Equipment",
    },
    {
      name: " Pull-up Routine",
      goal: "Muscle Gain",
      equipment: "Pull-up Bar",
    },
  ];
;

  return (
    <div className="Workout-page">
      <div className="header">
        <h1>Workouts</h1>
      </div>
      <div className="filter">
        <WorkoutFilter></WorkoutFilter>
      </div>
      <div className="list">
        {mockData.map((workout, index) => (
          <div className="Workout-details" key={index}>
            <p>{workout.name}</p>
            <p>Goal: {workout.goal}</p>
            <p>Equipment: {workout.equipment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workouts;
