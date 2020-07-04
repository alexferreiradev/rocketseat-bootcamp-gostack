import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Keyboard, Text } from 'react-native';

import api from '../../services/api';
import {
  Container,
  Header,
  Welcome,
  NameText,
  Image,
  ImageText,
  EntregaList,
  ListHeader,
  FilterText,
  ListTitle,
  ListFilter,
  Encomenda,
  EncomendaStatus,
  StatusBox,
  StatusRowBox,
  StatusPoint,
  LinhaStatus,
  StatusText,
  InfoHeader,
  InfoTitle,
  List,
  EncomendaFooter,
  Label,
  LabelText,
  FooterBlock,
  DetalhesButton,
  DetalhesButtonText,
} from './styles';

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
        <Header>
          <Image>
            <ImageText>GA</ImageText>
          </Image>
          <Welcome>
            <Text>Bem vindo de volta,</Text>
            <NameText>Gaspar Antunes</NameText>
          </Welcome>
          <Icon name="exit-to-app" color="#E74040" size={24} />
        </Header>

        <EntregaList>
          <ListHeader>
            <ListTitle>Entregas</ListTitle>
            <ListFilter>
              <FilterText>Pendentes</FilterText>
              <FilterText>Entregues</FilterText>
            </ListFilter>
          </ListHeader>
          <List
            data={[
              {
                id: 1,
                status: 'entregue',
                data: '14/01/2020',
                cidade: 'Goiânia',
              },
              {
                id: 2,
                status: 'entregue',
                data: '14/01/2020',
                cidade: 'Goiânia',
              },
              {
                id: 3,
                status: 'entregue',
                data: '14/01/2020',
                cidade: 'Goiânia',
              },
            ]}
            keyExtractor={(encomenda) => encomenda.id}
            renderItem={({ item }) => (
              <Encomenda>
                <InfoHeader>
                  <Icon name="local-shipping" color="#7159c1" size={24} />
                  <InfoTitle>{`Encomenda ${item.id}`}</InfoTitle>
                </InfoHeader>
                <EncomendaStatus>
                  <LinhaStatus />
                  <StatusRowBox>
                    <StatusBox>
                      <StatusPoint />
                      <StatusText>Aguardando Retirada</StatusText>
                    </StatusBox>
                    <StatusBox>
                      <StatusPoint />
                      <StatusText>Retirada</StatusText>
                    </StatusBox>
                    <StatusBox>
                      <StatusPoint />
                      <StatusText>Entregue</StatusText>
                    </StatusBox>
                  </StatusRowBox>
                </EncomendaStatus>
                <EncomendaFooter>
                  <FooterBlock>
                    <Label>Data</Label>
                    <LabelText>{item.data}</LabelText>
                  </FooterBlock>
                  <FooterBlock>
                    <Label>Cidade</Label>
                    <LabelText>{item.cidade}</LabelText>
                  </FooterBlock>
                  <DetalhesButton
                    onPress={() => {
                      this.handleDetalhes(item);
                    }}
                  >
                    <DetalhesButtonText>Ver detalhes</DetalhesButtonText>
                  </DetalhesButton>
                </EncomendaFooter>
              </Encomenda>
            )}
          />
        </EntregaList>
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
