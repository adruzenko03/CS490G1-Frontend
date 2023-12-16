import React, { useState } from 'react'
import './YourCoachExpanded.css'
import axios from 'axios';
import successBlue from '../icons/success-blue.png'


const OneCoach = ({items}) => {
  const [modal, setModal] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  const connectionId = items.coach_client_id;

  const deleteCurrentCoach = async () => {
    try {
      const res = await axios.delete(`http://localhost:3001/deleteCurrentCoach/${connectionId}`);
      // console.log(res.data);
      // setCoachesList(res.data.surveyData);
      if (res.data.ok) {
        // Do something if the response indicates success
        // alert('Successfully deleted request.')
        // window.location.reload();
        setShowDiv(true);
      } else {
        alert('Request couldnt be deleted');
        // Do something else if the response indicates failure
      }
    } catch (err) {
      console.log(err);
    }
  };

  const toggleModal = () =>{
    setModal(!modal);
  }
  const toggleDiv = () =>{
    setShowDiv(false);
    setModal(false);
    window.location.reload();
  }

  return (
    <>
    
      <div className='yourCoach' onClick={toggleModal}>
        <span id='name'>{items.first_name}</span>
        <span>{items.goal}</span>
        <span>{items.experience}</span>
      </div>

      {modal && (
        <div className='popup'>
          <div className='overlay1' onClick={toggleModal}></div>
          <div className="content">
            <button className='cancel' onClick={toggleModal}>X</button>
            <h1 className='coachName' style={{fontSize:"1.5rem", textDecoration:"underline"}}>{items.first_name + "   " + items.last_name}</h1>
            <span>{"GOAL: "+items.goal}</span>
            <span>{"EXPERIENCE: " + items.experience + " years"}</span>
            <span>{"LOCATION: " + items.city + ",  " + items.state}</span>
            <span>{"COST: $"  + items.cost + "/month"}</span>
            <span>{"Schedule: "  + items.schedule}</span>
            <div className='buttons'>
                <button className='request1' onClick={event =>  window.location.href='/ChatMain'}>CONTACT COACH</button>
                <button className='request2' onClick={deleteCurrentCoach}>REMOVE COACH</button>
            </div>
          </div>
        </div>
      )}

      {showDiv && (
          <div className='popup'>
          <div className='overlay1' onClick={toggleDiv}></div>
          <div className="content" style={{height:"40vh", display:'flex', alignItems:"center", textAlign:"center", backgroundColor:"#c34e57", color:"white"}}>
            <img src={successBlue} width={"140px"} style={{marginTop:"20px", marginBottom:"30px"}} alt="" />
            <h2>
              Coach successfully deleted!
            </h2>

          </div>
        </div>
        )}
    </>
  )
}

export default OneCoach