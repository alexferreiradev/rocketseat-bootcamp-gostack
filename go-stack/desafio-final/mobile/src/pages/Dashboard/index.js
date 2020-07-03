import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Keyboard, View, Text } from 'react-native';

import api from '../../services/api';
import {
  Container,
  Image,
  SairBt,
  Encomenda,
  List,
  TitleEncomenda,
  DataStartEncomenda,
  Label,
  LabelText,
  CidadeEncomenda,
  DetalhesButton,
  DetalhesButtonText,
} from './styles';
import FooterMenu from '../../components/FooterMenu';

class Dashboard extends Component {
  constructor() {
    super();
  }

  handleDetalhes = (item) => {
    const { navigation } = this.props;

    navigation.navigate('Encomenda', { id: item.id });

    Keyboard.dismiss();
  };

  render() {
    return (
      <Container>
        <Image>
          <Text>GA</Text>
        </Image>
        <View>
          <Text>Bem vindo de volta,</Text>
          <Text>Gaspar Antunes</Text>
        </View>
        <SairBt />

        <List
          data={[
            {
              id: 1,
              status: 'entregue',
              data: '14/01/2020',
              cidade: 'Goiânia',
            },
          ]}
          keyExtractor={(encomenda) => encomenda.id}
          renderItem={({ item }) => (
            <Encomenda>
              <Image />
              <TitleEncomenda>{`Encomenda ${item.id}`}</TitleEncomenda>
              <Text>Status encomenda</Text>
              <View>
                <DataStartEncomenda>
                  <Label>Data</Label>
                  <LabelText>{item.data}</LabelText>
                </DataStartEncomenda>
                <CidadeEncomenda>
                  <Label>Cidade</Label>
                  <LabelText>{item.cidade}</LabelText>
                </CidadeEncomenda>
                <DetalhesButton
                  onPress={() => {
                    this.handleDetalhes(item);
                  }}
                >
                  <DetalhesButtonText>Ver detalhes</DetalhesButtonText>
                </DetalhesButton>
              </View>
            </Encomenda>
          )}
        />
        <FooterMenu>Entregas Meu Perfil</FooterMenu>
      </Container>
    );
  }
}
Dashboard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Dashboard;
