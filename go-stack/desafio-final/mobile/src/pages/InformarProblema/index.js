import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Keyboard, Text } from 'react-native';

import { Container, Input, SubmitButton, SubmitButtonText } from './styles';

import api from '../../services/api';

class InformarProblema extends Component {
  constructor() {
    super();
    this.state = {
      idCadastro: '',
    };
  }

  handleEnvio = async () => {
    const { navigation } = this.props;

    navigation.navigate('Dashboard');

    Keyboard.dismiss();
  };

  render() {
    const { idCadastro } = this.state;
    const navigation = this.props.navigation;
    navigation.setOptions({
      title: 'Informar problema',
    });

    return (
      <Container>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Inclua aqui seu problema que ocorreu na entrega"
          value={idCadastro}
          onChangeText={(text) => this.setState({ idCadastro: text })}
          returnKeyType="send"
          onSubmitEditing={this.handleLogin}
        />

        <SubmitButton onPress={this.handleEnvio}>
          <SubmitButtonText>Enviar</SubmitButtonText>
        </SubmitButton>
      </Container>
    );
  }
}
InformarProblema.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default InformarProblema;
