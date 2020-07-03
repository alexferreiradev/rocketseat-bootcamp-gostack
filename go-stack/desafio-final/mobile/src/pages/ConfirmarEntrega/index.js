import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Keyboard } from 'react-native';

import { Container, ImageBackground, ImageBt, SubmitButton } from './styles';

import api from '../../services/api';

class ConfirmarEntrega extends Component {
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
    const navigation = this.props.navigation;
    navigation.setOptions({
      title: 'Confirmar Entrega',
    });

    return (
      <Container>
        <ImageBackground>
          <ImageBt />
        </ImageBackground>

        <SubmitButton onPress={this.handleEnvio}>Enviar</SubmitButton>
      </Container>
    );
  }
}
ConfirmarEntrega.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default ConfirmarEntrega;
