// ******* TODO *********//
// Need to generate new id when creating new component

import React, { useState, useEffect } from 'react'
import './ClWorkoutsPage.css'
import OneWorkout from './OneWorkout'
import WorkoutModal from './WorkoutModal';
import './WorkoutModal.css'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';



const ClWorkoutsPage = ({userId}) => {

  const clientId = userId;
  
  const [workouts, setWorkouts] = useState([]);
  const [clientInfo, setClientInfo] = useState(null);

  useEffect(() => {
    const fetchClientWorkouts = ()=>{
      axios.get(`${process.env.REACT_APP_HOST}/clientWorkouts/${clientId}`)
        .then((response)=>{
          if(response.data.ok){
            setWorkouts(response.data.surveyData);
          }else{
            console.log("error retrieving workouts");
          }
        })
        .catch((error)=>{
          console.log("Error fetching data:", error);
        })
    };
    fetchClientWorkouts();
  }, [workouts]);




  useEffect(() => {
    const fetchClientInfo = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_HOST}/clientInfo/${clientId}`);
        // console.log('aaaaaaaaaaaaaaaa: ' + res.data.surveyData);
        setClientInfo(res.data.surveyData[0]);
      } catch (err) {
        console.log(err);
      }
    };
  
    fetchClientInfo();
  }, [workouts]);



  const [clicked, setClicked]= useState(false);

  const toggleBtn = ()=>{
    setClicked(!clicked);
  }

  const addWorkout = (newWorkout) =>{
    // setModal(false);
    setWorkouts([...workouts, newWorkout]);
  }

  const deleteWorkout = (id) => {
    const filteredWorkouts = workouts.filter(workout => workout.id !== id);
    setWorkouts(filteredWorkouts);
  }



  
  return (
    <>
      <div className="allContents">
        <h1 id='title'>CLIENT-NAME</h1>
        <div className='clientInfoContainer'>
            <div className="clientInfo" style={{color:"black"}}>
              {clientInfo && 
              <>
                <h4>CLIENT NAME: <span>{clientInfo.first_name + " " + clientInfo.last_name}</span></h4>
                <h4>GOAL: <span> {clientInfo.goal}</span> </h4>
                <h4>FITNESS LEVEL: <span>{clientInfo.fitness_level}</span> </h4>
                <h4>DIET: <span>{clientInfo.diet} calories/day</span> </h4>
                <h4>WEEKLY Exercise Count: <span>{clientInfo.weekly_exercise}</span></h4>
              </>
              }
            </div>
        </div>

        <div className="workoutsContainer">
          <div className="allWorkouts">
            {workouts.map((workout)=>{
              return(
                // <DataContext.Provider value={{workouts, setWorkouts}}>
                <div key={workout.workout_id}>
                  <OneWorkout elements={workout} deleteWorkout={deleteWorkout}/>
                </div>
                // </DataContext.Provider>
              )
            })}
          </div>

          <div className="buttonDiv">
            <button 
              className='createButton'
              onClick={toggleBtn}
            >
              CREATE WORKOUT
            </button>
          </div>
        </div>

        {clicked && (<WorkoutModal setClicked={setClicked} addWorkout={addWorkout} clientId={clientId}/>)}

      </div>
    </>
  )
}

export default ClWorkoutsPage

