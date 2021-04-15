import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import NavigationService from '~/services/navigation';

import api from '~/services/api';

import { singInSuccess, singFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const res = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = res.data;
    if (user.provider) {
      Alert.alert('Falha', 'Usuario não é prestador');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(singInSuccess(token, user));
  } catch (err) {
    Alert.alert('Falha', 'Falha na autenticação, verifique seus dados');
    yield put(singFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password, telefone } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      telefone,
      password,
    });

    Alert.alert(
      'Sucesso',
      'Cadastro feito, faça seu login e agende com seu prestador!'
    );
    NavigationService.navigate('SignIn');
  } catch (error) {
    if (error.response.message) {
      Alert.alert('Falha', error.response.message);
    } else {
      Alert.alert(
        'Falha',
        'Falha no cadastro no servidor, entre em contato com seu prestador e informe este erro'
      );
    }
    yield put(singFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('persist/REHYDRATE', setToken),
]);
