import React, { useState } from 'react'
import './WorkoutModal.css'
import ClWorkoutsPage from './ClWorkoutsPage';

const WorkoutModal = ({setClicked, addWorkout}) => {

    const [workoutData, setWorkoutData] = useState({
        workoutName: '',
        goal: '',
        difficulty: '',
        equipment: '',
        muscleGroup: '',
        description: ''
    })


    const handleInputChange = (event)=>{
        const {name, value} = event.target;
        setWorkoutData({
            ...workoutData,
            [name]: value,
        });
    };

    const validateFields = () => {
        const requiredFields = ['workoutName', 'goal', 'difficulty', 'equipment', 'muscleGroup'];
        for (const field of requiredFields) {
            if (!workoutData[field].trim()) {
                return false; // Return false if any required field is empty
            }
        }
        return true; // All required fields are filled out
    };


    const handleAddWorkout = () => {
        const isValid = validateFields();

        if(isValid){
            const newWorkout = { ...workoutData }; // Create a copy of workoutData
            addWorkout(newWorkout); // Send new workout data to parent component
            toggleModal();
        }else{
            alert("Please fill/select all the required fields. Only the description field is optional.");   
        }
    };

    const [modal, setModal] = useState(true);
    const toggleModal = ()=>{
        setModal(!modal)   
    }

    const handleButtonClick = ()=>{
        toggleModal();
        setClicked(false);
    }

    // const [createClicked, setCreateClicked] = useState(false);
    // const toggleCreateWorkout = ()=>{
    //     setCreateClicked(true);
    // }

  return (
    <>
    {modal && (
        <div>
            <div className='overlay2' onClick={handleButtonClick} ></div>
            <div className="myModal">
                <div className="allComponents">

                    <div className="headerDiv">
                        <span className='header'>CREATE CUSTOM WORKOUT</span>
                    </div>
                    
                    <div className="workoutModal">
                        <div className="workoutElements">
                            <span>WORKOUT NAME:</span><br />
                            <span>Goal:</span><br />
                            <span>DIFFICULTY:</span><br />
                            <span>EQUIPMENT:</span><br />
                            <span>TARGET MUSCLE GROUP:</span><br />
                            <span>DESCRIPTION:</span> <br />
                        </div>

                        <div className="dropdownButtons">

                            <input style={{display:"block", marginTop:"15px"}} name='workoutName' value={workoutData.workoutName} onChange={handleInputChange}/>

                            <select className="workoutGoal" name="goal" value={workoutData.goal} onChange={handleInputChange}> 
                                <option value="loseWeight">Lose Weight</option> 
                                <option value="gainMuscle">Gain Muscle</option> 
                                <option value="bulk">Bulk</option> 
                                <option value="coreStrength">Core Strength</option> 
                            </select>

                            <select name="difficulty" value={workoutData.difficulty} onChange={handleInputChange}> 
                                <option value="beginner">Begginer</option> 
                                <option value="intermediate">Intermediate</option> 
                                <option value="advanced">Advanced</option> 
                                <option value="pro">Pro</option> 
                            </select>

                            <select name="equipment" value={workoutData.equipment} onChange={handleInputChange}> 
                                <option value="dumbells">Dumbbells</option> 
                                <option value="smith">Smith Machine</option> 
                                <option value="bench">Bench</option> 
                                <option value="stairMaster">Stair Master</option> 
                            </select>

                            <select name="muscleGroup" value={workoutData.muscleGroup} onChange={handleInputChange}> 
                                <option value="shoulderBack">Shoulders and Back</option> 
                                <option value="chestArm">Chest and Arms</option> 
                                <option value="abdominals">Abdominals and Core</option> 
                                <option value="legsCalves">Legs and Calves</option> 
                            </select>

                            {/* <input style={{marginTop:"20px"}} type="text" /> */}
                            <textarea 
                                style={{marginTop:"20px", borderRadius:"10px"}} 
                                rows="4" cols="50" 
                                className="customTextarea" 
                                placeholder="Enter description here..."
                                name='description'
                                value={workoutData.description}
                                onChange={handleInputChange}
                            ></textarea>

                        </div>
                    </div>

                    <div className="addButton">
                        <button 
                            onClick={handleAddWorkout}
                        >
                            ADD WORKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    )}
        </>
        )
}

export default WorkoutModal