// ******* TODO *********//
// Need to generate new id when creating new component

import React, { useState } from 'react'
import './ClWorkoutsPage.css'
import OneWorkout from './OneWorkout'
import WorkoutModal from './WorkoutModal';
import './WorkoutModal.css'
import { DataContext } from '../Contexts/DataContext';

const ClWorkoutsPage = () => {


  const [clicked, setClicked]= useState(false);
  const toggleBtn = ()=>{
    setClicked(!clicked);
  }

  const [workouts, setWorkouts] = useState([
    {
      id: 0,
      workoutName: "Pull",
      goal: "Gain Muscle",
      difficulty: "Beginner",
      equipment: "Dumbbells",
      muscleGroup: "Shoulders and Back",
      description: "Do 3 sets per each muslce group."
    },
    {
      id: 1,
      workoutName: "Push",
      goal: "Gain Muscle",
      difficulty: "Intermediate",
      equipment: "Bench",
      muscleGroup: "Chest and Arms",
      description: "Do 2 sets per each muslce group."
    },
    {
      id: 2,
      workoutName: "Run",
      goal: "Core Strength",
      difficulty: "Beginner",
      equipment: "Bench",
      muscleGroup: "Abdominals",
      description: "Do 4 sets per each muslce group."
    },
  ])

  const addWorkout = (newWorkout) =>{
    // setModal(false);
    setWorkouts([...workouts, newWorkout]);
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
            {workouts.map((workout)=>{
              return(
                <DataContext.Provider value={{workouts, setWorkouts}}>
                  <OneWorkout elements={workout}/>
                </DataContext.Provider>
              )
            })}
          </div>

          <div className="buttonDiv">
            <button 
              className='createButton'
              onClick={toggleBtn}
            >
              CREATE WORKOUT</button>
          </div>
        </div>

        {clicked && (<WorkoutModal setClicked={setClicked} addWorkout={addWorkout} />)}

      </div>
    </>
  )
}

export default ClWorkoutsPage