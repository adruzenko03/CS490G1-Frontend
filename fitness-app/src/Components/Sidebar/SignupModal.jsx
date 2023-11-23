import React, { useState } from "react";
import CoachSurvey from "../Surveys/CoachSurvey";
import ClientSurvey from "../Surveys/ClientSurvey";
import "../styles/SignupModal.css";

function SignupModal({ isVisible, onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    role: "CLIENT", // Default to CLIENT
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showCoachSurvey, setShowCoachSurvey] = useState(false);
  const [showClientSurvey, setShowClientSurvey] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3001/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Account created:", data);
        if (formData.role === "COACH") {
          setShowCoachSurvey(true);
        } else if (formData.role === "CLIENT") {
          setShowClientSurvey(true);
        }
      } else {
        setError(
          data.message || "An error occurred while creating the account."
        );
      }
    } catch (error) {
      setError("Failed to connect to the server.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSurveyClose = () => {
    setShowCoachSurvey(false);
    setShowClientSurvey(false);
    onClose();
  };

  if (!isVisible && !showCoachSurvey && !showClientSurvey) return null;

  return (
    <>
      {showCoachSurvey && <CoachSurvey onClose={handleSurveyClose} />}
      {showClientSurvey && <ClientSurvey onClose={handleSurveyClose} />}
      {!showCoachSurvey && !showClientSurvey && (
        <div className="signup-modal-backdrop" onClick={onClose}>
          <div
            className="signup-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="*FIRST NAME"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="*LAST NAME"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="email"
                placeholder="*EMAIL"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="password"
                placeholder="*PASSWORD"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="*PHONE NUMBER"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="streetAddress"
                placeholder="*STREET ADDRESS"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                placeholder="*CITY"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="state"
                placeholder="*STATE"
                required
                onChange={handleChange}
              />
              <input
                type="text"
                name="zipCode"
                placeholder="*ZIP CODE"
                required
                onChange={handleChange}
              />

              <select name="role" required onChange={handleChange}>
                <option value="CLIENT">Client</option>
                <option value="COACH">Coach</option>
              </select>

              <button type="submit" disabled={isLoading}>
                {isLoading ? "Registering..." : "REGISTER"}
              </button>
              {error && <div className="error-message">{error}</div>}
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default SignupModal;
