import React, { useState } from 'react'
import './WorkoutModal.css'

const WorkoutModal = ({setClicked}) => {

    const [modal, setModal] = useState(true);
    const toggleModal = ()=>{
        setModal(!modal)   
    }

    const handleButtonClick = ()=>{
        toggleModal();
        setClicked(false);
    }
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

                            <input style={{display:"block", marginTop:"15px"}}/>

                            <select className="workoutGoal"> 
                                <option value="loseWeight">Lose Weight</option> 
                                <option value="gainMuscle">Gain Muscle</option> 
                                <option value="bulk">Bulk</option> 
                                <option value="coreStrength">Core Strength</option> 
                            </select>

                            <select name="workoutDifficulty"> 
                                <option value="beginner">Begginer</option> 
                                <option value="intermediate">Intermediate</option> 
                                <option value="advanced">Advanced</option> 
                                <option value="pro">Pro</option> 
                            </select>

                            <select name="equipment"> 
                                <option value="dumbells">Dumbbells</option> 
                                <option value="smith">Smith Machine</option> 
                                <option value="bench">Bench</option> 
                                <option value="stairMaster">Stair Master</option> 
                            </select>

                            <select name="muscleGroup"> 
                                <option value="shoulderBack">Shoulders and Back</option> 
                                <option value="chestArm">Chest and Arms</option> 
                                <option value="abdominals">Abdominals and Core</option> 
                                <option value="legsCalves">Legs and Calves</option> 
                            </select>

                            {/* <input style={{marginTop:"20px"}} type="text" /> */}
                            <textarea style={{marginTop:"20px", borderRadius:"10px"}} rows="4" cols="50" className="customTextarea" placeholder="Enter description here..."></textarea>

                        </div>
                    </div>

                    <div className="addButton">
                        <button>ADD WORKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    )}
        </>
        )
}

export default WorkoutModal