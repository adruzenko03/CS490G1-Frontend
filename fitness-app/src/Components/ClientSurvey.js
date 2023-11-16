import React, { useState } from "react";
import './survey.css'

function ClientSurvey({ onClose }){
    const [surveyData, setSurveyData] = useState({
        currentFitnessLevel: '',
        currentExerciseSchedule: '',
        currentDiet: '',
        fitnessGoal: '',
      });
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState('');

      const handleChange = (e) => {
        const { name, value } = e.target;
        setSurveyData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
      
        try {
          const response = await fetch('https://localhost:3001/client-survey', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(surveyData),
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          // Process the response if needed
          const data = await response.json();
          console.log(data);

          onClose();
        } catch (error) {
          setError('A network error occurred. Please try again later.');
        } finally {
          setIsLoading(false);
        }
      };
    
    return (
    <div className="client-survey-modal">
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>*CURRENT FITNESS LEVEL:</label>
            <select name="currentFitnessLevel" value={surveyData.currentFitnessLevel} onChange={handleChange} required>
            <option value="">Select level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            </select>
        </div>
        
        <div className="form-group">
            <label>*CURRENT EXERCISE SCHEDULE:</label>
            <select name="currentExerciseSchedule" value={surveyData.currentExerciseSchedule} onChange={handleChange} required>
            <option value="">Select schedule</option>
            <option value="0-2">0-2 hours/week</option>
            <option value="3-4">3-4 hours/week</option>
            <option value="5+">5+ hours/week</option>
            </select>
        </div>
    
        <div className="form-group">
            <label>*CURRENT DIET:</label>
            <select name="currentDiet" value={surveyData.currentDiet} onChange={handleChange} required>
            <option value="">Select diet</option>
            <option value="2000">2000 CAL/week</option>
            <option value="2500">2500 CAL/week</option>
            <option value="3000">3000 CAL/week</option>
            </select>
        </div>
    
        <div className="form-group">
            <label>*FITNESS GOAL:</label>
            <select name="fitnessGoal" value={surveyData.fitnessGoal} onChange={handleChange} required>
            <option value="">Select goal</option>
            <option value="lose-weight">Lose Weight</option>
            <option value="gain-muscle">Gain Muscle</option>
            <option value="improve-endurance">Improve Endurance</option>
            </select>
        </div>
        {error && <div className="alert aler-danger">{error}</div>}
        <button type="submit" className="finish-button" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'FINISH'}
        </button>
        </form>
    </div>
    );
}
export default ClientSurvey;