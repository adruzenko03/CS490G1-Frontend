import './App.css'
import React, { useEffect, useState } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'

import sendIcon from '../icons/send1.png';

const Chat = ({socket, username, room}) => {

    const [currentMessage, setCurrentMessage] = useState('');
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if(currentMessage){
            const messageData = {
                room: room,
                username: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes() 
            }

            await socket.emit("send_message", messageData);
            setMessageList((list)=>[...list, messageData]);
            setCurrentMessage("");
        }
    }

    useEffect(()=>{
        socket.on("receive_message", (data)=>{
            setMessageList((list)=>[...list, data])
        })
        return () => socket.removeListener('receive_message');
    }, [socket])
    
  return (
    <div className='chat-window'>
        <div className="chat-header">
            <p>Coach Name</p>
        </div>
        <div className="chat-body">
            <ScrollToBottom className='message-container'>
                {messageList.map((messageContent)=>{
                    return <div className='message' id={username === messageContent.username ? "you" : "other"}>
                        <div>
                            <div className='message-content' style={{fontFamily:"Open Sans, sans-serif"}}>
                                <p style={{fontFamily:"Open Sans, sans-serif"}}>{messageContent.message}</p>
                            </div>
                            <div className='message-meta' style={{fontFamily:"Open Sans, sans-serif"}}>
                                <p id='time' style={{fontFamily:"Open Sans, sans-serif"}}>{messageContent.time}</p>
                                <p id='author' style={{fontFamily:"Open Sans, sans-serif"}}>{messageContent.username}</p>
                            </div>
                        </div>
                        </div>
                })}
            </ScrollToBottom>
        </div>
        <div className="chat-footer">
            <input 
                type="text" 
                placeholder='Message'
                value={currentMessage}
                onChange={(event)=>{
                    setCurrentMessage(event.target.value);
                }}
                onKeyPress={(event)=>{event.key === "Enter" && sendMessage()}}
            />
            {/* <button
                onClick={sendMessage}
            >{sendIcon}</button> */}
            <img src={sendIcon} alt="" onClick={sendMessage}/>
        </div>
    </div>
  )
}

export default Chat