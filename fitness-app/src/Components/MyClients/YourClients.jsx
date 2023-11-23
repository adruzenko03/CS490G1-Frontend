import React, {useState} from 'react'
import './YourClients.css'
import OneRequest from './ClientOneRequest'
import Stack from 'react-bootstrap/esm/Stack'
import YourClientExpanded from './YourClientExpanded'

const YourClients = () => {
  const [coachesList, setCoachesList] = useState([
    {
      name: "TOM CRUISE",
      goals: "Gain Muscle, Lose Weight",
      fitnessLevel: "Pro",
      diet: "Anything",
      weeklyExercise: "Crunches",
    },
    {
      name: "LEO TIBNY",
      goals: "MMA Fighting",
      fitnessLevel: "Intermediate",
      diet: "Vegan",
      weeklyExercise: "Ghost fighting"
    },
    {
      name: "JIMMY EASPHER",
      goals: "Street Fighting",
      fitnessLevel: "Beginner",
      diet: "Vegan",
      weeklyExercise: "Running"
    }
  ])

  return (
    <>
        <br />
      <div className='containerr1'>
        <div className='inContainer'>
          <span style={{marginLeft:"12px", color:"white"}}>YOUR CLIENTS</span>
                  {coachesList.map((coach)=>{
                          return(
                              <Stack gap={3}>
                                  <div className='p-2'><YourClientExpanded items={coach}/></div>
                              </Stack>
                          ) 
                  })}
        </div>
        </div>
    </>
  )
}

export default YourClients