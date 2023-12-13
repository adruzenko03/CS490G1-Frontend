import React from 'react'
import { useState } from 'react'
import Stack from 'react-bootstrap/esm/Stack'
import NewExercise from './NewExercise'
import { DataContext } from '../Contexts/DataContext';
import Exercise from './Exercise'
import './ExerciseBank.css';

const ExerciseBank = () => {

    const [clicked, setClicked]= useState(false);
    const toggleBtn = ()=>{
        setClicked(!clicked);
    }
    
    const [exerciseList, setExerciseList] = useState([
        {
            exerciseName: "Push-ups",
            exerciseEquipment: ["Bodyweight"],
            steps: "Start in a plank position with your hands slightly wider than shoulder-width apart. Lower your chest to the ground by bending your elbows while keeping your body in a straight line. Push back up to the starting position, fully extending your arms."
            
        },
        {
            exerciseName: "Sit-ups",
            exerciseEquipment: ["Bodyweight"],
            steps: "Lie on your back with your knees bent and your feet flat on the floor. Place your hands behind your head, engage your core, and lift your upper body off the ground. Lower your body back down and repeat, ensuring you do not pull on your neck during the movement."
        },
        {
            exerciseName: "Squats",
            exerciseEquipment: ["Bodyweight","Barbell"],
            steps: "Stand with your feet shoulder-width apart. Bend at your hips and knees, lowering your body as if you are sitting back into a chair. Push through your heels to stand back up, straightening your legs."
        },
        {
            exerciseName: "Plank",
            exerciseEquipment: ["Bodyweight"],
            steps: "Get into a push-up position with your forearms on the ground, elbows beneath your shoulders. Keep your body in a straight line from head to heels, engage your core muscles, and hold the position for the desired duration, focusing on maintaining proper form."
        }
      ])
      const addExercise = (newExercise) =>{
        // setModal(false);
        setExerciseList([...exerciseList, newExercise]);
      }
    return (
        <>
            <div className='exerciseBank'>
            <h3>All Exercises:</h3>
            {exerciseList.map((exercise)=>{
              return(
                /*
                  <Stack gap={3}>
                      <div className='p-2'><ExerciseDetails items={exercise}/></div>
                  </Stack>
                  */
                 
                  <DataContext.Provider value={{exerciseList, setExerciseList}}>
                    <Exercise elements={exercise}/>
                </DataContext.Provider>
                
              );  
            })}
            <div className="addDiv">
                <button className='addExercise' onClick={toggleBtn}> Add Exercise</button>
            </div>
            {clicked && (<NewExercise setClicked={setClicked} addExercise={addExercise} />)}
            </div>
    
        </>
      )
}

export default ExerciseBank
