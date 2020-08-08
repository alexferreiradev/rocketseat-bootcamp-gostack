import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// import { Container } from './styles';

function RouteWrapper({ component: Component, isPrivate = false, ...rest }) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/login" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}

export default RouteWrapper;
