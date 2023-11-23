import React, { useState } from "react";

export default function ActivityForm() {
  const [calorieIntake, setCalorieIntake] = useState("");
  const [weight, setWeight] = useState("");
  const [formSaved, setFormSaved] = useState(false);
  const currentDate = getFormattedDate();

  function getFormattedDate() {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date().toLocaleDateString(undefined, options);
  }

  const handleSave = () => {
    console.log("Form data saved:", {
      date: getFormattedDate(),
      calorieIntake,
      weight,
    });
    setCalorieIntake("");
    setWeight("");
    setFormSaved(true);
  };

  const handleReset = () => {
    setFormSaved(false);
  };

  return (
    <div className="form-container">
      {formSaved ? (
        <div className="check-in-message">
          Check-in completed for {getFormattedDate()}
        </div>
      ) : (
        <form className="activity-form">
          <div className="title"> {currentDate}</div>
          <label>
            Calorie Intake:
            <input
              type="text"
              value={calorieIntake}
              onChange={(e) => setCalorieIntake(e.target.value)}
            />
          </label>

          <label>
            Weight:
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>

          <button type="button" onClick={handleSave}>
            Save
          </button>
        </form>
      )}
      <div className="activity-form">
        {formSaved && (
          <button type="button" onClick={handleReset}>
            Edit Check-in
          </button>
        )}
      </div>
    </div>
  );
}
