import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { parseISO } from 'date-fns';
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
  StatusPointClear,
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
    fetchData(type);
  }

  function handleDetalhes(item) {
    console.tron.log('handle nav');
    navigation.navigate('Encomenda', { id: item.id });

    Keyboard.dismiss();
  }

  function formatDate(dateUTC) {
    const date = parseISO(dateUTC);
    return `${date.getDay()}/${date.getMonth()}/${date.getFullYear}`;
  }

  async function fetchData(filterType) {
    let url = '/entregas';
    switch (filterType) {
      case 'pendente': {
        url = '/retiradas';
        break;
      }
      default: {
        break;
      }
    }
    const urlReq = url;
    const res = await api.get(urlReq);
    if (res.data.rows) {
      // console.tron.log('dados', res.data.rows);

      setEncomendaList([...res.data.rows]);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
          onPress={() => handleExit()}
        />
      </Header>

      <EntregaList>
        <ListHeader>
          <ListTitle>Entregas</ListTitle>
          <ListFilter>
            <FilterText onPress={() => handleChangeFilter('pendente')}>
              Pendentes
            </FilterText>
            <FilterText onPress={() => handleChangeFilter('entregue')}>
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
                    {item.start_date || item.start_date ? (
                      <StatusPoint />
                    ) : (
                      <StatusPointClear />
                    )}
                    <StatusText>Aguardando Retirada</StatusText>
                  </StatusBox>
                  <StatusBox>
                    {item.start_date ? <StatusPoint /> : <StatusPointClear />}
                    <StatusText>Retirada</StatusText>
                  </StatusBox>
                  <StatusBox>
                    {item.end_date ? <StatusPoint /> : <StatusPointClear />}
                    <StatusText>Entregue</StatusText>
                  </StatusBox>
                </StatusRowBox>
              </EncomendaStatus>
              <EncomendaFooter>
                <FooterBlock>
                  <Label>Data</Label>
                  <LabelText>
                    {item.start_date && formatDate(item.start_date)}
                  </LabelText>
                </FooterBlock>
                <FooterBlock>
                  <Label>Cidade</Label>
                  <LabelText>{item.destinatario.cidade}</LabelText>
                </FooterBlock>
                <DetalhesButtonText onPress={() => handleDetalhes(item)}>
                  Ver detalhes
                </DetalhesButtonText>
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
