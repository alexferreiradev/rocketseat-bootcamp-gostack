import React from 'react';
import PropTypes from 'prop-types';
import { Keyboard } from 'react-native';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  SubmitButtonText,
} from './styles';

import api from '../../services/api';

function InformarProblema({ navigation }) {
  const id = 1;

  async function handleEnvio({ descricao }) {
    const problema = {
      encomendaId: id,
      descricao,
    };
    const res = await api.post('/problemas', problema);
    if (res.status === 201) {
      navigation.navigate('Dashboard');
      Keyboard.dismiss();
    }
  }

  // navigation.setOptions({
  //   title: 'Informar problema',
  // });

  return (
    <Container>
      <Form onPress={handleEnvio}>
        <Input
          name="descricao"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Inclua aqui seu problema que ocorreu na entrega"
          returnKeyType="send"
        />

        <SubmitButton>
          <SubmitButtonText>Enviar</SubmitButtonText>
        </SubmitButton>
      </Form>
    </Container>
  );
}
InformarProblema.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default InformarProblema;
