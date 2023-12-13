import React from "react";
import "./styles/Progress.css";
import CalorieGraph from "../Components/Progress/CalorieGraph";
import WeightGraph from "../Components/Progress/WeightGraph";

export default function Progress() {
  const data = [
    { Date: "2024-05-18", Weight: "142", Calorie: "1565" },
    { Date: "2025-09-11", Weight: "137", Calorie: "1350" },
    { Date: "2026-11-26", Weight: "148", Calorie: "1723" },
    { Date: "2024-06-07", Weight: "145", Calorie: "1600" },
    { Date: "2025-08-29", Weight: "140", Calorie: "1450" },
    { Date: "2026-10-20", Weight: "143", Calorie: "1550" },
    { Date: "2024-03-22", Weight: "139", Calorie: "4400" },
    { Date: "2024-02-25", Weight: "142", Calorie: "1500" },
    { Date: "2025-04-01", Weight: "137", Calorie: "1300" },
    { Date: "2024-01-14", Weight: "146", Calorie: "1800" },
    { Date: "2026-11-17", Weight: "141", Calorie: "1550" },
    { Date: "2024-04-09", Weight: "144", Calorie: "1650" },
    { Date: "2025-07-28", Weight: "139", Calorie: "1400" },
    { Date: "2024-05-03", Weight: "142", Calorie: "1000" },
    { Date: "2024-01-20", Weight: "137", Calorie: "1300" },
    { Date: "2026-06-23", Weight: "146", Calorie: "1800" },
    { Date: "2025-09-14", Weight: "141", Calorie: "1550" },
    { Date: "2025-08-12", Weight: "144", Calorie: "1650" },
    { Date: "2026-02-28", Weight: "139", Calorie: "1400" },
    { Date: "2024-01-19", Weight: "142", Calorie: "1500" },
    { Date: "2025-07-11", Weight: "137", Calorie: "1300" },
    { Date: "2025-08-15", Weight: "146", Calorie: "1800" },
    { Date: "2024-06-06", Weight: "141", Calorie: "1550" },
    { Date: "2024-03-10", Weight: "144", Calorie: "1650" },
    { Date: "2026-10-13", Weight: "139", Calorie: "1400" },
    { Date: "2025-07-05", Weight: "142", Calorie: "1500" },
    { Date: "2025-09-27", Weight: "137", Calorie: "1300" },
    { Date: "2026-11-09", Weight: "146", Calorie: "1800" },
    { Date: "2026-10-26", Weight: "141", Calorie: "1550" },
    { Date: "2024-04-16", Weight: "144", Calorie: "1650" },
    { Date: "2024-03-12", Weight: "139", Calorie: "1442" },
    { Date: "2025-08-07", Weight: "142", Calorie: "1565" },
    { Date: "2024-03-19", Weight: "137", Calorie: "1350" },
    { Date: "2025-07-12", Weight: "148", Calorie: "1723" },
    { Date: "2024-01-29", Weight: "145", Calorie: "1600" },
    { Date: "2024-04-14", Weight: "140", Calorie: "1450" },
    { Date: "2025-09-25", Weight: "143", Calorie: "1550" },
    { Date: "2026-11-18", Weight: "139", Calorie: "4400" },
    { Date: "2024-04-21", Weight: "142", Calorie: "1500" },
    { Date: "2026-10-01", Weight: "137", Calorie: "1300" },
    { Date: "2024-02-23", Weight: "146", Calorie: "1800" },
    { Date: "2025-08-30", Weight: "141", Calorie: "1550" },
    { Date: "2024-05-02", Weight: "144", Calorie: "1650" },
    { Date: "2025-09-19", Weight: "139", Calorie: "1400" },
    { Date: "2024-03-18", Weight: "142", Calorie: "1000" },
    { Date: "2025-07-22", Weight: "137", Calorie: "1300" },
    { Date: "2024-01-10", Weight: "146", Calorie: "1800" },
    { Date: "2024-05-29", Weight: "141", Calorie: "1550" },
    { Date: "2026-11-02", Weight: "144", Calorie: "1650" },
    { Date: "2024-06-28", Weight: "139", Calorie: "1400" },
    { Date: "2024-04-28", Weight: "142", Calorie: "1500" },
    { Date: "2025-07-14", Weight: "137", Calorie: "1300" },
    { Date: "2026-10-04", Weight: "146", Calorie: "1800" },
    { Date: "2024-06-01", Weight: "141", Calorie: "1550" },
    { Date: "2024-02-18", Weight: "144", Calorie: "1650" },
    { Date: "2025-01-27", Weight: "139", Calorie: "1400" },
    { Date: "2026-11-25", Weight: "142", Calorie: "1500" },
    { Date: "2024-02-13", Weight: "137", Calorie: "1300" },
    { Date: "2025-09-08", Weight: "146", Calorie: "1800" },
    { Date: "2026-10-20", Weight: "141", Calorie: "1550" },
    { Date: "2024-05-05", Weight: "144", Calorie: "1550" },
  ];
  return (
    <div className="progress-page">
      <h1 className="header">Progress</h1>
      <div className="graph-container">
        Daily Calorie Intake
        <div className="graph">
          <CalorieGraph data={data} />
        </div>
      </div>
      <div className="graph-container">
        Daily Weight
        <div className="graph">
          <WeightGraph data={data} />
        </div>
      </div>
    </div>
  );
}
