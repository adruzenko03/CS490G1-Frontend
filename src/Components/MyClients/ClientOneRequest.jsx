import React, {useState} from 'react'
import './ClientOneRequest.css'
import axios from 'axios';
import successBlue from '../icons/success-blue.png'
import trashIcon from '../icons/trash.png'


const ClientOneRequest = ({items}) => {
  const [modal, setModal] = useState(false);
  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);

  const toggleModal = () =>{
    setModal(!modal);
  }

  const toggleDiv1 = () => {
    setShowDiv1(false);
    setModal(false);
    window.location.reload();
  }
  const toggleDiv2 = () => {
    setShowDiv2(false);
    setModal(false);
    window.location.reload();
  }

  const connectionId = items.coach_client_id;
  console.log('aaaaaaaaa'  + connectionId);

  const acceptClientRequest = async () => {
    try {
      const res = await axios.put(`http://localhost:3001/acceptClientRequest/${connectionId}`);
      console.log("successsssss");
      setShowDiv1(true);
    } catch (err) {
      console.log(err);
    }
  };

  const declineClientRequest = async () => {
    try {
      const res = await axios.put(`http://localhost:3001/declineClientRequest/${connectionId}`);
      console.log("successsssss");
      setShowDiv2(true);
    } catch (err) {
      console.log(err);
    }
  };
  
  
  

  return (
    <>
      {items ? (
        <div className="oneRequest" onClick={toggleModal}>
          <div className="text-wrapper">{items.first_name + " " + items.last_name}</div>
          <div className="div" style={{color:'orange'}}>{items.status}</div>
        </div>
      ) : (
        <p></p>
      )}

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
            <div className="buttons2">
              <button className='request' onClick={acceptClientRequest}>ACCEPT CLIENT</button>
              <button className='request' onClick={declineClientRequest}>DECLINE CLIENT</button>
            </div>
          </div>
        </div>
      )}

      {showDiv1 && (
          <div className='popup'>
          <div className='overlay1' onClick={toggleDiv1}></div>
          <div className="content" style={{height:"40vh",display:'flex', alignItems:"center", textAlign:"center", backgroundColor:"#36a679", color:"white"}}>
            <img src={successBlue} width={"140px"} style={{marginTop:"20px", marginBottom:"30px"}} alt="" />
            <h2>
              Request accepted!
            </h2>
          </div>
        </div>
        )}
      {showDiv2 && (
          <div className='popup'>
          <div className='overlay1' onClick={toggleDiv2}></div>
          <div className="content" style={{height:"40vh",display:'flex', alignItems:"center", textAlign:"center", backgroundColor:"#b54646", color:"white"}}>
            <img src={successBlue} width={"140px"} style={{marginTop:"20px", marginBottom:"30px"}} alt="" />
            <h2>
              Request declined!
            </h2>
          </div>
        </div>
        )}
    </>
  )
}

export default ClientOneRequest


