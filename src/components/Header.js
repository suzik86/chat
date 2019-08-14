import React, { Component } from 'react';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class Header extends Component {
  render() {
    return (
      <> 
        <header>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home" className='chat-title'>
              <img
                alt=""
                src="../images/logo.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
              />
              {' My super chat'}
            </Navbar.Brand>          
          </Navbar>
        </header>         
      </>
    );
  }
}

export default Header;