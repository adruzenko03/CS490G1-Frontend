import React, { useState } from "react";
import WorkoutModal from "../Components/Workout/WorkoutModal";
import WorkoutFilter from "../Components/Workout/WorkoutFilter";
import "./styles/Workouts.css";

function Workouts() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const openModal = (workout) => {
    setSelectedWorkout(workout);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedWorkout(null);
    setModalIsOpen(false);
  };

const mockData = [
  {
    name: "Jogging",
    goal: "Weight Loss",
    equipment: "No Equipment",
    instructions: "Start with a brisk walk, then gradually increase your pace.",
    muscleTargetGroup: "Legs, Cardio",
    difficulty: "Easy",
  },
  {
    name: "Strength Training with Dumbbells",
    goal: "Muscle Gain",
    equipment: "Dumbbell",
    instructions:
      "Perform exercises such as bicep curls, tricep extensions, etc.",
    muscleTargetGroup: "Arms, Shoulders",
    difficulty: "Medium",
  },
  {
    name: "Pull-up Bar Circuit",
    goal: "Muscle Gain",
    equipment: "Pull-up Bar",
    instructions: "Perform pull-ups, chin-ups, and hanging leg raises.",
    muscleTargetGroup: "Back, Arms",
    difficulty: "Hard",
  },
  {
    name: "Yoga for Weight Loss",
    goal: "Weight Loss",
    equipment: "No Equipment",
    instructions: "Perform a series of yoga poses and breathing exercises.",
    muscleTargetGroup: "Full Body",
    difficulty: "Medium",
  },
  {
    name: "Bodyweight Muscle Building",
    goal: "Muscle Gain",
    equipment: "No Equipment",
    instructions: "Perform exercises such as push-ups, squats, and lunges.",
    muscleTargetGroup: "Full Body",
    difficulty: "Medium",
  },
  {
    name: "Pull-up Routine",
    goal: "Muscle Gain",
    equipment: "Pull-up Bar",
    instructions: "Perform pull-ups with different grips.",
    muscleTargetGroup: "Back, Arms",
    difficulty: "Hard",
  },
];

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
          <div
            className="Workout-details"
            key={workout.name}
            onClick={() => openModal(workout)}
          >
            <p>{workout.name}</p>
            <p>Goal: {workout.goal}</p>
            <p>Equipment: {workout.equipment}</p>
          </div>
        ))}
      </div>

      <WorkoutModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        selectedWorkout={selectedWorkout}
      />
    </div>
  );
}

export default Workouts;
