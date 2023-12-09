import React, {useState, useEffect} from 'react'
import './YourClients.css'
import OneRequest from './ClientOneRequest'
import Stack from 'react-bootstrap/esm/Stack'
import YourClientExpanded from './YourClientExpanded'
import axios from 'axios';

const YourClients = () => {
  const [coachesList, setCoachesList] = useState([]);

  const coachId = 2;


  useEffect(() => {
    const fetchAllRequests = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/acceptedClients/${coachId}`);
        console.log(res.data);
        setCoachesList(res.data.surveyData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllRequests();
  }, []); 

  return (
    <>
        <br />
      <div className='containerr1'>
        <div className='inContainer'>
          <span style={{marginLeft:"12px", color:"white"}}>YOUR CLIENTS</span>
                  {coachesList.map((coach)=>{
                          return(
                              <Stack gap={3}>
                                  <div className='p-2'><YourClientExpanded items={coach}/></div>
                              </Stack>
                          ) 
                  })}
        </div>
        </div>
    </>
  )
}

export default YourClients