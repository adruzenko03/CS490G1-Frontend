import React from 'react'
import { useState, useEffect } from 'react'
import Stack from 'react-bootstrap/esm/Stack'
import CoachDetails from './CoachDetails'
import './ApprovalRequests.css';
import axios from 'axios';


const ApprovalRequests = () => {
    const [pendingCoaches, setPendingCoaches] = useState([
        
        {
            name: "Dorice Brotherton",
            experience: "11 Years",
            goal: "improve endurance",
            cost:"$65/hour"

        },
        {
            name: "Lena Gentiry",
            experience: "12 Years",
            goal: "gain muscle",
            cost:"$25/hour"
        }
      ]);
      /*
      useEffect(() => {
        const fetchAllRequests = async () => {
          try {
            const res = await axios.get(`http://localhost:3001/getPendingCoaches`);
            console.log(res.data);
            setPendingCoaches(res.data);
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchAllRequests();
      }, []); */
    return (
        <>
            <div className='approvalRequests'>
            <h3>Pending Coach Approvals:</h3>
            {pendingCoaches.map((coach)=>{
              return(
                  <Stack gap={3}>
                      <div className='p-2'><CoachDetails items={coach}/></div>
                  </Stack>
              );  
            })}
    
            </div>
    
        </>
      )
}

export default ApprovalRequests
