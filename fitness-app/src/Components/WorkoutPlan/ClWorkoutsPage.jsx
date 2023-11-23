import React, { useState } from 'react'
import './ClWorkoutsPage.css'
import OneWorkout from './OneWorkout'
import WorkoutModal from './WorkoutModal';
import './WorkoutModal.css'

const ClWorkoutsPage = () => {

  const [clicked, setClicked]= useState(false);
  const toggleBtn = ()=>{
    setClicked(!clicked);
  }

  return (
    <>
      <div className="allContents">
        <h1 id='title'>CLIENT-NAME</h1>
        <div className='clientInfoContainer'>
            <div className="clientInfo">
              <h4>CLIENT NAME:</h4>
              <h4>GOAL:</h4>
              <h4>FITNESS LEVEL:</h4>
              <h4>DIET:</h4>
              <h4>WEEKLY EXPERIENCE:</h4>
            </div>
        </div>
      <br />
        <div className="workoutsContainer">
          <div className="allWorkouts">
            <OneWorkout />
            <OneWorkout />
            <OneWorkout />
          </div>

          <div className="buttonDiv">
            <button 
              className='createButton'
              onClick={toggleBtn}
            >
              CREATE WORKOUT</button>
          </div>
        </div>

        {clicked && (<WorkoutModal setClicked={setClicked}/>)}

      </div>
    </>
  )
}

export default ClWorkoutsPage