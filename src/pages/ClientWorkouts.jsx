import React from 'react'
import './styles/ClientWorkouts.css'
import ClWorkoutsPage from '../Components/WorkoutPlan/ClWorkoutsPage'

const ClientWorkouts = () => {
  return (
    <>
        <div className="myClientWorkouts">
            <div className="clientsWorkout-txt">
                
            </div>
            <ClWorkoutsPage />
        </div>
    </>
  )
}

export default ClientWorkouts