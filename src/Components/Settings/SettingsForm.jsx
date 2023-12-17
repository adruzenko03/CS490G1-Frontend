import React, { useState, useEffect } from "react";

export default function SettingsForm() {
    const user = JSON.parse(localStorage.getItem("user"));
    const userID = user.user_id || localStorage.getItem('userId');
    const [surveyData, setSurveyData] = useState({});
    console.log("userID in SettingsForm.js ", userID);
    console.log("User in SettingsForm.js: ", user);

    useEffect(() => {
        const fetchSurveyData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/surveyfetch/${userID}`);
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
        <div className="form-container">
            <div className="setting-form">
                <div className="form-field">
                    <label>*First Name: 
                        <span>{ user.first_name }</span> 
                    </label>
                    
                </div>
                <div className="form-field">
                    <label>*Last Name: 
                    <span>{user.last_name}</span>
                    </label>
                   
                </div>
                <div className="form-field">
                    <label>*Email: 
                    <span>{user.email}</span>
                    </label>
                </div>
                <div className="form-field">
                    <label>*PASSWORD: 
                    <span>{user.password}</span>
                    </label>
                </div>
                <div className="form-field">
                    <label>Phone: 
                    <span>{user.phone_number}</span>
                    </label>
                </div>
                <div className="form-field">
                    <label>Role:
                    <span>{user.role}</span>
                    </label>
                </div>
                <div className="form-field">
                    <label>Fitness Level: 
                    <span>{surveyData.fitness_level}</span>
                    </label>
                </div>
                <div className="form-field">
                    <label>Diet Level: 
                    <span>{surveyData.diet}</span>
                    </label>
                </div>
                <div className="form-field">
                    <label>Weekly Exercise: 
                    <span>{surveyData.weekly_exercise}</span>
                    </label>
                </div>
                <div className="form-field">
                    <label>Goal: 
                        <span>{surveyData.goal}</span>
                    </label>
                    
                </div>
                <button onClick={handleDeleteAccount}>Delete Account</button>
            </div>
        </div>
    );
}