import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Keyboard } from 'react-native';

import {
  Container,
  Form,
  FormInput,
  Logo,
  SubmitButton,
  SubmitButtonText,
} from './styles';

import { doLoginReq } from '../../store/modules/user/actions';

function Login({ navigation }) {
  const [id, setId] = useState('');
  const idRef = useRef();
  const formRef = useRef();
  // console.tron.log('id');
  const dispatch = useDispatch();

  async function handleLogin() {
    // console.tron.log('handle');
    console.tron.log('id', id);
    dispatch(doLoginReq(id));
    Keyboard.dismiss();
  }

  return (
    <Container>
      <Logo />
      <Form>
        <FormInput
          value={id}
          ref={idRef}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Informe seu ID de cadastro"
          returnKeyType="send"
          onChangeText={setId}
          onSubmitEditing={() => idRef.current.focus()}
        />

        <SubmitButton onPress={() => handleLogin()}>
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
