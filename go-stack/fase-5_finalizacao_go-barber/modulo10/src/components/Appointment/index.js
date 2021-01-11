import React, { useMemo } from 'react';
import { ToachableOpacity } from 'react-native';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

const Appointment = ({ data }) => {
  return (
    <Container>
      <Left>
        <Avatar
          source={{ uri: 'https://api.adorable.io/avatar/50/rocketseat.pnj' }}
        />
        <Info>
          <Name>Alex Rabelo Ferreira</Name>
          <Time>em 3 horas</Time>
        </Info>
      </Left>

      <ToachableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={20} color="#f64c75" />
      </ToachableOpacity>
    </Container>
  );
};

export default Appointment;
