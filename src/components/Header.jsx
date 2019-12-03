import React from 'react';
import { Link } from 'react-router-dom';
import alien from './IMG_0866.jpeg';

function Header(){
  return(
    <div>
      <img src={alien}/>
      <h1>Help Queue!</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
} 

export default Header;