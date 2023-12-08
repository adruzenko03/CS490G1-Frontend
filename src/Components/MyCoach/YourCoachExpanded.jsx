import React, { useState } from 'react'
import './YourCoachExpanded.css'

const OneCoach = ({items}) => {
  const [modal, setModal] = useState(false);
 
  const toggleModal = () =>{
    setModal(!modal);
  }

  return (
    <>
    
      <div className='yourCoach' onClick={toggleModal}>
        <span id='name'>{items.name}</span>
        <span>{items.goals}</span>
        <span>{items.experience}</span>
      </div>

      {modal && (
        <div className='popup'>
          <div className='overlay1' onClick={toggleModal}></div>
          <div className="content">
            <button className='cancel' onClick={toggleModal}>X</button>
            <h1 className='coachName' style={{fontSize:"1.5rem", textDecoration:"underline"}}>{items.name}</h1>
            <span>{items.goals}</span>
            <span>{items.experience}</span>
            <span>{items.location}</span>
            <span>{items.cost}</span>
            <span>{items.schedule}</span>
            <div className='buttons'>
                <button className='request1' onClick={event =>  window.location.href='/ChatMain'}>CONTACT COACH</button>
                <button className='request2'>REMOVE COACH</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default OneCoach