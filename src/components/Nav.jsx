import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <header>
      <span className="logo">Instant News</span>
      <nav>
        <ul className="nav__links">
          <li><NavLink style={({ isActive }) => (isActive ? { color: '#4facfe' } : { color: 'white' })} to="/">Home</NavLink></li>
          <li><NavLink style={({ isActive }) => (isActive ? { color: '#4facfe' } : { color: 'white' })} to="/business">Business</NavLink></li>
          <li><NavLink style={({ isActive }) => (isActive ? { color: '#4facfe' } : { color: 'white' })} to="/entertainment">Entertainment</NavLink></li>
          <li><NavLink style={({ isActive }) => (isActive ? { color: '#4facfe' } : { color: 'white' })} to="/health">Health</NavLink></li>
          <li><NavLink style={({ isActive }) => (isActive ? { color: '#4facfe' } : { color: 'white' })} to="/science">Science</NavLink></li>
          <li><NavLink style={({ isActive }) => (isActive ? { color: '#4facfe' } : { color: 'white' })} to="/sports">Sports</NavLink></li>
          <li><NavLink style={({ isActive }) => (isActive ? { color: '#4facfe' } : { color: 'white' })} to="/technology">Technology</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
