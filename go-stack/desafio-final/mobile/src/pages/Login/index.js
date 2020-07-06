import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Keyboard } from 'react-native';

import {
  Container,
  Form,
  Input,
  Logo,
  SubmitButton,
  SubmitButtonText,
} from './styles';

import { doLoginReq } from '../../store/modules/user/actions';

function Login({ navigation }) {
  const formRef = useRef(null);
  const [user] = useState({
    id: '',
  });
  console.tron.log('id');
  const dispatch = useDispatch();
  async function handleLogin(data) {
    console.tron.log('handle');
    console.tron.log('id', data);
    dispatch(doLoginReq(1));
    Keyboard.dismiss();
  }

  return (
    <Container>
      <Logo />
      <Form ref={formRef} initialData={user} onSubmit={handleLogin}>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Informe seu ID de cadastro"
          returnKeyType="send"
        />

        <SubmitButton onPress={() => formRef.current.submitForm()}>
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
