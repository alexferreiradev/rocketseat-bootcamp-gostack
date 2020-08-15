import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

function Auth({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

Auth.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Auth;
