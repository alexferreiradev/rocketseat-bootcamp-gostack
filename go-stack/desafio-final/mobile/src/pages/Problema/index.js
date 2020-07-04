import React from 'react';
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
import FooterMenu from '../../components/FooterMenu';

const Problema = ({ navigation, route }) => {
  navigation.setOptions({
    title: 'Detalhes da encomenda',
  });

  const encomenda = { id: 1 };

  return (
    <Container>
      <Title>{`Encomenda ${encomenda.id}`}</Title>
      <View>
        <List
          data={[
            {
              id: 1,
              descricao: 'Destinatario ausente',
              data: '14/01/2020',
            },
            {
              id: 2,
              descricao: 'Destinatario ausente',
              data: '14/01/2020',
            },
          ]}
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
