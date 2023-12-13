import React, { useState } from 'react'
import ExerciseBank from './ExerciseBank'
import './NewExercise.css'
import {v4 as uuidv4} from 'uuid';
import Select from 'react-select';


const NewExercise = ({setClicked, addExercise}) => {

    const [exerciseData, setExerciseData] = useState({
        id: uuidv4(),
        exerciseName: '',
        exerciseEquipment: [],
        steps: ''
    })
    const equipmentOptions = [
        { value: 'barbell', label: 'Barbell' },
        { value: 'dumbell', label: 'Dumbell' },
        { value: 'bodyweight', label: 'Bodyweight' },
        { value: 'machine', label: 'Machine' },
        { value: 'kettlebells', label: 'Kettlebells' },
        { value: 'cables', label: 'Cables' },
        { value: 'band', label: 'Band' },
      ];

    const handleInputChange = (event)=>{
        const {name, value} = event.target;
        setExerciseData({
            ...exerciseData,
            [name]: value,
        });
    };
    const handleEquipmentChange = (event) => {
        const vals = event.map((option) => option.value);
        exerciseData.exerciseEquipment = event;
        setExerciseData({ ...exerciseData, exerciseEquipment: vals });
      };

    const validateFields = () => {
        const requiredFields = ['exerciseName', 'steps'];
        for (const field of requiredFields) {
            if (!exerciseData[field].trim()) {
                return false; 
            }
        }
        return true; 
    };


    const handleAddExercise = () => {
        const isValid = validateFields();

        if(isValid){
            const newExercise = { ...exerciseData }; 
            addExercise(newExercise); // Send new workout data to parent component
            toggleModal();
        }else{
            alert("Please fill all fields.");   
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
    const dropdownStyle = {
        control: (provided) => ({
          ...provided,
          marginTop: '10px',
          border: '1px solid black', // Set border style
          borderRadius: '10px', // Set border radius
        }),
        option: (provided) => ({
            ...provided,
            color: 'black', // Set text color
          }),
      };

  return (
    <>
    {modal && (
        <div>
            <div className='overlay2' onClick={handleButtonClick} ></div>
            <div className="myModal">
                <div className="allComponents">

                    <div className="headerDiv">
                        <span className='header'>Add Exercise</span>
                    </div>
                    
                    <div className="addExerciseModal">
                        <div className="exerciseElements">
                            <span>Exercise Name:</span><br />
                            <span>Equipment:</span><br />
                            <span>Steps:</span><br />
                        </div>

                        <div className="dropdownButtons">

                            <input style={{display:"block", marginTop:"15px"}} name='exerciseName' value={exerciseData.exerciseName} onChange={handleInputChange}/>
                            <Select
                                styles={dropdownStyle}
                                // className="multi-select"
                                options={equipmentOptions}
                                isMulti
                                value={equipmentOptions.filter(option => exerciseData.exerciseEquipment.includes(option.value))}
                                onChange={handleEquipmentChange}
                                
                            />
                            <textarea 
                                style={{marginTop:"20px", borderRadius:"10px"}} 
                                rows="4" cols="50" 
                                className="customTextarea" 
                                placeholder="Enter steps here..."
                                name='steps'
                                value={exerciseData.steps}
                                onChange={handleInputChange}
                            ></textarea>

                        </div>
                    </div>

                    <div className="addButton">
                        <button onClick={handleAddExercise}> Add Exercise</button>
                    </div>
                </div>
            </div>
        </div>
    )}
        </>
        )
}

export default NewExercise