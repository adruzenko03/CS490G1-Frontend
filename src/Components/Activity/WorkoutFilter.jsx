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
    <div className="fliter-form">
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
          <option value="Barbell">Barbell</option>
          <option value="Dumbbells">Dumbbells</option>
          <option value="Bodyweight">Bodyweight</option>
          <option value="Machine">Machine</option>
          <option value="Kettlebells">Kettlebells</option>
          <option value="Cables">Cables</option>
          <option value="Band">Band</option>
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
          <option value="Weight Loss">Lose Weight</option>
          <option value="Muscle Gain">Gain Muscle</option>
          <option value="Endurance">Improve Endurance</option>
          <option value="Flexibility">Enhance Flexibility</option>
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
          <option value="Legs">Legs</option>
          <option value="Core">Core</option>
          <option value="Arms">Arms</option>
          <option value="Chest">Chest</option>
          <option value="Shoulders">Shoulders</option>
          <option value="FullBody">Full Body</option>
          <option value="Cardio">Cardio</option>
          <option value="Flexibility">Flexibility</option>
          <option value="Back">Back</option>
        </select>
      </label>
      <div>
        <button id="apply-btn" onClick={handleApplyClick}>
          Apply
        </button>
        <button id="apply-btn" onClick={handleResetClick}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default WorkoutFilter;
