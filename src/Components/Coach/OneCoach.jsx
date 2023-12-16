import React, { useState, useEffect } from 'react'
import './OneCoach.css'
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import successLogo from '../icons/success.png'
import successBlue from '../icons/success-blue.png'

const OneCoach = ({items}) => {
  const [modal, setModal] = useState(false);
  const [clientInfo, setClientInfo] = useState(null);
  const [showDiv, setShowDiv] = useState(false);
  // const [info, setInfo] = useState([]);

  const clientId = 25;

  const toggleModal = () =>{
    setModal(!modal);
  }

  const toggleDiv = () => {
    setShowDiv(false);
  }

  useEffect(() => {
    const fetchClientInfo = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/clientInfo/${clientId}`);
        console.log('aaaaaaaaaaaaaaaa: ' + res.data);
        setClientInfo(res.data.surveyData);
      } catch (err) {
        console.log(err);
      }
    };
  
    fetchClientInfo();
  }, [clientId]);


  const handleClick = async () => {
    try {
      const response = await axios.post(`http://localhost:3001/requestCoach`, {clientId, items});
      console.log('Response:', response.data);
      toggleModal();
      if (response.data.ok) {
        // Do something if the response indicates success
        setShowDiv(true);
      } else {
        // Do something else if the response indicates failure
      }
      // Perform actions based on the response
    } catch (error) {
      console.error('Error:', error);
      // Handle errors if any
    }
  };


  console.log(items);

  return (
    <>
    
      <div className='oneCoach' onClick={toggleModal}>
        <span id='name'>{items.first_name}</span>
        <span>{"Specialization: " + items.goal}</span>
        <span>{"Experience: " + items.experience + " years"}</span>
      </div>

      {modal && (
        <div className='popup'>
          <div className='overlay1' onClick={toggleModal}></div>
          <div className="content">
            <button className='cancel' onClick={toggleModal}>X</button>
            <h1 className='coachName' style={{fontSize:"1.5rem", textDecoration:"underline"}}>{items.first_name}</h1>
            <span>Goal: {items.goal}</span>
            <span>Experience: {items.experience}</span>
            <span>City: {items.city}</span>
            <span>Cost: {items.cost}</span>
            {/* <span>{items.schedule}</span> */}
            <button className='request' onClick={handleClick}>REQUEST COACH</button>
          </div>
        </div>
      )}

      {showDiv && (
        <div className='popup'>
        <div className='overlay2' onClick={toggleDiv}></div>
        <div className="content" style={{display:'flex', alignItems:"center", textAlign:"center", backgroundColor:"#01766c", color:"white"}}>
          <img src={successBlue} width={"140px"} style={{marginTop:"20px", marginBottom:"30px"}} alt="" />
          <h2>
            Request successfully sent!
          </h2>

        </div>
      </div>
      )}
    </>
  )
}

export default OneCoach