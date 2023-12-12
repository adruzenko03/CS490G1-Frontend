import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import WorkoutModal from "../Activity/WorkoutModal";
import WorkoutFilter from "../Activity/WorkoutFilter";

export default function WorkoutBank() {
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
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <h2>Workouts</h2>
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
