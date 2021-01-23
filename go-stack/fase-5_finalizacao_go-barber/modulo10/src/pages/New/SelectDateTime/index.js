import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import api from '~/services/api';
import DateTimeInput from '~/components/DateTimeInput';
import { Container, HourList, Hour, Title } from './styles';

const SelectDateTime = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const provider = navigation.getParam('provider');

  useEffect(() => {
    async function loadAvailable() {
      const res = await api.get(`providers/${provider.id}/availablity`, {
        params: {
          date: date.getTime(),
        },
      });

      setHours(res.data);
    }

    loadAvailable();
  }, [date, provider.id]);

  function handleSelectHour(time) {
    navigation.navigate('Confirm', {
      provider,
      time,
    });
  }

  return (
    <Background>
      <Container>
        <DateTimeInput date={date} onChange={setDate} />

        <HourList
          data={hours}
          keyExtractor={(item) => item.time}
          renderItem={({ item }) => (
            <Hour
              enabled={item.available}
              onPress={() => handleSelectHour(item.value)}
            >
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
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
