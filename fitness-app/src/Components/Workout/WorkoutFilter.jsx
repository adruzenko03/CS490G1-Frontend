

const WorkoutFilter = ({ appliedFilters, setAppliedFilters, applyFilters }) => {
  const handleApplyClick = () => {
    applyFilters();
  };

  const handleResetClick = () => {
    setAppliedFilters({
      equipment: "",
      difficulty: "",
      goal: "",
      muscle: "",
    });
    applyFilters(); 
  };

  return (
    <div>
      <div className="fliterby">Filter by:</div>
      <label>
        Equipment:{" "}
        <select
          value={appliedFilters.equipment}
          onChange={(e) =>
            setAppliedFilters({
              ...appliedFilters,
              equipment: e.target.value,
            })
          }
        >
          <option value=""></option>
          <option value="No Equipment">No Equipment</option>
          <option value="Pull-up Bar">Pull-up Bar</option>
          <option value="Dumbbells">Dumbbell</option>
        </select>
      </label>

      <label>
        Difficulty:{" "}
        <select
          value={appliedFilters.difficulty}
          onChange={(e) =>
            setAppliedFilters({
              ...appliedFilters,
              difficulty: e.target.value,
            })
          }
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
          value={appliedFilters.goal}
          onChange={(e) =>
            setAppliedFilters({
              ...appliedFilters,
              goal: e.target.value,
            })
          }
        >
          <option value=""></option>
          <option value="Weight Loss">Weight Loss</option>
          <option value="Muscle Gain">Muscle Gain</option>
        </select>
      </label>

      <label>
        Muscle:{" "}
        <select
          value={appliedFilters.muscle}
          onChange={(e) =>
            setAppliedFilters({
              ...appliedFilters,
              muscle: e.target.value,
            })
          }
        >
          <option value=""></option>
          <option value="Chest">Chest</option>
          <option value="Back">Back</option>
          <option value="Abs">Abs</option>
          <option value="Arms">Arms</option>
          <option value="Legs">Legs</option>
          <option value="Cardio">Cardio</option>
        </select>
      </label>
      <div>
        <button id="apply-btn" onClick={handleApplyClick}>
          Apply
        </button>
        <button id="reset-btn" onClick={handleResetClick}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default WorkoutFilter;
