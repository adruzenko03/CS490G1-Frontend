import React, { useState } from "react";
const CoachFilter = () => {
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCost, setSelectedCost] = useState("");

  const handleApplyClick = () => {
    console.log("Selected Goal:", selectedGoal);
    console.log("Selected Experience:", selectedExperience);
    console.log("Selected Location:", selectedLocation);
    console.log("Selected Cost:", selectedCost);
  };

  return (
    <div>
      <div id="filterby">Filter by:</div>
      <label>
        Goal:{" "}
        <select
          value={selectedGoal}
          onChange={(e) => setSelectedGoal(e.target.value)}
        >
          <option value=""></option>
          <option value="weight-loss">Weight Loss</option>
          <option value="muscle-gain">Muscle Gain</option>
        </select>
      </label>

      <label>
        Experience:{" "}
        <select
          value={selectedExperience}
          onChange={(e) => setSelectedExperience(e.target.value)}
        >
          <option value=""></option>
          <option value="0-1years">0-1 years</option>
          <option value="intermediate">2-5 years</option>
          <option value="advanced">5+ years</option>
        </select>
      </label>

      <label>
        Location:{" "}
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value=""></option>
          <option value="less5">{"< "}5 miles</option>
          <option value="5-10">5-10 miles</option>
          <option value="10-20">10-20 miles</option>
          <option value="more20">20+ miles</option>
        </select>
      </label>

      <label>
        Cost:{" "}
        <select
          value={selectedCost}
          onChange={(e) => setSelectedCost(e.target.value)}
        >
          <option value=""></option>
          <option value="no-cost">no cost</option>
          <option value="1-10">$1 - $10</option>
          <option value="10-25">$10 - $25</option>
          <option value="25-50">$25 - $50</option>
          <option value="50more">$50+</option>
        </select>
      </label>
      <div>
        <button id="apply-btn" onClick={handleApplyClick}>
          apply
        </button>
      </div>
    </div>
  );
};

export default CoachFilter;
