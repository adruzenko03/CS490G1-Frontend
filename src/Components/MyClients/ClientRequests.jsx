import React from 'react'
import { useState, useEffect } from 'react'
import ClientOneRequest from './ClientOneRequest'
import Stack from 'react-bootstrap/esm/Stack'
import "./ClientRequests.css"
import axios from 'axios';


const ClientRequests = () => {
  const [clientsList, setClientsList] = useState([]);

  const coachId = localStorage.getItem("userId");


  useEffect(() => {
    const fetchAllRequests = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/clientRequestsFetch/${coachId}`);
        console.log(res.data);
        setClientsList(res.data.Data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllRequests();
  }, []); 

  const onClientStatusChange = (clientId, newStatus) => {
    if(newStatus === 'declined'){
      setClientsList(clientsList.filter(client => client.user_id !== clientId));
    }
    else{
      setClientsList(clientsList.map(client => {
        if(client.user_id === clientId) {
          return { ...client, status: newStatus };
        } else {
          return client;
        }
      }));
    }
  };
  


  console.log('clientsList:', clientsList);
  return (
    <>
        <div className='allRequestss'>
            <span className="text-wrapper1">PENDING CLIENT REQUESTS:</span>
            {clientsList.map((client, index)=>{
              return(
                  <Stack gap={3} key={index} className='stack'>
                      <div className='p-2'><ClientOneRequest items={client} onClientStatusChange={onClientStatusChange}/></div>
                  </Stack>
              );  
            })}

        </div>

    </>
  )
}

export default ClientRequests