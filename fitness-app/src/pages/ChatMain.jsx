import React from 'react'
import './styles/ChatMain.css'
import App from '../Components/Chat/App'

const ChatMain = () => {
  return (
    <div className='my-chat'>
        <h1 className='chat-title'>Chat Box</h1>
        <App />
    </div>
  )
}

export default ChatMain