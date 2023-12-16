const ExerciseFilter = ({
  appliedFilters,
  setAppliedFilters,
  applyFilters,
  searchTerm,
  setSearchTerm,
}) => {
  const handleApplyClick = () => {
    applyFilters();
  };

  const handleResetClick = () => {
    setAppliedFilters({
      equipment: "",
    });
    setSearchTerm(""); // Reset the search term
    applyFilters();
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="fliter-form">
      <div className="fliterby">Filter by:</div>
      <label>
        Search:
        <input type="text" value={searchTerm} onChange={handleSearchChange} />
      </label>
      <label>
        Equipment:
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

      <div>
        <button id="apply-btn" onClick={handleResetClick}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default ExerciseFilter;