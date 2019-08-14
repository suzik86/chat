import React, { Component } from 'react';
import ChatMessage from './ChatMessage';
import uniqid from 'uniqid';

class ChatMessageList extends Component {
  render() {
    const { messages } = this.props;
    
    return (
      <section className="messages-block">
        {messages.map(message =>
          <ChatMessage
            key={uniqid()}
            message={message.message}
            name={message.from}
            time={message.time}
          />,
        )}     
      </section>
    );
  }
}

export default ChatMessageList;