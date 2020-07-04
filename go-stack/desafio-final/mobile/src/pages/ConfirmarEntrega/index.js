import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Keyboard, Text } from 'react-native';

import {
  Container,
  ImageBackground,
  ImageBt,
  SubmitButton,
  SubmitButtonText,
} from './styles';

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
          <ImageBt>
            <Icon name="photo-camera" size={24} color="#fff" />
          </ImageBt>
        </ImageBackground>

        <SubmitButton onPress={this.handleEnvio}>
          <SubmitButtonText>Enviar</SubmitButtonText>
        </SubmitButton>
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
