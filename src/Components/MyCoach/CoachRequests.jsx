import React from 'react'
import { useState } from 'react'
import OneRequest from './CoachOneRequest'
import './CoachRequests.css'
import Stack from 'react-bootstrap/esm/Stack'


const Requests = () => {
  const [coachesList, setCoachesList] = useState([
    {
        name: "JOHN MOE",
        goals: "Gain Muscle, Lose Weight",
        experience: "3 Years",
        location: "Bloomfield",
        cost: "$59/month",
        schedule: "Monday, Tuesday, Thursday, Friday"
    },
    {
        name: "ANDREW RICHEY",
        goals: "Fast boxing training",
        experience: "2 Years",
        location: "Newark",
        cost: "$69/month",
        schedule: "Monday, Saturday, Sunday"
    },
    {
        name: "BEN LIAM",
        goals: "Resistance training",
        experience: "5 Years",
        location: "Bloomfield",
        cost: "$89/month",
        schedule: "Saturday, Sunday"
    }
  ]);

  // const lst = ['Yoga', '5 Years', 'Ridgefield', '$59/month'];

  return (
    <>
        <div className='allRequestsss'>
            <span className="text-wrapper1">PENDING COACH REQUESTS:</span>
            {/* 
            <OneRequest />
            <OneRequest />
            <OneRequest /> */}

            {coachesList.map((coach)=>{
              return(
                  <Stack gap={3}>
                      <div className='p-2'><OneRequest items={coach}/></div>
                  </Stack>
              );  
            })}

        </div>

    </>
  )
}

export default Requests