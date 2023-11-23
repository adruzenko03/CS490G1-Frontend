import React from 'react'
import './OneWorkout.css'
import { useState } from 'react'

const OneWorkout = () => {


  return (
    <div className='oneWorkoutContainer'>
        <div className="oneWorkoutContent">
            <h2 id='workoutTitle'>PULL</h2>
            <h5>GOAL:</h5>
            <h5>DIFFICULTY:</h5>
            <h5>EQUIPMENT:</h5>
            <h5>MUSCLE GROUP:</h5>
            <h5>DESCRIPTION:</h5>
            <div className="myButton">
                <button 
                  className='editButton'
                >
                  EDIT WORKOUT</button>
            </div> 
        </div>
    </div>
  )
}

export default OneWorkout