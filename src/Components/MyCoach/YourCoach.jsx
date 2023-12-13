import React, {useState} from 'react'
import './YourCoach.css'
import OneRequest from './CoachOneRequest'
import Stack from 'react-bootstrap/esm/Stack'
import YourCoachExpanded from './YourCoachExpanded'

const YourCoach = () => {
  const [coachesList, setCoachesList] = useState([
    {
      name: "JOHN MOE",
      goals: "Gain Muscle, Lose Weight",
      experience: "3 Years",
      location: "Bloomfield",
      cost: "$59/month",
      schedule: "Monday, Tuesday, Thursday, Friday"
    }
  ])

  return (
    <>
        <br />
      <div className='container1'>
        <div className='inContainer'>
          <span style={{marginLeft:"12px", color:"white"}}>YOUR COACH</span>
                  {coachesList.map((coach)=>{
                          return(
                              <Stack gap={3}>
                                  <div className='p-2'><YourCoachExpanded items={coach}/></div>
                              </Stack>
                          ) 
                  })}
        </div>
        </div>
    </>
  )
}

export default YourCoach