import PropTypes from 'prop-types';
import React, { useState } from 'react';
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
  const [user] = useState({
    id: '',
  });
  const dispatch = useDispatch();
  async function handleLogin({ id }) {
    dispatch(doLoginReq(id));
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
