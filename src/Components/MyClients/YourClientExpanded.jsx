import React, { useState, useEffect } from 'react'
import './YourClientExpanded.css'
import axios from 'axios';
import successBlue from '../icons/success-blue.png'

const OneClient = ({items, userId}) => {
  const [modal, setModal] = useState(false);
  const [workoutLog, setWorkoutLog] = useState([]);
  const [surveyResults, setSurveyResults] = useState([]);
  const coachId = localStorage.getItem("userId");
  const [showDiv1, setShowDiv1] = useState(false);
  const [showChatBox, setShowChatBox] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');

  const [message, setMessage] = useState("");


  const [newMessage, setNewMessage] = useState({
    message: "",
    chatId: items.coach_client_id, //should be retrieved based on who the coach is and which client chat he clicked on
    sender_id: userId, 
    receiver_id: items.client_id,
    last_update: new Date().toISOString().slice(0, 19).replace('T', ' ')
})

  const handleChange = (e) => {
    setNewMessage((prev)=>({...prev, [e.target.name]:e.target.value}))
    setCurrentMessage(e.target.value);
  }


  const handleNewMessage = async(e)=>{
    e.preventDefault();
    try{
      // setNewMessage({
      //   ...newMessage,
      //   message: message
      // });
        await axios.post("http://localhost:3001/newMessage", newMessage);
        // setCurrentMessage('');
    }catch(err){
        console.log(err); 
    }
  }
  const removeClient = async () => {
    try{
      await axios.delete(`http://localhost:3001/removeClient/${items.user_id}/${coachId}`);
      // onClientRemoved(items.user_id);
      alert("Client has been successfully removed. Please reload Page");
    } catch(error){
      console.error('Error removing client:', error);
    }
  }
  const handleClick = ()=>{
    setShowChatBox(true);
  }

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

  const toggleDiv = ()=>{
    setModal(false);
    setShowDiv1(false);
    setShowChatBox(false);
  }

  const connectionId = items.coach_client_id;

  const deleteClient = async () => {
    try {
      const res = await axios.delete(`http://localhost:3001/deleteClient/${connectionId}`);
      if (res.data.ok) {
        setShowDiv1(true);
      } else {
        alert('Client couldnt be deleted');
      }
    } catch (err) {
      console.log(err);
    }
  };

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
      {showDiv1 && (
          <div className='popup'>
          <div className='overlay1' onClick={toggleDiv}></div>
          <div className="content" style={{height:"40vh",display:'flex', alignItems:"center", textAlign:"center", backgroundColor:"#b54646", color:"white"}}>
            <img src={successBlue} width={"140px"} style={{marginTop:"20px", marginBottom:"30px"}} alt="" />
            <h2>
              Client removed!
            </h2>
          </div>
        </div>
        )}

        {showChatBox && (
           <div className='popup'>
           <div className='overlay1' onClick={toggleDiv}></div>
           <div className="content" style={{height:"40vh",display:'flex', alignItems:"center", textAlign:"center", backgroundColor:"#4659b5", color:"white"}}>
             {/* <img src={successBlue} width={"140px"} style={{marginTop:"20px", marginBottom:"30px"}} alt="" /> */}
             <h1>Send message to: {items.first_name}</h1>
             {/* <input type="text" placeholder='Type message here...'/> */}
             <textarea name="message" placeholder='Type message here...' id="" cols="40" rows="4" value={currentMessage} onChange={handleChange}></textarea>
             <button onClick={handleNewMessage}>Send Message</button>
           </div>
         </div>
        )}
    </>
  )
}

export default OneClient