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
      <label>
        Equipment:
        <select
          value={selectedEquipment}
          onChange={(e) => setSelectedEquipment(e.target.value)}
        >
          <option value="">Select Equipment</option>
          <option value="barbell">Barbell</option>
          <option value="dumbbell">Dumbbell</option>
        </select>
      </label>

    </div>
  );
};

export default WorkoutFilter;
