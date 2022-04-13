import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <header>
      <span className="logo">Instant News</span>
      <nav>
        <ul className="nav__links">
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/business">Business</Link>
          </li>
          <li><Link to="/entertainment">Entertainment</Link></li>
          <li><Link to="/health">Health</Link></li>
          <li><Link to="/science">Science</Link></li>
          <li><Link to="/sports">Sports</Link></li>
          <li><Link to="/technology">Technology</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
