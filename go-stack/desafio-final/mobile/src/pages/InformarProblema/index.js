import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Keyboard } from 'react-native';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SubmitButtonText,
} from './styles';

import api from '../../services/api';

function InformarProblema({ navigation }) {
  const [descricao, setDescricao] = useState('');
  const idRef = useRef();
  const formRef = useRef();

  const id = navigation.getParam('id', -1);
  console.log('param: ', id);

  async function handleEnvio() {
    const problema = {
      idEncomenda: id,
      descricao,
    };
    const res = await api.post('/encomenda_problemas', problema);
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
      <Form ref={formRef} onPress={handleEnvio}>
        <FormInput
          value={descricao}
          ref={idRef}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Inclua aqui seu problema que ocorreu na entrega"
          returnKeyType="send"
          onChangeText={setDescricao}
          onSubmitEditing={() => idRef.current.focus()}
        />

        <SubmitButton onPress={() => handleEnvio()}>
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
