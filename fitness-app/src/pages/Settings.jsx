import React from "react";
import SettingsForm from "../Components/SettingsForm";
export default function Settings() {
    return(
      <div className="settings-page">
        <div className="header">Settings</div>
        <SettingsForm></SettingsForm>
      </div>
    );
}