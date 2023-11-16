import React from "react";
import { useState } from "react";

export default function ActivityForm() {
  const [calorieIntake, setCalorieIntake] = useState("");
  const [proteinIntake, setProteinIntake] = useState("");
  const [waterIntake, setWaterIntake] = useState("");
  const [exercise, setExercise] = useState("");
  const [mood, setMood] = useState("");
  const [weight, setWeight] = useState("");

  const handleSave = () => {
    console.log("Form data saved:", {
      calorieIntake,
      proteinIntake,
      waterIntake,
      exercise,
      mood,
      weight,
    });
    setCalorieIntake("");
    setProteinIntake("");
    setWaterIntake("");
    setExercise("");
    setMood("");
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
          Protein Intake:
          <input
            type="text"
            value={proteinIntake}
            onChange={(e) => setProteinIntake(e.target.value)}
          />
        </label>

        <label>
          Water Intake:
          <input
            type="text"
            value={waterIntake}
            onChange={(e) => setWaterIntake(e.target.value)}
          />
        </label>

        <label>
          Exercise:
          <input
            type="text"
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
          />
        </label>

        <label>
          Mood:
          <select value={mood} onChange={(e) => setMood(e.target.value)}>
            <option value=""></option>
            <option value="happy">Happy</option>
            <option value="neutral">Neutral</option>
            <option value="sad">Sad</option>
          </select>
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
