import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import WorkoutModal from "../Activity/WorkoutModal";
import WorkoutFilter from "../Activity/WorkoutFilter";
import axios from "axios"; // Import Axios

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
    // Fetch data from the backend using Axios
    axios
      .get("http://localhost:3001/Workouts")
      .then((response) => {
        if (response.data.ok) {
          setFilteredData(response.data.exercises);
        } else {
          console.error("Error retrieving workouts");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

const applyFilters = () => {
  const filtered = filteredData.filter((workout) => {
    return (
      (appliedFilters.equipment === "" ||
        workout.equipment_list.includes(appliedFilters.equipment)) &&
      (appliedFilters.difficulty === "" ||
        workout.difficulty === appliedFilters.difficulty) &&
      (appliedFilters.goal === "" ||
        workout.goal.toLowerCase().trim() ===
          appliedFilters.goal.toLowerCase().trim()) &&
      (appliedFilters.muscle === "" ||
        workout.muscle.toLowerCase().trim() ===
          appliedFilters.muscle.toLowerCase().trim())
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
            key={`${workout.workout_name}-${index}`}
            onClick={() => openModal(workout)}
          >
            <p>{workout.workout_name}</p> <p>Goal: {workout.goal}</p>
            <p>Equipment: {workout.equipment_list}</p>{" "}
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