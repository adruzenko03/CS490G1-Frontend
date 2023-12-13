import React from "react";
import "./styles/Activity.css";
import ActivityForm from "../Components/Activity/ActivityForm";
import WorkoutBank from "../Components/Activity/WorkoutBank";
import RepTracker from "../Components/Activity/RepTracker";

export default function Activity() {
  return (
    <div className="activity-page">
      <div className="header">Your Daily Activity</div>
      <ActivityForm></ActivityForm>
      {/* <RepTracker></RepTracker> */}
      <WorkoutBank></WorkoutBank>
    </div>
  );
}
