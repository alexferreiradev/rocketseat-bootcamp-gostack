import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { doLogoutReq } from '../../store/modules/user/actions';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  PerfilImg,
  ImageText,
  Dados,
  Label,
  LabelText,
  LogoutBt,
  LogoutBtText,
} from './styles';

function Perfil() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);

  function handleExit() {
    dispatch(doLogoutReq());
  }

  return (
    <Container>
      <PerfilImg>
        <ImageText>GA</ImageText>
      </PerfilImg>
      <Dados>
        <Label>Nome Completo</Label>
        <LabelText>{user.nome}</LabelText>
        <Label>Email</Label>
        <LabelText>{user.email}</LabelText>
        <Label>Data de cadastro</Label>
        <LabelText>{user.data}</LabelText>
      </Dados>
      <LogoutBt onPress={handleExit}>
        <LogoutBtText>Logout</LogoutBtText>
      </LogoutBt>
    </Container>
  );
}
Perfil.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

Perfil.navigationOptions = {
  tabBarLabel: 'Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="profile" size={20} color={tintColor} />
  ),
};

export default Perfil;
