import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import {
  Container,
  Title,
  ProblemaView,
  Descricao,
  Data,
  List,
} from './styles';

import api from '../../services/api';

const Problema = ({ navigation, route }) => {
  // navigation.setOptions({
  //   title: 'Detalhes da encomenda',
  // });
  const encomenda = { id: 1 };
  const [problemaList, setProblemaList] = useState([]);

  async function fetchData() {
    const res = await api.get(`/problemas?entregaId=${encomenda.id}`);
    if (res.data) {
      setProblemaList([...res.data]);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Title>{`Encomenda ${encomenda.id}`}</Title>
      <View>
        <List
          data={problemaList}
          keyExtractor={(problema) => problema.id}
          renderItem={({ item }) => (
            <ProblemaView>
              <Descricao>{item.descricao}</Descricao>
              <Data>{item.data}</Data>
            </ProblemaView>
          )}
        />
      </View>
    </Container>
  );
};

Problema.propTypes = {
  navigation: PropTypes.shape({
    setOptions: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

export default Problema;
