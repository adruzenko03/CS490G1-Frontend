import React from 'react'
import { useState, useEffect } from 'react'
import ClientOneRequest from './ClientOneRequest'
import Stack from 'react-bootstrap/esm/Stack'
import "./ClientRequests.css"
import axios from 'axios';


const ClientRequests = ({userId}) => {
  const [clientsList, setClientsList] = useState([]);

  const coachId = userId;


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
  }, [clientsList]); 


  // const lst = ['Yoga', '5 Years', 'Ridgefield', '$59/month'];

  console.log('clientsList:', clientsList);
  return (
    <>
        <div className='allRequestss'>
            <span className="text-wrapper1">PENDING CLIENT REQUESTS:</span>
                {clientsList.length>0 ? (
                    clientsList.map((client, index) => (
                      <Stack gap={3} key={index} className='stack'>
                        <div className='p-0'><ClientOneRequest items={client}/></div>
                      </Stack>
                  ))
                  ) : (
                    <h1 style={{padding:"20px", textAlign:"center"}}>You currently have no requests.</h1>
                    )
                }
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