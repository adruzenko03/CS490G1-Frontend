// ******* TODO *********//
// Need to generate new id when creating new component
// ******** *********** **********//

import React, { useState } from 'react'
import './WorkoutModal.css'
import {v4 as uuidv4} from 'uuid';
import plusIcon from '../../Components/icons/plus.png'
import axios from 'axios';
import AddExercise from './AddExercise';
import OneExercise from './OneExercise';


const WorkoutModal = ({setClicked, addWorkout, clientId}) => {
    const [editedItems, setEditedItems] = useState([]); 
    const [exercises, setExercises] = useState([]);
    const [showAddExercise, setShowAddExercise] = useState(false);
    const [exerciseId, setExerciseId] = useState('');


    const handleClick = () => {
        setShowAddExercise(!showAddExercise);
    };

    const [modal, setModal] = useState(true);
    const toggleModal = ()=>{
        setModal(!modal)   
    }

    const [workoutData, setWorkoutData] = useState({
        // id: uuidv4(),
        client_id: clientId,
        workout_name: '',
        goal_id: '1',
        difficulty: 'beginner',
        muscle_id: 1
    })


    const createNewWorkout = async () => {
        if (workoutData.workout_name) {
          try {
            const res = await axios.post(`http://localhost:3001/sendNewWorkoutData`, workoutData);
            console.log("Success!");
            // window.location.reload();
            // setShowDiv1(true);
            setClicked(false);
          } catch (err) {
            console.log(err);
          }
        } else {
          alert("The workout needs to have a name.");
        }
      };
    
   

    const handleInputChange = (event)=>{
        const {name, value} = event.target;
        setWorkoutData({
            ...workoutData,
            [name]: value,
        });
    };

    // const validateFields = () => {
    //     const requiredFields = ['workoutName', 'goal', 'difficulty', 'equipment', 'muscleGroup'];
    //     for (const field of requiredFields) {
    //         if (!workoutData[field].trim()) {
    //             return false; // Return false if any required field is empty
    //         }
    //     }
    //     return true; // All required fields are filled out
    // };


    // const handleAddWorkout = () => {
    //     const isValid = validateFields();

    //     if(isValid){
    //         const newWorkout = { ...workoutData }; // Create a copy of workoutData
    //         addWorkout(newWorkout); // Send new workout data to parent component
    //         toggleModal();
    //     }else{
    //         alert("Please fill/select all the required fields. Only the description field is optional.");   
    //     }
    // };

    

    const handleButtonClick = ()=>{
        toggleModal();
        setClicked(false);
    }


  return (
    <>
    {modal && (
         <div>
         <div>
             <div className='overlay2' onClick={handleButtonClick} ></div>
             <div className="myModal">
                 <div className="allComponents">
 
                     <div className="headerDiv">
                         <span className='header'>name:</span>
                     </div>
                     
                     <div className="workoutModal">
                         <div className="workoutElements">
                             <span>WORKOUT :</span><br />
                             <span>Goal:</span><br />
                             <span>DIFFICULTY:</span><br />
                             {/* <span>EQUIPMENT:</span><br /> */}
                             <span>TARGET MUSCLE GROUP:</span><br />
 
                             {/* <span>EXERCISE:</span><br /> */}
 
                             {/* <span>DESCRIPTION:</span> <br /> */}
                         </div>
 
                         <div className="dropdownButtons">
 
                             <input style={{display:"block", marginTop:"15px"}} name="workout_name" value={workoutData.workout_name || ''} onChange={handleInputChange}/>
 
                             <select className="workoutGoal" name="goal_id" value={workoutData.goal_id || ''} onChange={handleInputChange}> 
                                 <option value="1">Gain Muscle</option> 
                                 <option value="2">Lose Weight</option> 
                                 <option value="3">Improve Endurance</option> 
                                 <option value="4">Enhance Flexibility</option> 
                                 <option value="5">Bulk</option> 
                                 <option value="6">Core Strength</option> 
                             </select>
 
                             <select name="difficulty" value={workoutData.difficulty || ""} onChange={handleInputChange}> 
                                 <option value="beginner">Beginner</option> 
                                 <option value="intermediate">Intermediate</option> 
                                 <option value="advanced">Advanced</option> 
                             </select>

                             <select name="muscle_id" value={workoutData.muscle_id || ""} onChange={handleInputChange}> 
                                 <option value="1">Legs</option> 
                                 <option value="2">Core</option> 
                                 <option value="3">Arms</option> 
                                 <option value="4">Chest</option> 
                                 <option value="5">Shoulders</option> 
                                 <option value="6">Full Body</option> 
                                 <option value="7">Cardio</option> 
                                 <option value="8">Flexibility</option> 
                                 <option value="9">Back</option> 
 
                             </select>
 <br />
                         </div>
                     </div>
                 
                     <div className="exercises-parent">
                        <div className="exercises">
                            {exercises.map((exercise) => {
                                return (
                                    // JSX code here for each exercise
                                    <div className="one-exercise">
                                        <OneExercise exerciseDetails={exercise} editedItems={editedItems}/>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
 
 
                     {/* <div>
                         <img
                             src={plusIcon}
                             alt=""
                             className='plus-icon'
                             onClick={handleClick}
                         />
                         {showAddExercise && <AddExercise handleClick={handleClick} setExerciseId={setExerciseId}/>}
                     </div> */}
                     <div className="addButton">
                         <button id='saveBtn' onClick={createNewWorkout}>SAVE CHANGES</button>
                         <button id='deleteBtn' onClick={handleButtonClick}>CANCEL</button>
                     </div>

                
 
 
                 </div>
             </div>
         </div>
     </div>
    )}
        </>
        )
}

export default WorkoutModal