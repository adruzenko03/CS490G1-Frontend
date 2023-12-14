import React from "react";
import Modal from "react-modal";
import "../Workout/Styles/WorkoutModal.css";

const WorkoutModal = ({ isOpen, closeModal, selectedWorkout }) => {
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
        <h1 className="workout-name">
          {selectedWorkout && selectedWorkout.workout_name}
        </h1>
        <p>
          <strong>Goal:</strong> {selectedWorkout && selectedWorkout.goal}
        </p>
        <p>
          <strong>Equipment:</strong>{" "}
          {selectedWorkout && selectedWorkout.equipment_list}
        </p>
        <p>
          <strong>Difficulty:</strong>{" "}
          {selectedWorkout && selectedWorkout.difficulty}
        </p>
        <p>
          <strong>Muscle Target Groups:</strong>{" "}
          {selectedWorkout && selectedWorkout.muscle_groups}
        </p>
        <p>
          <strong>Exercises:</strong>{" "}
          {selectedWorkout && selectedWorkout.exercises}
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
          <button>Add</button>
        </div>
      </div>
    </Modal>
  );
};

export default WorkoutModal;
