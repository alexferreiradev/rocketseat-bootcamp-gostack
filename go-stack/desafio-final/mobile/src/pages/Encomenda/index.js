import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View } from 'react-native';

import {
  Container,
  Card,
  InfoHeader,
  InfoTitle,
  Label,
  LabelText,
  EncomendaOptions,
  OptionBt,
  OptionBtText,
} from './styles';

import api from '../../services/api';

const Encomenda = ({ navigation }) => {
  // navigation.setOptions({
  //   title: 'Visualizar problemas',
  // });

  const id = navigation.getParam('id', -1);
  const [encomenda, setEncomenda] = useState({});

  async function fetchData() {
    const res = await api.get(`/encomendas/${id}`);
    if (res.data) {
      const dataEntregaFormatada = res.data.end_date
        ? res.data.end_date
        : '--/--/--';
      const dataRetiradaFormatada = res.data.start_date
        ? res.data.start_date
        : '--/--/--';
      const newData = {
        ...res.data,
        dataEntregaFormatada,
        dataRetiradaFormatada,
      };
      setEncomenda(newData);
    }
  }

  function handleOption(option) {
    switch (option) {
      case 'visualizar-problemas': {
        navigation.navigate('Problema', { id: id });
        break;
      }
      case 'informar-problema': {
        navigation.navigate('InformarProblema', { id: id });
        break;
      }
      case 'confirmar': {
        navigation.navigate('ConfirmarEntrega', { id: id });
        break;
      }
      default:
        break;
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Card>
        <InfoHeader>
          <Icon name="local-shipping" color="#7159c1" size={24} />
          <InfoTitle>Informações da entrega</InfoTitle>
        </InfoHeader>
        <Label>Destinatário</Label>
        <LabelText>{encomenda.deliveryman_id}</LabelText>
        <Label>Endereço de entrega</Label>
        <LabelText>{encomenda.recipient_id}</LabelText>
        <Label>Produto</Label>
        <LabelText>{encomenda.product}</LabelText>
      </Card>
      <Card>
        <InfoHeader>
          <Icon name="today" color="#7159c1" size={24} />
          <InfoTitle>Situaçao da entrega</InfoTitle>
        </InfoHeader>
        <Label>Status</Label>
        <LabelText>{encomenda.status}</LabelText>
        <Label>Data de retirada</Label>
        <LabelText>{encomenda.dataRetiradaFormatada}</LabelText>
        <Label>Data de entrega</Label>
        <LabelText>{encomenda.dataEntregaFormatada}</LabelText>
      </Card>
      <EncomendaOptions>
        <OptionBt onPress={() => handleOption('informar-problema')}>
          <Icon name="cancel" color="#E74040" size={20} />
          <OptionBtText>Informar problema</OptionBtText>
        </OptionBt>
        <OptionBt onPress={() => handleOption('visualizar-problemas')}>
          <Icon name="info" color="#E7BA40" size={20} />
          <OptionBtText>Visualizar</OptionBtText>
        </OptionBt>
        <OptionBt onPress={() => handleOption('confirmar')}>
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
