import React from 'react';
import { Link } from 'react-router-dom';
import { useAppState } from '../AppState';

const Nav = props => {
  const { state, dispatch } = useAppState();

  return (
    <div className='container'>
      <header>
        <h1>Notify</h1>
        <nav>
          <Link to='/'>Home</Link>
          {state.token ? null : (
            <>
              <Link to='/auth/signup'>Sign Up</Link>
              <Link to='/auth/login'>Log In</Link>
            </>
          )}
          {state.token ? (
            <div
              onClick={() => {
                dispatch({ type: 'logout' });
                props.history.push('/');
              }}
            >
              Logout
            </div>
          ) : null}
        </nav>
      </header>
    </div>
  );
};
export default Nav;
