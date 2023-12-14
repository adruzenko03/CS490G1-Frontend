import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import WorkoutModal from "../Components/Activity/WorkoutModal";
import axios from "axios";
import "./styles/MyWorkout.css";

export default function MyWorkout({ userId }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [originalData, setOriginalData] = useState([]);

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
  axios
    .get("http://localhost:3001/myWorkouts")
    .then((response) => {
      if (response.data.ok) {
        const filteredData = response.data.exercises.filter(
          (workout) => workout.user_id === userId
        );
        setOriginalData(filteredData);
      } else {
        console.error("Error retrieving workouts");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}, []);

  return (
    <div className="myworkout-page">
      <div className="header">Your Workouts</div>
      <div className="myWorkoutform-container">
        {originalData.map((workout, index) => (
          <div
            className="myWorkout-container"
            key={`${workout.workout_name}-${index}`}
            onClick={() => openModal(workout)}
          >
            <h2>{workout.workout_name}</h2> <p>Goal: {workout.goal}</p>
            <p>Equipment: {workout.equipment_list}</p>
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
