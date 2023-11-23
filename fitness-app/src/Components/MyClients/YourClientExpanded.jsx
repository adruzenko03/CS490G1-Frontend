import React, { useState } from 'react'
import './YourClientExpanded.css'

const OneClient = ({items}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () =>{
    setModal(!modal);
  }

  return (
    <>
    
      <div className='yourClient' onClick={toggleModal}>
        <span id='name'>{items.name}</span>
        <span>{items.goals}</span>
      </div>

      {modal && (
        <div className='popup'>
          <div className='overlay1' onClick={toggleModal}></div>
          <div className="content">
            <button className='cancel' onClick={toggleModal}>X</button>
            <h1 className='coachName' style={{fontSize:"1.5rem", textDecoration:"underline"}}>{items.name}</h1>
            <span><b>GOAL:</b>  {items.goals}</span>
            <span><b>FITNESS LEVEL:</b>   {items.fitnessLevel}</span>
            <span><b>DIET:</b>  {items.diet}</span>
            <span><b>WEEKLY EXERCISE:</b>  {items.weeklyExercise}</span>
            <div className='buttons'>
                <button className='request1'>CONTACT CLIENT</button>
                <button className='request2'>REMOVE CLIENT</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default OneClient