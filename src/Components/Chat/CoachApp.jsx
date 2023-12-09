import { useState, useEffect } from 'react';
import './CoachApp.css';
import io from 'socket.io-client'
import CoachChat from './CoachChat';
import {Link} from 'react-router-dom';
import axios from 'axios';

// const socket = io.connect("http://localhost:3001");

function CoachApp() {

  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [showChat, setShowChat] = useState(false);

  const data = {
    room: room,
    username: username
  }

  // const joinRoom = ()=>{
  //   if(username !== "" && room !== ""){
  //     socket.emit("join_room", room);
  //     setShowChat(true);
  //   }
  // }

  return (
    <div className="App">
      {!showChat ? (
        <div className='joinChatContainer'>
        <h3>Join Chat</h3>
        <input 
          type="text" 
          placeholder='Username'
          onChange={(event)=>{
            setUsername(event.target.value);
          }}
        />
        <br />
        <input 
          type="text" 
          placeholder='Room ID'
          onChange={(event)=>{
            setRoom(event.target.value);
          }}
        />
        <button
          // onClick={joinRoom}
        >
          JOIN</button>
        </div>
      ):(
        // <CoachChat socket={socket} username={username} room={room}/>
        <span>dfs</span>
      )}
    </div>
  );
}

export default CoachApp;
