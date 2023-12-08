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
                <button className='request1' onClick={event =>  window.location.href='/ChatMain'}>CONTACT CLIENT</button>
                <button className='request2'>REMOVE CLIENT</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default OneClient