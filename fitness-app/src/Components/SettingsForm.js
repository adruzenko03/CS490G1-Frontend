import React, { useState, useEffect } from "react";

export default function SettingsForm() {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("User in SettingsForm.js: ", user);
    const handleDeleteAccount = () => {
        // Logic to show confirmation modal for account deletion.
    };

    return (
        <div className="form-container">
            <div className="settings-form">
                <div className="form-field">
                    <label>*First Name: </label>
                    <span>{user.firstName}</span>
                </div>
                <div className="form-field">
                    <label>*Last Name: </label>
                    <span>{user.lastName}</span>
                </div>
                <div className="form-field">
                    <label>*Email: </label>
                    <span>{user.email}</span>
                </div>
                <div className="form-field">
                    <label>*PASSWORD: </label>
                    <span>{user.password}</span>
                </div>
                <div className="form-field">
                    <label>Phone: </label>
                    <span>{user.phoneNumber}</span>
                </div>
                <div className="form-field">
                    <label>Role: </label>
                    <span>{user.role}</span>
                </div>
                
                <button onClick={handleDeleteAccount}>Delete Account</button>
            </div>
        </div>
    );
}
