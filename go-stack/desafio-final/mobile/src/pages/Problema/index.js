import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

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
  const id = navigation.getParam('id', -1);
  const [problemaList, setProblemaList] = useState([]);

  async function fetchData() {
    const res = await api.get(`/encomenda_problemas?encomendaId=${id}`);
    if (res.data.rows) {
      setProblemaList([...res.data.rows]);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Title>{`Encomenda ${id}`}</Title>
      <View>
        {problemaList && (
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
        )}
        {problemaList.length == 0 && <Text>Não há problemas</Text>}
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
