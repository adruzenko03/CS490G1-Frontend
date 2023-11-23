import React, {useState} from 'react'
import './ClientOneRequest.css'

const ClientOneRequest = ({items}) => {
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
            <span><b>GOAL:</b>  {items.goals}</span>
            <span><b>FITNESS LEVEL:</b>   {items.fitnessLevel}</span>
            <span><b>DIET:</b>  {items.diet}</span>
            <span><b>WEEKLY EXERCISE:</b>  {items.weeklyExercise}</span>
            <div className="buttons2">
              <button className='request'>ACCEPT CLIENT</button>
              <button className='request'>DECLINE CLIENT</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ClientOneRequest


