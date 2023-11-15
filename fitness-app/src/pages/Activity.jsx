import React from "react";
import "./styles/Activity.css";
import ActivityForm from "../Components/ActivityForm";

export default function Activity() {
  return (
    <div className="activity-page">
      <div className="header">Your Daily Activity</div>
      <ActivityForm></ActivityForm>
    </div>
  );
}
