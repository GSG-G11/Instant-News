import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/business">Business</Link>
      <Link to="/entertainment">Entertainment</Link>
      <Link to="/health">Health</Link>
      <Link to="/science">Science</Link>
      <Link to="/sports">Sports</Link>
      <Link to="/technology">Technology</Link>
    </>
  );
}

export default Nav;
