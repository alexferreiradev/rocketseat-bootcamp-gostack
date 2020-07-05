import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Keyboard } from 'react-native';

import {
  Container,
  Form,
  ImageBackground,
  ImageBt,
  SubmitButton,
  SubmitButtonText,
} from './styles';

import api from '../../services/api';

function ConfirmarEntrega({ navigation }) {
  const encomenda = {
    id: 1,
  };

  async function handleEnvio({ problema }) {
    const encomendaNew = {
      ...encomenda,
      status: 'entregue',
      dataEntrega: new Date(),
    };
    const res = await api.put('/encomendas/' + encomenda.id, encomendaNew);
    if (res.status === 200) {
      navigation.navigate('Dashboard');
      Keyboard.dismiss();
    }
  }

  navigation.setOptions({
    title: 'Confirmar Entrega',
  });

  return (
    <Container>
      <Form onPress={handleEnvio}>
        <ImageBackground>
          <ImageBt>
            <Icon name="photo-camera" size={24} color="#fff" />
          </ImageBt>
        </ImageBackground>

        <SubmitButton>
          <SubmitButtonText>Enviar</SubmitButtonText>
        </SubmitButton>
      </Form>
    </Container>
  );
}
ConfirmarEntrega.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default ConfirmarEntrega;
