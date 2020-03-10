import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
const NavBar = () => {
  return (
    <nav>
      <Link to="/"><span>HOME</span></Link>
    </nav>
  );
};

export default NavBar;
