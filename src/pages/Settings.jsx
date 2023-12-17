import React from "react";
import SettingsForm from "../Components/Settings/SettingsForm";
export default function Settings() {
    return(
      <div className="page1">
        <h1 style={{ textAlign: "center", marginTop:"10px" }}>Settings</h1>
        <SettingsForm></SettingsForm>
        <div className="form">
        </div>
    </div>
    );
}