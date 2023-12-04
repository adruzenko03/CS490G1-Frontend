import React from "react";
import "./styles/Progress.css";
import CalorieGraph from "../Components/Progress/CalorieGraph";
export default function Progress() {
  return (
    <div className="progress-page">
      <div className="header">Progress</div>
      <div className="form-container">
        Daily Calorie Intake
        <div>
          <CalorieGraph></CalorieGraph>
        </div>
      </div>
      <div className="form-container">Exercise</div>
    </div>
  );
}
