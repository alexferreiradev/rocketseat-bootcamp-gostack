import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text } from 'react-native';

import {
  Container,
  Card,
  InfoHeader,
  InfoTitle,
  Label,
  LabelText,
  Situacao,
  EncomendaOptions,
  OptionBt,
  OptionBtText,
} from './styles';
import FooterMenu from '../../components/FooterMenu';

const Encomenda = ({ navigation, route }) => {
  navigation.setOptions({
    title: 'Visualizar problemas',
  });

  const encomenda = { id: 1 };

  return (
    <Container>
      <Card>
        <InfoHeader>
          <Icon name="local-shipping" color="#7159c1" size={24} />
          <InfoTitle>Informações da entrega</InfoTitle>
        </InfoHeader>
        <Label>Destinatário</Label>
        <LabelText>Ludwing van Beethoven</LabelText>
        <Label>Endereço de entrega</Label>
        <LabelText>Rua Bethoven</LabelText>
        <Label>Produto</Label>
        <LabelText>Yamaha Sx7</LabelText>
      </Card>
      <Card>
        <InfoHeader>
          <Icon name="today" color="#7159c1" size={24} />
          <InfoTitle>Situaçao da entrega</InfoTitle>
        </InfoHeader>
        <Label>Status</Label>
        <LabelText>Pendente</LabelText>
        <Label>Data de retirada</Label>
        <LabelText>14/01/20</LabelText>
        <Label>Data de entrega</Label>
        <LabelText>--/--/--</LabelText>
      </Card>
      <EncomendaOptions>
        <OptionBt>
          <Icon name="cancel" color="#E74040" size={20} />
          <OptionBtText>Informar problema</OptionBtText>
        </OptionBt>
        <OptionBt>
          <Icon name="info" color="#E7BA40" size={20} />
          <OptionBtText>Visualizar</OptionBtText>
        </OptionBt>
        <OptionBt>
          <Icon name="check-circle" color="#7D40E7" size={20} />
          <OptionBtText>Confirmar entrega</OptionBtText>
        </OptionBt>
      </EncomendaOptions>
      <View />
    </Container>
  );
};

Encomenda.propTypes = {
  navigation: PropTypes.shape({
    setOptions: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

export default Encomenda;
