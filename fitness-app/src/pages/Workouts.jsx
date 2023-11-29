import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import WorkoutModal from "../Components/Workout/WorkoutModal";
import WorkoutFilter from "../Components/Workout/WorkoutFilter";
import "./styles/Workouts.css";

function Workouts() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState({
    equipment: "",
    difficulty: "",
    goal: "",
    muscle: "",
  });

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
    {
      name: "Strength Training with Dumbbells",
      goal: "Muscle Gain",
      equipment: "Dumbbell",
      instructions:
        "Perform exercises such as bicep curls, tricep extensions, etc.",
      muscleTargetGroup: "Arms",
      difficulty: "Intermediate",
      link: "https://example.com/strength-training-source",
    },
    {
      name: "Pull-up Bar Circuit",
      goal: "Muscle Gain",
      equipment: "Pull-up Bar",
      instructions: "Perform pull-ups, chin-ups, and hanging leg raises.",
      muscleTargetGroup: "Back",
      difficulty: "Advanced",
      link: "https://example.com/pull-up-circuit-source",
    },
    {
      name: "Yoga for Weight Loss",
      goal: "Weight Loss",
      equipment: "No Equipment",
      instructions: "Perform a series of yoga poses and breathing exercises.",
      muscleTargetGroup: "Full Body",
      difficulty: "Intermediate",
      link: "https://example.com/yoga-for-weight-loss-source",
    },
    {
      name: "Bodyweight Muscle Building",
      goal: "Muscle Gain",
      equipment: "No Equipment",
      instructions: "Perform exercises such as push-ups, squats, and lunges.",
      muscleTargetGroup: "Full Body",
      difficulty: "Intermediate",
      link: "https://example.com/bodyweight-muscle-building-source",
    },
    {
      name: "Pull-up Routine",
      goal: "Muscle Gain",
      equipment: "Pull-up Bar",
      instructions: "Perform pull-ups with different grips.",
      muscleTargetGroup: "Arms",
      difficulty: "Advanced",
      link: "https://example.com/pull-up-routine-source",
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

  useEffect(() => {
    Modal.setAppElement("#root");
  });

  const applyFilters = () => {
    const filtered = mockData.filter((workout) => {
      return (
        (appliedFilters.equipment === "" ||
          workout.equipment === appliedFilters.equipment) &&
        (appliedFilters.difficulty === "" ||
          workout.difficulty.toLowerCase() ===
            appliedFilters.difficulty.toLowerCase()) &&
        (appliedFilters.goal === "" || workout.goal === appliedFilters.goal) &&
        (appliedFilters.muscle === "" ||
          workout.muscleTargetGroup.toLowerCase() ===
            appliedFilters.muscle.toLowerCase())
      );
    });

    setFilteredData(filtered);
  };

  return (
    <div className="Workout-page">
      <div className="header">
        <h1>Workouts</h1>
      </div>
      <div className="filter">
        <WorkoutFilter
          appliedFilters={appliedFilters}
          setAppliedFilters={setAppliedFilters}
          applyFilters={applyFilters}
        />
      </div>
      <div className="list">
        {filteredData.map((workout, index) => (
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
