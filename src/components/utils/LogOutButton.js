import React from 'react';
import Button from 'react-bootstrap/Button';

const LogOutButton = ({logOut}) => (
  <Button onClick={logOut} variant="dark">Log out</Button>
)

export default LogOutButton;