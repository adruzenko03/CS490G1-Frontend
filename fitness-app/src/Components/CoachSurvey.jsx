import React, { useState } from 'react';
import './styles/survey.css';

function CoachSurvey({ onClose }) {
    const [surveyData, setSurveyData] = useState({
        experience: '',
        city: '',
        state: '',
        cost: '',
        goals: [],
      });
    
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setSurveyData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

      const handleGoalsChange = (e) => {
        const { value, checked } = e.target;
        setSurveyData({
          ...surveyData,
          goals: checked
            ? [...surveyData.goals, value] 
            : surveyData.goals.filter((goal) => goal !== value), 
        });
      };
    
      const handleSurveySubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        const userID = localStorage.getItem('userId');
        const role = localStorage.getItem('role');
        const surveyDataWithUserId = {userID,...surveyData};
        //Post this survey on localStorage to display ing settings
        try {
          const response = await fetch('http://localhost:3001/coach-survey', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(surveyDataWithUserId),
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          onClose(); 
        } catch (error) {
          setError('Failed to submit survey. Please try again later.');
        } finally {
          setIsLoading(false);
        }
      };

  return (
    <div className="survey-modal-backdrop">
      <div className="survey-modal-content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSurveySubmit}>
          
          <input type="number" name="experience" placeholder="*EXPERIENCE (IN YEARS)" required onChange={handleChange}/>
          <input type="text" name="city" placeholder="*CITY" required onChange={handleChange}/>
          <input type="text" name="state" placeholder="*STATE" required onChange={handleChange}/>
          <input type="text" name="cost" placeholder="*COST ($AMNT/HR)" required onChange={handleChange}/>
          <label>*GOALS</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                value="LOSE_WEIGHT"
                checked={surveyData.goals.includes('LOSE_WEIGHT')}
                onChange={handleGoalsChange}
              />
              Lose Weight
            </label>
            <label>
              <input
                type="checkbox"
                value="GAIN_MUSCLE"
                checked={surveyData.goals.includes('GAIN_MUSCLE')}
                onChange={handleGoalsChange}
              />
              Gain Muscle
            </label>
            <label>
              <input
                type="checkbox"
                value="IMPROVE_ENDURANCE"
                checked={surveyData.goals.includes('IMPROVE_ENDURANCE')}
                onChange={handleGoalsChange}
              />
              Improve Endurance
            </label>
            <label>
              <input
                type="checkbox"
                value="ENHANCE_FLEXIBILITY"
                checked={surveyData.goals.includes('ENHANCE_FLEXIBILITY')}
                onChange={handleGoalsChange}
              />
              Enhance Flexibility
            </label>
          </div>
          {error && <div className="alert aler-danger">{error}</div>}
          <button type="submit" className="finish-button" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'FINISH'}
        </button>
        </form>
      </div>
    </div>
  );
}

export default CoachSurvey;
