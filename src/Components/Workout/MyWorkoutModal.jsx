import React from "react";
import Modal from "react-modal";
import "./Styles/WorkoutModal.css";

const MyWorkoutModal = ({ isOpen, closeModal, selectedWorkout }) => {
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Workout Details"
      className="workout-modal"
      overlayClassName="workout-overlay"
      shouldCloseOnOverlayClick={true}
    >
      <div className="modal-header">
        <button className="close-button" onClick={closeModal}>
          X
        </button>
      </div>
      <div>
        <h2 className="workout-name">
          {selectedWorkout && selectedWorkout.name}
        </h2>
        <p>Goal: {selectedWorkout && selectedWorkout.goal}</p>
        <p>Equipment: {selectedWorkout && selectedWorkout.equipment}</p>
        <p>Difficulty: {selectedWorkout && selectedWorkout.difficulty}</p>
        <p>
          Muscle Target Group:{" "}
          {selectedWorkout && selectedWorkout.muscleTargetGroup}
        </p>
        {selectedWorkout && selectedWorkout.link && (
          <p>
            Link:{" "}
            <a
              href={selectedWorkout.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {selectedWorkout.link}
            </a>
          </p>
        )}
        <div className="weekdays">
          <button>Remove Workout</button> <hr />
        </div>

        <p>
          Instructions:
          <br /> {selectedWorkout && selectedWorkout.instructions}
        </p>
      </div>
    </Modal>
  );
};

export default MyWorkoutModal;
