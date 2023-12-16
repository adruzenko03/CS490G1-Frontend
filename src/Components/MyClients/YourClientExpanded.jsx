import React, { useState, useEffect } from 'react'
import './YourClientExpanded.css'
import axios from 'axios';
import successBlue from '../icons/success-blue.png'

const OneClient = ({items}) => {
  const [modal, setModal] = useState(false);
  const [showDiv1, setShowDiv1] = useState(false);
  const [showChatBox, setShowChatBox] = useState(false);

  const handleClick = ()=>{
    setShowChatBox(true);
  }

  const toggleModal = () =>{
    setModal(!modal);
  }

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
            <span><b>GOAL:</b>  {items.goal}</span>
            <span><b>FITNESS LEVEL:</b>   {items.fitness_level}</span>
            <span><b>DIET:</b>  {items.diet}</span>
            <span><b>WEEKLY EXERCISE:</b>  {items.weekly_exercise}</span>
            <div className='buttons'>
                <button className='request1' onClick={handleClick}>CONTACT CLIENT</button>
                <button className='request2' onClick={deleteClient}>REMOVE CLIENT</button>
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
             <textarea name="aaasdfdf" placeholder='Type message here...' id="" cols="40" rows="4"></textarea>
             <button>Send Message</button>
           </div>
         </div>
        )}
    </>
  )
}

export default OneClient