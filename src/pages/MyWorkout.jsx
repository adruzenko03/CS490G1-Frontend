import React, { useState } from "react";
import MyWorkoutModal from "../Components/Workout/MyWorkoutModal";
import "./styles/MyWorkout.css";

export default function MyWorkout({ onLoginSuccess, userId }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const mockData = [
    {
      name: "Jogging",
      goal: "Weight Loss",
      equipment: "No Equipment",
      instructions:
        "Start with a brisk walk, then gradually increase your pace.",
      muscleTargetGroup: "Legs",
      difficulty: "Beginner",
      link: "https://example.com/jogging-workout-source",
    },
  ];

  const openModal = (workout) => {
    setSelectedWorkout(workout);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedWorkout(null);
    setModalIsOpen(false);
  };

  return (
    <div className="myworkout-page">
      <div className="header">Your Workouts</div>
      <div className="myWorkoutform-container">
        {mockData.map((workout, index) => (
          <div
            key={index}
            className="myWorkout-container"
            onClick={() => openModal(workout)}
          >
            <div className="workout-name">{workout.name}</div>
            <div className="workout-goal">Goal: {workout.goal}</div>
            <div className="workout-equipment">
              Equipment: {workout.equipment}
            </div>
          </div>
        ))}
      </div>
      <MyWorkoutModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        selectedWorkout={selectedWorkout}
      />
    </div>
  );
}
