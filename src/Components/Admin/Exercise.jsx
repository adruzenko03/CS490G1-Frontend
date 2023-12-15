import React, { createContext, useContext } from 'react'
import './Exercise.css'
import { useState} from 'react'


const Exercise = ({elements}) => {
  const [clicked, setClicked1] = useState(false);

  const toggleBtn = () => {
    setClicked1(!clicked);
  }
  

  

  return (
    <>
      <div className='exerciseContainer'>
          <div className="exerciseContent">
              <h3 id='exerciseName'>{elements.exercise_name}</h3>
              <h5>Equipment: {elements.equipment_list}</h5>
              <h5>Steps: {elements.steps}</h5>
              <div className="buttons">
                    <button className='activate' onClick={toggleBtn}>Activate</button>
                    <button className='deactivate' onClick={toggleBtn}>Dectivate</button>
                </div>
              
          </div>
      </div>

      
    </>
  )
}

export default Exercise

