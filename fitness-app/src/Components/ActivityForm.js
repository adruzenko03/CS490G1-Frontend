import React from 'react'
import React, { useState } from "react";

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
  };


export default function ActivityForm() {
  return (
    <div className='form-container'>Activity Form</div>
  )
}
