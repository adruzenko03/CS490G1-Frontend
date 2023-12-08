import React, { createContext, useContext } from 'react'
import './OneWorkout.css'
import { useState } from 'react'
import EditWorkoutModal from './EditWorkoutModal';
import { DataContext } from '../Contexts/DataContext';


const OneWorkout = ({elements, deleteWorkout}) => {
  const [clicked, setClicked1] = useState(false);

  const toggleBtn = () => {
    setClicked1(!clicked);
  }
  
  const {workouts, setWorkouts} = useContext(DataContext);

  // Keep in mind to generate ids for every individual workout 
  // when getting data from the database
  const updateWorkout = (updatedWorkout) => {
    const updatedWorkouts = workouts.map((workout) =>
      workout.id === updatedWorkout.id ? updatedWorkout : workout
    );
    setWorkouts(updatedWorkouts);
  };

  

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
          <EditWorkoutModal setClicked1={setClicked1} items={elements} updateWorkout={updateWorkout} deleteWorkout={deleteWorkout}/>
        </div>
      )}
    </>
  )
}

export default OneWorkout