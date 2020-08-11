import React from 'react';
import { Switch } from 'react-router-dom';

import RouteWrapper from './Route';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <RouteWrapper path="/" exact component={SignIn} />
      <RouteWrapper path="/register" component={SignUp} />
      <RouteWrapper path="/profile" component={Profile} />
      <RouteWrapper path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
