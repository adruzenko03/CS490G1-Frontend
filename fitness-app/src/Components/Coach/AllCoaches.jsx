import React, { useState } from "react";
import OneCoach from "./OneCoach";
import Stack from "react-bootstrap/Stack";
//import FilterButton from "./FilterButton";
import "./AllCoaches.css";

const AllCoaches = () => {
  const [coachesList, setCoachesList] = useState([
    {
      name: "JOHN MOE",
      goals: "Gain Muscle, Lose Weight",
      experience: "3 Years",
      location: "Bloomfield",
      cost: "$59/month",
      schedule: "Monday, Tuesday, Thursday, Friday",
    },
    {
      name: "ANDREW RICHEY",
      goals: "Fast boxing training",
      experience: "2 Years",
      location: "Newark",
      cost: "$69/month",
      schedule: "Monday, Saturday, Sunday",
    },
    {
      name: "BEN LIAM",
      goals: "Resistance training",
      experience: "5 Years",
      location: "Bloomfield",
      cost: "$89/month",
      schedule: "Saturday, Sunday",
    },
    {
      name: "JOSH NESTOR",
      goals: "UFC training",
      experience: "10 Years",
      location: "Ridgewood",
      cost: "$59/month",
      schedule: "Weekdays",
    },
    {
      name: "TYRON SMITH",
      goals: "Yoga",
      experience: "4 Years",
      location: "Ridgefield",
      cost: "$129/month",
      schedule: "Everyday",
    },
  ]);

  const lst = ["Yoga", "5 Years", "Ridgefield", "$59/month"];

  return (
    <>
      <br />
      <div className="allCoaches">
        {coachesList.map((coach) => {
          if (
            coach.goals === lst[0] ||
            coach.experience === lst[1] ||
            coach.location === lst[2] ||
            coach.cost === lst[3]
          ) {
            return (
              <Stack gap={3}>
                <div className="p-2">
                  <OneCoach items={coach} />
                </div>
              </Stack>
            );
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
};

export default AllCoaches;
