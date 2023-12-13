import React, { useState } from 'react'
import './OneCoach.css'

const OneCoach = ({items}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () =>{
    setModal(!modal);
  }

  console.log(items);

  return (
    <>
    
      <div className='oneCoach' onClick={toggleModal}>
        <span id='name'>{items.first_name}</span>
        <span>{items.goal}</span>
        <span>{items.experience}</span>
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
            <button className='request'>REQUEST COACH</button>
          </div>
        </div>
      )}
    </>
  )
}

export default OneCoach