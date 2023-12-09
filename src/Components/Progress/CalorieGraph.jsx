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
  const [selectedMonth, setSelectedMonth] = useState(null);

  // Extract unique months and years from the data
  const uniqueMonths = [
    ...new Set(
      data.map((item) => {
        const date = new Date(item.Date);
        return date.toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        });
      })
    ),
  ];

  // Sort months in chronological order
  uniqueMonths.sort();

  // Filter data based on selected month
  const filteredData = selectedMonth
    ? data.filter((item) => item.Date.startsWith(selectedMonth))
    : data;

  return (
    <div>
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
