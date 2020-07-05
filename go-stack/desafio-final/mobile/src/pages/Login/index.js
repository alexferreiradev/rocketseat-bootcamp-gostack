import PropTypes from 'prop-types';
import React, { useState, useRef, useEffect } from 'react';
import { Keyboard } from 'react-native';
import { useField } from '@unform/core';
import {
  Container,
  Form,
  Input,
  Logo,
  SubmitButton,
  SubmitButtonText,
} from './styles';

function Login({ navigation }) {
  const [user] = useState({
    id: '',
  });

  async function handleLogin(data) {
    navigation.navigate('Dashboard');

    Keyboard.dismiss();
  }

  return (
    <Container>
      <Logo />
      <Form initialData={user} onSubmit={handleLogin}>
        <Input
          name="id"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Informe seu ID de cadastro"
          returnKeyType="send"
        />

        <SubmitButton>
          <SubmitButtonText>Entrar no sistema</SubmitButtonText>
        </SubmitButton>
      </Form>
    </Container>
  );
}
Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Login;
