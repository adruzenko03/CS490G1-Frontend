import React from 'react'
import './OneWorkout.css'
import { useState } from 'react'
import EditWorkoutModal from './EditWorkoutModal';

const OneWorkout = ({elements}) => {
  const [clicked, setClicked1] = useState(false);

  const toggleBtn = () => {
    setClicked1(!clicked);
  }
  
  

  return (
    <>
      <div className='oneWorkoutContainer'>
          <div className="oneWorkoutContent">
              <h2 id='workoutTitle'>{elements.workoutName}</h2>
              <h5>GOAL: {elements.goal}</h5>
              <h5>DIFFICULTY: {elements.difficulty}</h5>
              <h5>EQUIPMENT: {elements.equipment}</h5>
              <h5>MUSCLE GROUP: {elements.muscleGroup}</h5>
              <h5>DESCRIPTION: {elements.description}</h5>
              <div className="myButton">
                  <button 
                    className='editButton'
                    onClick={toggleBtn}
                    >
                    EDIT WORKOUT</button>
              </div> 
          </div>
      </div>

      {clicked && (
        <div className="editModal">
          <EditWorkoutModal setClicked1={setClicked1} items={elements}/>
        </div>
      )}
    </>
  )
}

export default OneWorkout