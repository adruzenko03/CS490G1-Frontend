import React, { useState } from 'react'
import './YourClientExpanded.css'
import axios from 'axios';

const OneClient = ({items, onClientRemoved}) => {
  const [modal, setModal] = useState(false);
  const [workoutLog, setWorkoutLog] = useState([]);
  const [surveyResults, setSurveyResults] = useState([]);


  const coachId = localStorage.getItem("userId");
  const toggleModal = async () => {
    if (!modal) {
      try {
        const workoutLogResponse = await axios.get(`http://localhost:3001/clientWorkoutLog/${items.user_id}`);
        const surveyResponse = await axios.get(`http://localhost:3001/clientDailySurvey/${items.user_id}`);
        setWorkoutLog(workoutLogResponse.data);
        setSurveyResults(surveyResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    setModal(!modal);
  };
  const removeClient = async () => {
    try{
      await axios.delete(`http://localhost:3001/removeClient/${items.user_id}/${coachId}`);
      onClientRemoved(items.user_id);
      alert("Client has been successfully removed. Please reload Page");
    } catch(error){
      console.error('Error removing client:', error);
    }
  }

  return (
    <>
    
      <div className='yourClient' onClick={toggleModal}>
        <span id='name'>{items.first_name +  " " + items.last_name}</span>
        <span>{items.goal}</span>
      </div>

      {modal && (
        <div className='popup'>
          <div className='overlay1' onClick={toggleModal}></div>
          <div className="content">
            <button className='cancel' onClick={toggleModal}>X</button>
            <h1 className='coachName' style={{fontSize:"1.5rem", textDecoration:"underline"}}>{items.first_name}</h1>
            <span><b>GOAL:</b>  {items.goal_description}</span>
            <span><b>FITNESS LEVEL:</b>   {items.fitness_level}</span>
            <span><b>DIET:</b>  {items.diet}</span>
            <span><b>WEEKLY EXERCISE:</b>  {items.weekly_exercise}</span>
            <span><b>Workout Log</b></span>
            <div className="workout-log">
              {workoutLog.length > 0 ? (
                workoutLog.map((log, index) => (
                <div key={index} className="workout-log-entry">
                  <div>Date: {new Date(log.entry_date).toLocaleDateString()}</div>
                  <div>Exercise ID: {log.exercise_id}</div>
                  <div>Set Number: {log.set_number}</div>
                  <div>Reps: {log.reps}</div>
                  <div>Weight: {log.weight}</div>
                </div>
                ))) : (<div>No workout log entries found.</div>)
              }
              <div className="daily-activity">
                <span>Daily Activity</span>
                {surveyResults.length > 0 ? (
                  surveyResults.map((activity, index) => (
                    <div key={index} className="daily-activity-entry">
                      <div>Date: {new Date(activity.entry_date).toLocaleDateString()}</div>
                      <div>Calorie Intake: {activity.calorie_intake}</div>
                      <div>Body Weight: {activity.body_weight}</div>
                      <div>Mood: {activity.mood}</div>
                    </div>
                  ))) : (<div>No daily activity entries found.</div>)
                }
              </div>
              <div className='buttons'>
                  <button className='request1' onClick={event =>  window.location.href='/ChatMain'}>CONTACT CLIENT</button>
                  <button className='request2' onClick={removeClient}>REMOVE CLIENT</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default OneClient