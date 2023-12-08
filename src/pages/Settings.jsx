import SettingsForm from "../Components/SettingsForm/SettingsForm";
import React from 'react'
import './styles/Settings.css'

const Settings = () => {
  return (
    <div className="page1">
        <h1 style={{ textAlign: "center", marginTop:"10px" }}>Settings</h1>
        <div className="form">
            <SettingsForm />
        </div>
    </div>
  )
}

export default Settings
