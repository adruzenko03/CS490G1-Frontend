import React, { useState, useEffect } from "react";
import './SettingsForm.css'
import Form from 'react-bootstrap/Form';

export default function SettingsForm() {
    const user = JSON.parse(localStorage.getItem("user"));
    const userID = user.user_id || localStorage.getItem('userId');
    const [surveyData, setSurveyData] = useState({});
    console.log("userID in SettingsForm.js ", userID);
    console.log("User in SettingsForm.js: ", user);

    useEffect(() => {
        const fetchSurveyData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_HOST}/surveyfetch/${userID}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log("Data from DB: ",data.surveyData);
                setSurveyData(data.surveyData[0]);
            } catch (error) {
                console.error('Error fetching survey data:', error);
            }
        };

        if (userID) {
            fetchSurveyData();
        }
    }, [userID]);

    const handleDeleteAccount = () => {
        // Logic to show confirmation modal for account deletion.
    };

    return (
        <div className="allContent">
        <div className="form-container">
            <div className="upperHalf">
                <div className="first-col">
                    <div className="form-field">
                        <label>*First Name: 
                            <span><input type="text" placeholder="first name"/></span> 
                        </label>
                        
                    </div>
                    <div className="form-field">
                        <label>*Email: 
                        <span><input type="text" placeholder="email"/></span> 
                        </label>
                    </div>
                    <div className="form-field">
                        <label>Phone: 
                        <span><input type="text" placeholder="phone number"/></span> 
                        </label>
                    </div>
                    <hr style={{ width: "190%", color: "black", height: "10px", border: "none", borderBottom: "3px solid white" }} />

                    
                    <div className="form-field">
                        <label>Fitness Level: </label>
                        <Form.Select aria-label="Default select example" id="select">
                            <option>Fitness Level</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                    <div className="form-field">
                        <label>Weekly Exercise: </label>
                        <Form.Select aria-label="Default select example" id="select">
                            <option>Weekly Exercise</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                </div>
                <div className="second-col">
                <div className="form-field">
                    <label>*Last Name: 
                    <span><input type="text" placeholder="last name"/></span> 
                    </label>
                </div>
                <div className="form-field">
                    <label>*PASSWORD: 
                    <span><input type="text" placeholder="password"/></span> 
                    </label>
                </div>
                <div className="form-field">
                    <label>Role:
                    <span><input type="text" placeholder="role"/></span> 
                    </label>
                </div>
                
                <hr style={{ width: "160%", color: "black", height: "10px", border: "none", borderBottom: "3px solid white" }} />

                <div className="form-field">
                    <label>Diet Level: </label>
                    <Form.Select aria-label="Default select example" id="select">
                        <option>Diet</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </div>
                
                <div className="form-field">
                    <label>Goal: </label>
                    <Form.Select aria-label="Default select example" id="select">
                        <option>Goal</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </div>
                </div>
            </div>

            <div className="allButtons">
                <button id="button1" onClick={handleDeleteAccount}>SAVE</button>
                <button id="button2" onClick={handleDeleteAccount}>DELETE</button>
            </div>  
        </div>
    </div>
    );
}