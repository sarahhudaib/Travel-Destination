import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {

  return (
    <header>
        <div>
          <Link to="/">
            Home
          </Link>
          </div>

    </header >
  );
}