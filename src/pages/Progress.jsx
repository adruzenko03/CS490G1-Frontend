import React, { useEffect, useState } from "react";
import "./styles/Progress.css";
import CalorieGraph from "../Components/Progress/CalorieGraph";
import WeightGraph from "../Components/Progress/WeightGraph";
import axios from "axios";

export default function Progress({ userId }) {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/activities/${userId}`)
      .then((response) => {
        if (response.data.ok) {
          setActivities(response.data.activities);
        } else {
          console.error("Error retrieving activities");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [userId]);

  return (
    <div className="progress-page">
      <h1 className="header">Progress</h1>
      <div className="graph-container">
        Daily Calorie Intake
        <div className="graph">
          <CalorieGraph data={activities} />
        </div>
      </div>
      <div className="graph-container">
        Daily Weight
        <div className="graph">
          <WeightGraph data={activities} />
        </div>
      </div>
    </div>
  );
}