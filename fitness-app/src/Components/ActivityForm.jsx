import React from "react";
import { useState } from "react";

export default function ActivityForm() {
  const [calorieIntake, setCalorieIntake] = useState("");
  const [weight, setWeight] = useState("");

  const handleSave = () => {
    console.log("Form data saved:", {
      calorieIntake,
      weight,
    });
    setCalorieIntake("");
    setWeight("");
  };

  return (
    <div className="form-container">
      <div className="title">Date</div>
      <form className="activity-form">
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
    </div>
  );
}
