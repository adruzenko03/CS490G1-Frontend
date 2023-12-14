import React, {useState} from 'react'
import './ClientOneRequest.css'
import axios from 'axios';

const ClientOneRequest = ({items, onClientStatusChange}) => {
  const [modal, setModal] = useState(false);

  const coachId = localStorage.getItem("userId");
  const toggleModal = () =>{
    setModal(!modal);
  }

  const acceptClient = async () => {
    try {
      const response = await axios.post(`http://localhost:3001/acceptClient`,{
        clientId: items.user_id,
        coachId: coachId
      });
      if(response.status === 200) {
        onClientStatusChange(items.user_id, 'accepted');
      }
    } catch (error) {
      console.error('Error accepting client:', error);
    }
  }
  const declineClient = async () => {
    try {
      const response = await axios.post(`http://localhost:3001/declineClient`,{
        clientId: items.user_id,
        coachId: coachId
      });
      if(response.status === 200) {
        onClientStatusChange(items.user_id, 'declined');
      }
    } catch (error) {
      console.error('Error accepting client:', error);
    }
  }

  return (
    <>
      <div className="oneRequest" onClick={toggleModal}>
        <span className="name">{items.first_name + " " + items.last_name}</span>
        <span className="div" style={{color:'orange'}}>{items.status}</span>
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
            <div className="buttons2">
              <button className='request' onClick={acceptClient}>ACCEPT CLIENT</button>
              <button className='request' onClick={declineClient}>DECLINE CLIENT</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ClientOneRequest