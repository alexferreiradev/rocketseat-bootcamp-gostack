import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Keyboard, Text } from 'react-native';

import {
  Container,
  PerfilImg,
  Dados,
  Label,
  LabelText,
  LogoutBt,
} from './styles';

import api from '../../services/api';

class Perfil extends Component {
  constructor() {
    super();
    this.state = {
      idCadastro: '',
    };
  }

  handleLogout = async () => {};

  render() {
    return (
      <Container>
        <PerfilImg />
        <Dados>
          <Label>Nome Completo</Label>
          <LabelText>Nome Antunes</LabelText>
          <Label>Email</Label>
          <LabelText>exemplo@gmail.com</LabelText>
          <Label>Data de cadastro</Label>
          <LabelText>10/01/20</LabelText>
        </Dados>
        <LogoutBt>
          <Text>Logout</Text>
        </LogoutBt>
      </Container>
    );
  }
}
Perfil.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Perfil;
