import React from 'react';
import { Icon } from 'react-native-vector-icons/MaterialIcons';

import { Container, TInput } from './styles';

const Input = ({ style, icon, ...rest }, ref) => {
  return (
    <Container>
      {icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.6)" />}
      <TInput {...rest} />
    </Container>
  );
};

export default Input;
