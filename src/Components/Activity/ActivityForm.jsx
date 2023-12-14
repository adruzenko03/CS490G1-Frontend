import React, { useEffect, useState } from "react";

export default function ActivityForm() {
  const [calorieIntake, setCalorieIntake] = useState("");
  const [weight, setWeight] = useState("");
  const [formSaved, setFormSaved] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const currentDate = getFormattedDate();

  function getFormattedDate() {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date().toLocaleDateString(undefined, options);
  }

  function getNumberedDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const handleSave = () => {
    if (!isValidInput(calorieIntake) || !isValidInput(weight)) {
      setErrorMessage("Please enter valid numbers.");
      return;
    }
    console.log("Form data saved:", {
      date: getNumberedDate(),
      calorieIntake: parseFloat(calorieIntake),
      weight: parseFloat(weight),
    });
    setCalorieIntake("");
    setWeight("");
    setFormSaved(true);
    setErrorMessage("");
  };

  const handleReset = () => {
    setFormSaved(false);
  };

  const handleInputChange = (e, setValue) => {
    const inputValue = e.target.value;
    if (!isValidInput(inputValue)) {
      setErrorMessage("Please enter a valid number.");
    } else {
      setErrorMessage("");
    }
    setValue(inputValue);
  };

  const isValidInput = (value) => {
    // Use regex to check if the input is a valid number (integer or decimal)
    const numberRegex = /^-?\d+(\.\d*)?$/;
    return numberRegex.test(value);
  };

  return (
    <div className="form-container">
      {formSaved ? (
        <div className="check-in-message">
          Check-in completed for {getFormattedDate()}
        </div>
      ) : (
        <form className="activity-form">
          <div className="title">{currentDate}</div>
          <label>
            Calorie Intake:
            <input
              type="text"
              value={calorieIntake}
              onChange={(e) => handleInputChange(e, setCalorieIntake)}
            />
          </label>

          <label>
            Current Weight:
            <input
              type="text"
              value={weight}
              onChange={(e) => handleInputChange(e, setWeight)}
            />
          </label>

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <button type="button" onClick={handleSave}>
            Save
          </button>
        </form>
      )}
    </div>
  );
}
