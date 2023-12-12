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
          <span>Select Day To Add Workout: </span>
          <select>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
          </select>
          <button>Add</button> <hr />
        </div>

        <p>
          Instructions:
          <br /> {selectedWorkout && selectedWorkout.instructions}
        </p>
      </div>
    </Modal>
  );
};

export default WorkoutModal;
