import React from 'react';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/restaurant.svg';

export default function Navbar() {
  return (
    <div className='navbar'>
      <NavLink to={'/'}>
        <div id='logo'>
          <img src={logo} alt="logo" />
          <p>recipe app</p>
        </div>
      </NavLink>
      <div className="navlinks">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/foods'}>Foods</NavLink>
        <NavLink to={'/cocktails'}>Cocktails</NavLink>
      </div>
    </div>
  )
}
