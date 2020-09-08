/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Auth from '~/pages/_layouts/auth';
import Defautl from '~/pages/_layouts/default';
import { store } from '~/store';

function RouteWrapper({ component: Component, isPrivate = false, ...rest }) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? Defautl : Auth;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
RouteWrapper.propTypes = {
  component: PropTypes.elementType.isRequired,
  isPrivate: PropTypes.bool,
};
RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
