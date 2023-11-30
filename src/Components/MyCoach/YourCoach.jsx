import React from 'react'
import './YourCoach.css'
import OneRequest from './OneRequest'

const YourCoach = () => {
  return (
    <>
        <br />
        <div className='container1'>
            <span style={{marginLeft:"12px"}}>YOUR COACH</span>
            {/* <span className='specifier'>None</span> */}
            <div className="kot">
                <div className="myCoachDiv">
                    <OneRequest />
                </div>
            </div>
        </div>
    </>
  )
}

export default YourCoach