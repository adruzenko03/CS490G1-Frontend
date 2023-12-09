import React from 'react'
import { useState, useEffect } from 'react'
import ClientOneRequest from './ClientOneRequest'
import Stack from 'react-bootstrap/esm/Stack'
import "./ClientRequests.css"
import axios from 'axios';


const ClientRequests = () => {
  const [clientsList, setClientsList] = useState([]);

  const coachId = 2;


  useEffect(() => {
    const fetchAllRequests = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/clientRequestsFetch/${coachId}`);
        console.log(res.data);
        setClientsList(res.data.surveyData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllRequests();
  }, []); 


  // const lst = ['Yoga', '5 Years', 'Ridgefield', '$59/month'];

  console.log('clientsList:', clientsList);
  return (
    <>
        <div className='allRequestss'>
            <span className="text-wrapper1">PENDING CLIENT REQUESTS:</span>
            {clientsList.map((client, index)=>{
              return(
                  <Stack gap={3} key={index} className='stack'>
                      <div className='p-2'><ClientOneRequest items={client}/></div>
                  </Stack>
              );  
            })}

        </div>

    </>
  )
}

export default ClientRequests

// {
//   name: "JOSH DUMONT",
//   goals: "Gain Muscle, Lose Weight",
//   fitnessLevel: "Beginner",
//   diet: "Vegan",
//   weeklyExercise: "Pushups"
// },
// {
//   name: "MICHAEL SCOTT",
//   goals: "Learn boxing",
//   fitnessLevel: "Intermediate",
//   diet: "Meat Based",
//   weeklyExercise: "Pullups"
// },
// {
//   name: "PAM WESLEY",
//   goals: "Calinsthetics",
//   fitnessLevel: "Beginner",
//   diet: "Vegan",
//   weeklyExercise: "Running"
// },