import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {

  return (
    <>
    <nav className='nnnnnn'>
      <Link to='/'>Home</Link>
      <br />
      <Link to='/city/:id'>FaVCity</Link>
    </nav>
    <h1 className='aaaaaa'>Travel App</h1>
  </>
  );
}