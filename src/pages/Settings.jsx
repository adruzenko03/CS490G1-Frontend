import React from "react";
import SettingsForm from "../Components/Settings/SettingsForm";
export default function Settings() {
    return(
      <div className="settings-page">
        <div className="header">Settings</div>
        <SettingsForm></SettingsForm>
      </div>
    );
}