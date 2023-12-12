import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import WorkoutModal from "../Components/Workout/ExerciseModal";
import WorkoutFilter from "../Components/Workout/ExerciseFilter";
import axios from "axios";
import "./styles/Workouts.css";

function Workouts() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState({
    equipment: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    Modal.setAppElement("#root");
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to fetch data only once when the component mounts

  const fetchData = () => {
    axios
      .get("http://localhost:3001/exercises")
      .then((response) => {
        const exercises = response.data.exercises;
        setOriginalData(exercises);
        setFilteredData(exercises); // Initialize filteredData with original data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const openModal = (workout) => {
    setSelectedWorkout(workout);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedWorkout(null);
    setModalIsOpen(false);
  };

  const applyFilters = () => {
    const filtered = originalData.filter((workout) => {
      return (
        (appliedFilters.equipment === "" ||
          workout.equipment_name === appliedFilters.equipment) &&
        (searchTerm === "" ||
          workout.exercise_name
            .toLowerCase()
            .includes(searchTerm.toLowerCase()))
      );
    });

    setFilteredData(filtered);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    applyFilters(); // Apply filters instantly as the user types
  };

  const handleFilterChange = (newFilters) => {
    setAppliedFilters(newFilters);
    applyFilters(); // Apply filters instantly as the user types
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
          handleFilterChange={handleFilterChange}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <div className="list">
        {filteredData.map((workout, index) => (
          <div
            className="Workout-details"
            key={`${workout.exercise_name}-${index}`}
            onClick={() => openModal(workout)}
          >
            <p>{workout.exercise_name}</p>
            <p>Equipment: {workout.equipment_name}</p>
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
