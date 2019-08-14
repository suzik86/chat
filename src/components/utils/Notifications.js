import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
 
class Notifications extends React.Component {
  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('New message');
          break;
        // case 'error':
        //   NotificationManager.error('Error message', 'Click me!', 5000, () => {
        //     alert('callback');
        //   });
        //   break;
        default:
        break;
      }
    };
  };
 
  render() {
    return (
      <div>
        <button className='btn btn-info'
          onClick={this.createNotification('info')}>New message
        </button>
        {/* 
        <button className='btn btn-danger'
          onClick={this.createNotification('error')}>Error
        </button> */}
 
        <NotificationContainer/>
      </div>
    );
  }
}
 
export default Notifications;