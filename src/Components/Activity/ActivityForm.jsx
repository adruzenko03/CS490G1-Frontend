import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ActivityForm({ userId }) {
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

  const handleSave = async () => {
    if (!isValidInput(calorieIntake) || !isValidInput(weight)) {
      setErrorMessage("Please enter valid numbers.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/activitySurvey",
        {
          userId,
          entryDate: getNumberedDate(),
          calorieIntake: parseFloat(calorieIntake),
          bodyWeight: parseFloat(weight),
        }
      );

      console.log("Form data saved:", response.data);
      setCalorieIntake("");
      setWeight("");
      setFormSaved(true);
      setErrorMessage("");
    } catch (error) {
      console.error("Error saving form data:", error);
      setErrorMessage("Error saving form data.");
    }
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
