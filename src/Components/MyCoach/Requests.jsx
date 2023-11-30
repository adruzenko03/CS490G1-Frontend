import React from 'react'
import OneRequest from './OneRequest'
import './Requests.css'
import YourCoach from './YourCoach'


const Requests = () => {
  return (
    <>
        <div className='allRequests'>
            <span className="text-wrapper1">PENDING COACH REQUESTS:</span>
            <OneRequest />
            <OneRequest />
            <OneRequest />
        </div>

    </>
  )
}

export default Requests