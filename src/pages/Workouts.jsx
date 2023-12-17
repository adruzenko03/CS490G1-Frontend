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
    muscle:"",
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    Modal.setAppElement("#root");
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:3001/exercises")
      .then((response) => {
        const exercises = response.data.exercises;
        setOriginalData(exercises);
        setFilteredData(exercises);
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
        (appliedFilters.muscle === "" ||
          workout.muscle
            .toLowerCase()
            .trim()

            .includes(appliedFilters.muscle)) &&
        (searchTerm === "" ||
          workout.exercise_name
            .toLowerCase()
            .includes(searchTerm.toLowerCase()))
      );
    });

    setFilteredData(filtered);
  };


  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, appliedFilters]);

  return (
    <div className="Workout-page">
      <div className="header">
        <h1>Exercises</h1>
      </div>
      <div className="filter">
        <WorkoutFilter
          appliedFilters={appliedFilters}
          setAppliedFilters={setAppliedFilters}
          applyFilters={applyFilters}
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
            <p className="exercise-name">{workout.exercise_name}</p>
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
