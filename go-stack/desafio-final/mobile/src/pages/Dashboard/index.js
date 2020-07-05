import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
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

import { doLogoutReq } from '../../store/modules/user/actions';

function Dashboard({ navigation }) {
  const dispatch = useDispatch();
  const { id, nome } = useSelector((state) => state.user);
  const [encomendaList, setEncomendaList] = useState([]);

  function handleExit() {
    dispatch(doLogoutReq());
  }

  function handleChangeFilter(type) {
    switch (type) {
      case 'entregue': {
        fetchData('status=entregue');
        break;
      }
      case 'pendente':
        fetchData('status_ne=entregue');
        break;
    }
  }

  function handleDetalhes(item) {
    navigation.navigate('Encomenda', { id: item.id });

    Keyboard.dismiss();
  }

  async function fetchData(filter) {
    const urlReq = `/encomendas?entregadorId=${id}`;
    const urlFilter = `${urlReq}&${filter}`;
    const urlMounted = filter ? urlFilter : urlReq;
    const res = await api.get(urlMounted);
    if (res.data) {
      setEncomendaList([...res.data]);
    }
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <Container>
      <Header>
        <Image>
          <ImageText>GA</ImageText>
        </Image>
        <Welcome>
          <Text>Bem vindo de volta,</Text>
          <NameText>{nome}</NameText>
        </Welcome>
        <Icon
          name="exit-to-app"
          color="#E74040"
          size={24}
          onPress={handleExit}
        />
      </Header>

      <EntregaList>
        <ListHeader>
          <ListTitle>Entregas</ListTitle>
          <ListFilter>
            <FilterText onPress={handleChangeFilter('pendente')}>
              Pendentes
            </FilterText>
            <FilterText onPress={handleChangeFilter('entregue')}>
              Entregues
            </FilterText>
          </ListFilter>
        </ListHeader>
        <List
          data={encomendaList}
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
                    handleDetalhes(item);
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
Dashboard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Dashboard;
