import React from 'react'
import Requests from '../Components/MyCoach/Requests'
import YourCoach from '../Components/MyCoach/YourCoach'
import './MyCoach.css'

const MyCoach = () => {
  return (
    <div className='myCoach'>
        <div className="myCoach-txt">
          <h1>My Coach</h1>
        </div>
        <Requests />
        <YourCoach />
    </div>
  )
}

export default MyCoach