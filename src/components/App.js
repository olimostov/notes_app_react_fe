import React from 'react';
import { Route, Switch } from 'react-router';
import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Nav from './Nav';

export const App = props => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/auth/:form' component={Auth} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </>
  );
};
