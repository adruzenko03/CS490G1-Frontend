import React from 'react'
import Requests from '../Components/MyCoach/CoachRequests'
import YourCoach from '../Components/MyCoach/YourCoach'
import './styles/MyCoach.css'

const MyCoach = () => {
  return (
    <div className='myCoach'>
        <div className="myCoach-txt">
          <h1>My Coach</h1>
        </div>
        <div className="container">
          <Requests />
          <YourCoach />
        </div>
    </div>
  )
}

export default MyCoach