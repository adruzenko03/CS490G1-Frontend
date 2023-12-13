import React, { createContext, useContext } from 'react'
import './Exercise.css'
import { useState } from 'react'
import { DataContext } from '../Contexts/DataContext';


const Exercise = ({elements, deactivate}) => {
  const [clicked, setClicked1] = useState(false);

  const toggleBtn = () => {
    setClicked1(!clicked);
  }
  
  const {exerciseList, setExerciseList} = useContext(DataContext);

  

  return (
    <>
      <div className='exerciseContainer'>
          <div className="exerciseContent">
              <h2 id='exerciseName'>{elements.exerciseName}</h2>
              <h5>Equipment: {Array.isArray(elements.exerciseEquipment) ? elements.exerciseEquipment.join(', ') : elements.exerciseEquipment}</h5>
              <h5>Steps: {elements.steps}</h5>
                    <button className='activate' onClick={toggleBtn}>Activate</button>
                    <button className='deactivate' onClick={toggleBtn}>Dectivate</button>
            
              
          </div>
      </div>

      
    </>
  )
}

export default Exercise