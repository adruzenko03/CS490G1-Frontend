import React, { useState } from "react";

const RepTracker = () => {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState([{ reps: "", weight: "" }]);

  const handleAddSet = () => {
    setSets([...sets, { reps: "", weight: "" }]);
  };

  const handleDeleteSet = (index) => {
    const newSets = [...sets];
    newSets.splice(index, 1);
    setSets(newSets);
  };

  const handleInputChange = (index, key, value) => {
    const newSets = [...sets];
    newSets[index][key] = value;
    setSets(newSets);
  };

  const handleExerciseChange = (value) => {
    setExercise(value);
  };

  return (
    <div>
      <h2 className="header">Rep Form</h2>
      <div className="form-container">
        <label>
          Exercise name:
          <input
            type="text"
            value={exercise}
            onChange={(e) => handleExerciseChange(e.target.value)}
          />
        </label>
        {sets.map((set, index) => (
          <div key={index}>
            <label>
              Set {index + 1} - Reps:
              <input
                type="number"
                value={set.reps}
                onChange={(e) =>
                  handleInputChange(index, "reps", e.target.value)
                }
              />
            </label>
            <label>
              Weight:
              <input
                type="number"
                value={set.weight}
                onChange={(e) =>
                  handleInputChange(index, "weight", e.target.value)
                }
              />
            </label>
            {sets.length > 1 && (
              <button type="button" onClick={() => handleDeleteSet(index)}>
                Delete Set
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={handleAddSet}>
          Add Set
        </button>
      </div>
    </div>
  );
};

export default RepTracker;
