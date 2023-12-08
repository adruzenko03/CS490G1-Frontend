import React from 'react'
import { useState } from 'react';
import './EditWorkoutModal.css'

const EditWorkoutModal = ({setClicked1, items, updateWorkout, deleteWorkout}) => {

    const [editedItems, setEditedItems] = useState(items); // Local state to handle changes

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedItems({
        ...editedItems,
        [name]: value,
        });
    };

    const handleSaveChanges = () => {
        // Pass the updated data to the parent component
        updateWorkout(editedItems);
        setClicked1(false);
      };
    

    const [modal, setModal] = useState(true);
    const toggleModal = ()=>{
        setModal(!modal)   
    }
    const handleButtonClick = ()=>{
        toggleModal();
        setClicked1(false);
    }

    const handleDelete = (id) =>{
        deleteWorkout(id);
        setClicked1(false);
        // alert('hey ther' + id);
    }

   

  return (
    <div>
        <div>
            <div className='overlay2' onClick={handleButtonClick} ></div>
            <div className="myModal">
                <div className="allComponents">

                    <div className="headerDiv">
                        <span className='header'>EDIT WORKOUT</span>
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

                            <input style={{display:"block", marginTop:"15px"}} name="workoutName" value={editedItems.workoutName} onChange={handleInputChange}/>

                            <select className="workoutGoal" name="goal" value={editedItems.goal} onChange={handleInputChange}> 
                                <option value="Lose Weight">Lose Weight</option> 
                                <option value="Gain Muscle">Gain Muscle</option> 
                                <option value="Bulk">Bulk</option> 
                                <option value="Core Strength">Core Strength</option> 
                            </select>

                            <select name="difficulty" value={editedItems.difficulty} onChange={handleInputChange}> 
                                <option value="Beginner">Beginner</option> 
                                <option value="Intermediate">Intermediate</option> 
                                <option value="Advanced">Advanced</option> 
                                <option value="Pro">Pro</option> 
                            </select>

                            <select name="equipment" value={editedItems.equipment} onChange={handleInputChange}> 
                                <option value="Dumbbells">Dumbbells</option> 
                                <option value="Smith">Smith Machine</option> 
                                <option value="Bench">Bench</option> 
                                <option value="Stair Master">Stair Master</option> 
                            </select>

                            <select name="muscleGroup" value={editedItems.muscleGroup} onChange={handleInputChange}> 
                                <option value="Shoulder and Back">Shoulders and Back</option> 
                                <option value="Chest and Arms">Chest and Arms</option> 
                                <option value="Abdominals and Core">Abdominals and Core</option> 
                                <option value="Legs and Calves">Legs and Calves</option> 
                            </select>

                            {/* <input style={{marginTop:"20px"}} type="text" /> */}
                            <textarea 
                                style={{marginTop:"20px", borderRadius:"10px"}} 
                                rows="4" cols="50" 
                                className="customTextarea" 
                                placeholder="Enter description here..."
                                name="description"
                                value={editedItems.description}
                                onChange={handleInputChange}
                            ></textarea>

                        </div>
                    </div>

                    <div className="addButton">
                        <button id='saveBtn' onClick={handleSaveChanges}>SAVE CHANGES</button>
                        <button id='deleteBtn' onClick={()=>handleDelete(items.id)}>DELETE WORKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditWorkoutModal