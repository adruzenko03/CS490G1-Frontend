import React from "react";
import Modal from "react-modal";
import "./Styles/WorkoutModal.css";

const ExerciseModal = ({ isOpen, closeModal, selectedWorkout }) => {
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
      {selectedWorkout ? (
        <div>
          <h2 className="workout-name">{selectedWorkout.exercise_name}</h2>
          <p>Equipment: {selectedWorkout.equipment_name}</p>

          {selectedWorkout.link && (
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

          <p>
            Instructions:
            <br /> {selectedWorkout.steps}
          </p>
        </div>
      ) : (
        <p>No workout selected</p>
      )}
    </Modal>
  );
};

export default ExerciseModal;
