import React, {useState} from 'react'
import './CoachDetails.css'

const CoachDetails = ({items}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () =>{
    setModal(!modal);
  }

  return (
    <>
      {items ? (
        <div className="oneRequest" onClick={toggleModal}>
          <div className="text-wrapper">Name: {items.name}</div>
          <div className="text-wrapper">Experience: {items.experience}</div>

        </div>
      ) : (
        <p></p>
      )}

      {modal && (
        <div className='popup'>
          <div className='overlay1' onClick={toggleModal}></div>
          <div className="content">
            <button className='cancel' onClick={toggleModal}>X</button>
            <h1 className='coachName' style={{fontSize:"1.5rem", textDecoration:"underline"}}>{items.name}</h1>
                <span>Experience: {items.experience}</span>
                <span>Goal: {items.goal}</span>
                <span>Cost: {items.cost}</span>
            <button className='approve'>Approve</button>
            <button className='decline'>Decline</button>

          </div>
        </div>
      )}
    </>
  )
}

export default CoachDetails


