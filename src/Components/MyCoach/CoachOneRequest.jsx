import React, {useState} from 'react'
import './CoachOneRequest.css'

const OneRequest = ({items}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () =>{
    setModal(!modal);
  }

  return (
    <>
      {items ? (
        <div className="oneRequest" onClick={toggleModal}>
          <div className="text-wrapper">{items.name}</div>
          <div className="div">{items.goals}</div>
          <div className="text-wrapper-2">{items.experience}</div>
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
            <span>{items.goals}</span>
            <span>{items.experience}</span>
            <span>{items.location}</span>
            <span>{items.cost}</span>
            <span>{items.schedule}</span>
            <button className='request'>REQUEST COACH</button>
          </div>
        </div>
      )}
    </>
  )
}

export default OneRequest


