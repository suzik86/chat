import React from 'react';

const ChatMessage = ({ name, message, time }) =>
<p>
  <strong className="nickname">{name}</strong> 
  <em className='message-text'>{message}</em>  
  <span className='time'>{new Date(time).toLocaleString()}</span>
</p> 

export default ChatMessage;
  