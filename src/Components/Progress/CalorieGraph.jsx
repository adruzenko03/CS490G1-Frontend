import React from "react";

export default function CalorieGraph() {
const mockData = [
  { Date: "2023-12-01", Weight: "142", Calorie: "1565" },
  { Date: "2023-12-02", Weight: "137", Calorie: "1350" },
  { Date: "2023-12-03", Weight: "148", Calorie: "1723" },
  { Date: "2023-12-04", Weight: "145", Calorie: "1600" },
  { Date: "2023-12-05", Weight: "140", Calorie: "1450" },
  { Date: "2023-12-06", Weight: "143", Calorie: "1550" },
  { Date: "2023-12-07", Weight: "139", Calorie: "1400" },
  { Date: "2023-12-08", Weight: "142", Calorie: "1500" },
  { Date: "2023-12-09", Weight: "137", Calorie: "1300" },
  { Date: "2023-12-10", Weight: "146", Calorie: "1800" },
  { Date: "2023-12-11", Weight: "141", Calorie: "1550" },
  { Date: "2023-12-12", Weight: "144", Calorie: "1650" },
  { Date: "2023-12-13", Weight: "139", Calorie: "1400" },
  { Date: "2023-12-14", Weight: "142", Calorie: "1500" },
  { Date: "2023-12-15", Weight: "137", Calorie: "1300" },
  { Date: "2023-12-16", Weight: "146", Calorie: "1800" },
  { Date: "2023-12-17", Weight: "141", Calorie: "1550" },
  { Date: "2023-12-18", Weight: "144", Calorie: "1650" },
  { Date: "2023-12-19", Weight: "139", Calorie: "1400" },
  { Date: "2023-12-20", Weight: "142", Calorie: "1500" },
  { Date: "2023-12-21", Weight: "137", Calorie: "1300" },
  { Date: "2023-12-22", Weight: "146", Calorie: "1800" },
  { Date: "2023-12-23", Weight: "141", Calorie: "1550" },
  { Date: "2023-12-24", Weight: "144", Calorie: "1650" },
  { Date: "2023-12-25", Weight: "139", Calorie: "1400" },
  { Date: "2023-12-26", Weight: "142", Calorie: "1500" },
  { Date: "2023-12-27", Weight: "137", Calorie: "1300" },
  { Date: "2023-12-28", Weight: "146", Calorie: "1800" },
  { Date: "2023-12-29", Weight: "141", Calorie: "1550" },
  { Date: "2023-12-30", Weight: "144", Calorie: "1650" },
  { Date: "2023-12-31", Weight: "139", Calorie: "1442" },
];
  const svgWidth = 800;
  const svgHeight = 500;

  const minDate = new Date(mockData[0].Date);
  const maxDate = new Date(mockData[mockData.length - 1].Date);
  const minCalorie = 0;
  const maxCalorie = (Math.max(...mockData.map((d) => d.Calorie)))*1.5;

  const xScale = (d) =>
    ((new Date(d.Date) - minDate) / (maxDate - minDate)) * svgWidth;
  const yScale = (d) =>
    ((d.Calorie - minCalorie) / (maxCalorie - minCalorie)) * svgHeight;

  const xAxisTicks = mockData.map((d) => xScale(d));
  const yAxisTicks = [0, 0.25, 0.5, 0.75, 1].map((tick) => tick * svgHeight);

  return (
    <div className="graphs">
      <svg width={svgWidth} height={svgHeight}>
        {/* X-axis ticks and labels */}
        {xAxisTicks.map((tick, i) => (
          <g key={i}>
            <line
              x1={tick}
              y1={svgHeight - 5}
              x2={tick}
              y2={svgHeight}
              stroke="black"
            />
            <text
              x={tick}
              y={svgHeight + 15}
              textAnchor="middle"
              alignmentBaseline="hanging"
            >
              {mockData[i].Date}
            </text>
          </g>
        ))}

        {/* Y-axis ticks and labels */}
        {yAxisTicks.map((tick, i) => (
          <g key={i}>
            <line x1={-5} y1={tick} x2={0} y2={tick} stroke="black" />
            <text x={-30} y={tick} textAnchor="end" alignmentBaseline="middle">
              {Math.round(
                minCalorie + (tick / svgHeight) * (maxCalorie - minCalorie)
              )}
            </text>
          </g>
        ))}

        {/* Line connecting data points */}
        {mockData.map((d, i) => {
          if (i < mockData.length - 1) {
            return (
              <line
                key={i}
                x1={xScale(d)}
                y1={svgHeight - yScale(d)}
                x2={xScale(mockData[i + 1])}
                y2={svgHeight - yScale(mockData[i + 1])}
                stroke="orange"
              />
            );
          } else {
            return null;
          }
        })}
      </svg>
    </div>
  );
}
