import React, { Component } from 'react';
import ChatInput from './ChatInput';
import ChatMessageList from './ChatMessageList';
import LogOutButton from './utils/LogOutButton'

const URL = 'ws://st-chat.shas.tel';

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      messages: [],     
    };
  } 
  
  componentDidMount() {
    this.initConnection();
  }

  initConnection() {
    this.ws = new WebSocket(URL);
    this.ws.onopen = () => {
      console.log('connected'); 
      this.setState(state => ({ name: localStorage.getItem('nickname') }))         
    }

    this.ws.onmessage = event => {
      const message = JSON.parse(event.data);
      this.addMessages(message);
    }

    this.ws.onclose = (event) => {
      console.log('disconnected')
      // automatically try to reconnect on connection loss
      this.initConnection();      
    }

    this.ws.onerror = function(error) {
      alert("Ошибка " + error.message);
    };
  }

  addMessages = messages =>
    this.setState(state => ({ messages: messages.concat(state.messages) }))

  submitMessage = messageString => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = { from: this.state.name, message: messageString };
    this.ws.send(JSON.stringify(message));
  }

  logOut = () => {
          localStorage.removeItem('nickname');
          this.setState(state => ({ name: '' }));
           }

  render() {
    return (
      <main className="main">
        
        <label htmlFor="name">
          Nickname:&nbsp;
          <input
            type="text"
            id={'name'}
            placeholder={'Enter your name...'}
            value={this.state.name}
            onChange={e => {
                        localStorage.setItem('nickname', e.target.value)
                        this.setState({ name: e.target.value });
                      }}
                            
          />
        </label>
        <LogOutButton logOut={this.logOut} />
        <ChatInput
          ws={this.ws}
          onSubmitMessage={messageString => this.submitMessage(messageString)}
        />
        <ChatMessageList messages={this.state.messages} />
      </main>
    )
  }
}

export default Chat;