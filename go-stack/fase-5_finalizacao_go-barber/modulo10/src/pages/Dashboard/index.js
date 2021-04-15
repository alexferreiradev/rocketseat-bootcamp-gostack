import React, { useEffect, useState } from 'react';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import api from '~/services/api';

import { Container, Title, List, EmptyText } from './styles';

const Dashboard = ({ isFocused }) => {
  const [appointments, setAppointments] = useState([]);

  async function loadAppointments() {
    const res = await api.get('/appointments');

    setAppointments(res.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadAppointments();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    const res = await api.delete(`appointments/${id}`);

    setAppointments(appointments.filter((i) => i.id !== id));
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
        <List
          data={appointments}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Appointment data={item} onCancel={() => handleCancel(item.id)} />
          )}
        />
        <EmptyText visible={appointments.length === 0}>
          Não há agendamentos
        </EmptyText>
      </Container>
    </Background>
  );
};

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
