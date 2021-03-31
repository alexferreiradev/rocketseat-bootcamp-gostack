import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';

import { Wrapper, WrapperContent } from './styles';

function Default({ children }) {
  return (
    <Wrapper>
      <Header />
      <WrapperContent>{children}</WrapperContent>
    </Wrapper>
  );
}

Default.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Default;
