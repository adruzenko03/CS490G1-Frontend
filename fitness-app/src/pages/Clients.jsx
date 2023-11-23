import React from 'react'
import ClientRequests from '../Components/MyClients/ClientRequests'
import YourClients from '../Components/MyClients/YourClients'
import './styles/Clients.css'

const Clients = () => {
  return (
    <>
        <div className="myClient">
            <div className="myClient-txt">
                <h1>My Clients</h1>
            </div>
            <ClientRequests />
            <YourClients />
        </div>
    </>
  )
}

export default Clients