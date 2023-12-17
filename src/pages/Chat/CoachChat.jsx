import './CoachChat.css'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ScrollToBottom from 'react-scroll-to-bottom'
import axios from 'axios';

import sendIcon from '../../Components/icons/send1.png';

const CoachChat = ({userId}) => {
    const [currentMessage, setCurrentMessage] = useState('');
    const [messageList, setMessageList] = useState([]);
    const [chats, setChats] = useState([]);
    const [users, setUsers] = useState('');
    const [selectedChatId, setSelectedChatId] = useState(null);
    const [selectedChatMessages, setSelectedChatMessages] = useState(['']);
    const [sideName, setSideName] = useState([]);
    const [selectedClientId, setSelectedClientId] = useState(null);
    const navigate = useNavigate();

    
    // THIS SHOULD BE RETRIEVED ON LOGIN //
    const coachId = userId; 
    // ********************************** //

    const [newMessage, setNewMessage] = useState({
        message: "",
        chatId: "", //should be retrieved based on who the coach is and which client chat he clicked on
        sender_id: coachId, 
        receiver_id: "",
        last_update: new Date().toISOString().slice(0, 19).replace('T', ' ')
    })

    const isMessageReadyToSend = () => {
        const { message, chatId, sender_id, receiver_id } = newMessage;
        return message && chatId && sender_id && receiver_id;
      };

    const handleChange = (e) => {
        setNewMessage((prev)=>({...prev, [e.target.name]:e.target.value}))
        setCurrentMessage(e.target.value);
    }

    const updateChatId = (newChatId) => {
        setNewMessage((prev) => ({...prev, chatId: newChatId}));
    };
    const updateReceiverId = (newReceiverId) => {
        setNewMessage((prev) => ({...prev, receiver_id: newReceiverId}));
    };


    const handleNewMessage = async(e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:3001/newMessage", newMessage);
            setSelectedChatMessages([...selectedChatMessages, newMessage])
            setCurrentMessage('');
        }catch(err){
            console.log(err); 
        }
    }

    /* RETRIEVE ALL MESSAGES FROM DATABASE */
    useEffect(()=>{
        const FetchAllMessages = async()=>{
            try{
                const res = await axios.get(`http://localhost:3001/messages/chat/${coachId}`)
                console.log(res.data.surveyData);
                setMessageList(res.data.surveyData);
            }catch(err){
                console.log(err);
            }
        }
        FetchAllMessages();
    },[messageList])

    useEffect(()=>{
        const FetchChats = async()=>{
            try{
                const res = await axios.get(`http://localhost:3001/messages/coach/${coachId}`)
                setChats(res.data.surveyData);
                // console.log('this one' + chats);
            }catch(err){
                console.log(err);
            }
        }
        FetchChats();
    }, [chats]);

    useEffect(()=>{
        const FetchUsers = async()=>{
            try{
                const res = await axios.get(`http://localhost:3001/users/${coachId}`)
                setUsers(res.data.surveyData);
                console.log(users);
            }catch(err){
                console.log(err);
            }
        }
        FetchUsers();
    }, [users]);

    
    useEffect(() => {
        const fetchAllSideNames = async () => {
            try {
              const names = [];
              for (const chat of chats) {
                updateChatId(chat.coach_client_id);
                const res = await axios.get(`http://localhost:3001/users1/${chat.coach_client_id}/${coachId}`);
                if (res.data.surveyData[0] && res.data.surveyData[0].first_name && res.data.surveyData[0].last_name) {
                  const fullName = `${res.data.surveyData[0].first_name} ${res.data.surveyData[0].last_name}`;
                  names.push(fullName);
                } else {
                  names.push("Unknown User");
                }
              }
              setSideName(names);
            } catch (err) {
              console.log(err);
            }
          };
        
          if (chats.length > 0) {
            fetchAllSideNames(); // Trigger the function when the component mounts
          }
    }, [chats, users]);
    
    const handleChatClick = async (chatId, receiverId) => {
        setSelectedChatId(chatId);
        updateReceiverId(receiverId);
        setSelectedClientId(chatId);
        
        try {
            const res = await axios.get(`http://localhost:3001/messages1/chat/${chatId}`);
            setSelectedChatMessages(res.data.surveyData);
            updateChatId(chatId);

        //   console.log('data' + selectedChatMessages);
        } catch (err) {
          console.log(err);
        }
      };


      const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          handleNewMessage(event);
        }
      };

    /* DISPLAY THE RECEIVED MESSAGE */
   



    // console.log(users.first_name);
    
  return (
    <div className='chat-window'>
            {users.first_name && 
                <div className="chat-header">
                    <p>{users.first_name}</p>
                </div>
            }

        <div className="chat-body">
            <div className="allClients">
                <span className='active-chats'>Active Chats</span>
                {chats.map((chat, index)=>{
                    console.log(chat.coach_client_id + "-------" + chat.receiver_id); // Log values
                    return( 
                        <div 
                            key={chat.coach_client_id}
                            onClick={()=>{handleChatClick(chat.coach_client_id, ((chat.receiver_id === coachId) ? chat.sender_id : chat.receiver_id))}}
                            // className='one-client'
                            className={`one-client ${selectedClientId === chat.coach_client_id ? 'selected' : ''}`} // Apply 'selected' class based on state

                        >
                            <span>
                                {sideName[index]}
                            </span>
                        </div>
                    )
                })}
            </div>
            <ScrollToBottom className='message-container'>
                {Array.isArray(selectedChatMessages) && selectedChatMessages.map((messageContent)=>(
                    <div className='message' id={coachId === messageContent.receiver_id ? "you" : "other"} key={messageContent.message_id}>
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
                ))}
            </ScrollToBottom>
        </div>
        <div className="chat-footer">
            <input 
                type="text" 
                placeholder='Message'
                value={currentMessage}
                name='message'
                // onChange={(event)=>{
                //     setCurrentMessage(event.target.value);
                // }}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
            />
            <img src={sendIcon} alt="" onClick={handleNewMessage}/>
        </div>
    </div>
  )
}

export default CoachChat