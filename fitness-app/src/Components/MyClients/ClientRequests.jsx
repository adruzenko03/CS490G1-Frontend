import React from 'react'
import { useState } from 'react'
import ClientOneRequest from './ClientOneRequest'
import Stack from 'react-bootstrap/esm/Stack'
import "./ClientRequests.css"


const ClientRequests = () => {
  const [clientsList, setClientsList] = useState([
    {
        name: "JOSH DUMONT",
        goals: "Gain Muscle, Lose Weight",
        fitnessLevel: "Beginner",
        diet: "Vegan",
        weeklyExercise: "Pushups"
    },
    {
        name: "MICHAEL SCOTT",
        goals: "Learn boxing",
        fitnessLevel: "Intermediate",
        diet: "Meat Based",
        weeklyExercise: "Pullups"
    },
    {
        name: "PAM WESLEY",
        goals: "Calinsthetics",
        fitnessLevel: "Beginner",
        diet: "Vegan",
        weeklyExercise: "Running"
    },
  ]);

  // const lst = ['Yoga', '5 Years', 'Ridgefield', '$59/month'];

  return (
    <>
        <div className='allRequestss'>
            <span className="text-wrapper1">PENDING CLIENT REQUESTS:</span>

            {clientsList.map((client)=>{
              return(
                  <Stack gap={3}>
                      <div className='p-2'><ClientOneRequest items={client}/></div>
                  </Stack>
              );  
            })}

        </div>

    </>
  )
}

export default ClientRequests