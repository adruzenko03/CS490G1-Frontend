import React, { useState } from "react";

const WorkoutFilter = () => {
  const [selectedEquipment, setSelectedEquipment] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedMuscle, setSelectedMuscle] = useState("");

  const handleApplyClick = () => {
    console.log("Selected Equipment:", selectedEquipment);
    console.log("Selected Difficulty:", selectedDifficulty);
    console.log("Selected Goal:", selectedGoal);
    console.log("Selected Muscle:", selectedMuscle);
  };

  return (
    <div>
      <div id="fliterby">Filter by:</div>
      <label>
        Equipment:{" "}
        <select
          value={selectedEquipment}
          onChange={(e) => setSelectedEquipment(e.target.value)}
        >
          <option value=""></option>
          <option value="No-Equipment">No Equipment</option>
          <option value="Pull-up Bar">Pull-up Bar</option>
          <option value="Dumbbells">Dumbbell</option>
        </select>
      </label>

      <label>
        Difficulty:{" "}
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
        >
          <option value=""></option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </label>

      <label>
        Goal:{" "}
        <select
          value={selectedGoal}
          onChange={(e) => setSelectedGoal(e.target.value)}
        >
          <option value=""></option>
          <option value="weight-loss">Weight Loss</option>
          <option value="muscle-gain">Muscle Gain</option>
        </select>
      </label>

      <label>
        Muscle:{" "}
        <select
          value={selectedMuscle}
          onChange={(e) => setSelectedMuscle(e.target.value)}
        >
          <option value=""></option>
          <option value="Chest">Chest</option>
          <option value="Back">Back</option>
          <option value="Abs">Abs</option>
          <option value="Arms">Arms</option>
          <option value="Legs">Legs</option>
        </select>
      </label>
      <div>
        <button id="apply-btn" onClick={handleApplyClick}>
          apply
        </button>
      </div>
    </div>
  );
};

export default WorkoutFilter;
