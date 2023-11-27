import React from "react";
import Modal from "react-modal";

const WorkoutModal = ({ isOpen, closeModal, selectedWorkout }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Workout Details"
    >
      <h2>{selectedWorkout && selectedWorkout.name}</h2>
      <p>Goal: {selectedWorkout && selectedWorkout.goal}</p>
      <p>Equipment: {selectedWorkout && selectedWorkout.equipment}</p>
      <p>Instructions: {selectedWorkout && selectedWorkout.instructions}</p>
      <p>
        Muscle Target Group:{" "}
        {selectedWorkout && selectedWorkout.muscleTargetGroup}
      </p>
      <p>Difficulty: {selectedWorkout && selectedWorkout.difficulty}</p>
      <button>Add Workout</button>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default WorkoutModal;
