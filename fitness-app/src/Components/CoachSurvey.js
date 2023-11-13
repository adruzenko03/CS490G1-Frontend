import React, { useState } from 'react';


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
    
      const handleInputChange = (e) => {
        setSurveyData({ ...surveyData, [e.target.name]: e.target.value });
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
    
        try {
          const response = await fetch('https://backend.com/coach-survey', { // correct URL to backend endpoint
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(surveyData),
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
          
          <input type="number" name="experience" placeholder="*EXPERIENCE (IN YEARS)" required />
          <input type="text" name="city" placeholder="*CITY" required />
          <input type="text" name="state" placeholder="*STATE" required />
          <input type="text" name="cost" placeholder="*COST ($AMNT/HR)" required />
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
          <button type="submit">FINISH</button>
        </form>
      </div>
    </div>
  );
}

export default CoachSurvey;
