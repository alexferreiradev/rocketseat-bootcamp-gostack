import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, Text } from './styles';

const Input = ({ children, loading, ...rest }) => {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
};

export default Input;
