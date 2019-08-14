import React, { Component } from 'react';

import '../App.css';
import Chat from './Chat';
import Header from './Header';
import Notifications from './utils/Notifications';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
        <Chat />
        {/* <Notifications /> */}
      </div>
    )
  }
}
export default App;
