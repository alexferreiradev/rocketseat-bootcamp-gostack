import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import DateTimeInput from '~/components/DateTimeInput';
import { Container } from './styles';

const SelectDateTime = () => {
  const [date, setDate] = useState();

  return (
    <Background>
      <Container>
        <DateTimeInput date={date} onChange={setDate} />
      </Container>
    </Background>
  );
};

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o horário',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});

export default SelectDateTime;
