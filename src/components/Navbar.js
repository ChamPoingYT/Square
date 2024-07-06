import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</li>
        <li><Link to="/profile">Profile</li>
        <li><Link to="/collaborative-square">Collaborative Squares</li>
      </ul>
    </nav>
  );
};

export default Navbar;
