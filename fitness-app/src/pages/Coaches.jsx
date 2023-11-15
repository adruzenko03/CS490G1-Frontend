import React from "react";
import CoachFilter from "../Components/CoachFilter";
import './Coaches.css'

function Coaches() {
  return (
    <div className="coach-page">
      <div className="header">
        <p>Coaches</p>
      </div>
      <div className="filter">
        <CoachFilter></CoachFilter>
      </div>
      <div className="list">
        <div className="coach-details">
          <p>Coach Name</p>
          <p>Goals:</p>
          <p>Experience:</p>
        </div>
        <div className="coach-details">
          <p>Coach Name</p>
          <p>Goals:</p>
          <p>Experience:</p>
        </div>
        <div className="coach-details">
          <p>Coach Name</p>
          <p>Goals:</p>
          <p>Experience:</p>
        </div>
      </div>
    </div>
  );
}

export default Coaches;
