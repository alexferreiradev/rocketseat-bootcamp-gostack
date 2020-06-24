import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, SubmitButton } from './styles';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      newUser: '',
      users: [],
    };
  }

  handleAddUser() {
    const { newUser } = this.state;
    console.tron.log(newUser);
  }

  render() {
    const { users, newUser } = this.state;

    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar Usuário"
            value={newUser}
            onChange={(text) => this.setState({ newUser: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />

          <SubmitButton onPress={this.handleAddUser}>
            <Icon name="add" size={20} color="#FFF" />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

export default Main;
