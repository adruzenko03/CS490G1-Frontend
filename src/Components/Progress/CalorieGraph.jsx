import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const CalorieGraph = ({ data }) => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  // Extract unique years and months from the data
  const uniqueYears = [...new Set(data.map((item) => item.Date.slice(0, 4)))];
  const uniqueMonths = [...new Set(data.map((item) => item.Date.slice(5, 7)))];

  // Filter data based on selected year and month
  const filteredData = data.filter((item) => {
    return (
      (!selectedYear || item.Date.startsWith(selectedYear)) &&
      (!selectedMonth || item.Date.slice(5, 7) === selectedMonth)
    );
  });

  return (
    <div>
      <label>Select Year: </label>
      <select onChange={(e) => setSelectedYear(e.target.value)}>
        <option value="">All Years</option>
        {uniqueYears.map((year, index) => (
          <option key={index} value={year}>
            {year}
          </option>
        ))}
      </select>

      <label>Select Month: </label>
      <select onChange={(e) => setSelectedMonth(e.target.value)}>
        <option value="">All Months</option>
        {uniqueMonths.map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>

      <LineChart width={600} height={300} data={filteredData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Calorie" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default CalorieGraph;
