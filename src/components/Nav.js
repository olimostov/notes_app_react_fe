import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
  return (
    <div className='container'>
      <header>
        <h1>Notify</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/auth/signup'>Sign Up</Link>
          <Link to='/auth/login'>Log In</Link>
        </nav>
      </header>
    </div>
  );
};
export default Nav;
