import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import {
  Container,
  Informacoes,
  ImageCaminhao,
  Label,
  LabelText,
  Situacao,
  EncomendaOptions,
} from './styles';
import FooterMenu from '../../components/FooterMenu';

const Encomenda = ({ navigation, route }) => {
  navigation.setOptions({
    title: 'Visualizar problemas',
  });

  const encomenda = { id: 1 };

  return (
    <Container>
      <Informacoes>
        <ImageCaminhao />
        <Text>Informações da entrega</Text>
        <Label>Destinatário</Label>
        <LabelText>Ludwing van Beethoven</LabelText>
        <Label>Endereço de entrega</Label>
        <LabelText>Rua Bethoven</LabelText>
        <Label>Produto</Label>
        <LabelText>Yamaha Sx7</LabelText>
      </Informacoes>
      <Situacao>
        <ImageCaminhao />
        <Text>Informações da entrega</Text>
        <Label>Status</Label>
        <LabelText>Pendente</LabelText>
        <Label>Data de retirada</Label>
        <LabelText>14/01/20</LabelText>
        <Label>Data de entrega</Label>
        <LabelText>--/--/--</LabelText>
      </Situacao>
      <EncomendaOptions>
        <Text>Informar problema</Text>
        <Text>Visualizar</Text>
        <Text>Confirmar entrega</Text>
      </EncomendaOptions>
      <View />
      <FooterMenu />
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
