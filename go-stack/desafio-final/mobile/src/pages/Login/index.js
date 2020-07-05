import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import {
  Container,
  Form,
  Input,
  Logo,
  SubmitButton,
  SubmitButtonText,
} from './styles';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      idCadastro: '',
    };
  }

  handleLogin = async () => {
    const { navigation } = this.props;

    navigation.navigate('Dashboard');

    Keyboard.dismiss();
  };

  render() {
    const { idCadastro } = this.state;

    return (
      <Container>
        <Logo />
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Informe seu ID de cadastro"
            value={idCadastro}
            onChangeText={(text) => this.setState({ idCadastro: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleLogin}
          />

          <SubmitButton onPress={this.handleLogin}>
            <SubmitButtonText>Entrar no sistema</SubmitButtonText>
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Login;
