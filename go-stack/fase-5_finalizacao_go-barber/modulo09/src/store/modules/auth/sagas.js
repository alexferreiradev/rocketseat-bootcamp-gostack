import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';
import { singInSuccess, singFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const res = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = res.data;
    if (!user.provider) {
      console.tron.error('Usuario não é prestador');
      return;
    }

    yield put(singInSuccess(token, user));
    history.push('/dashboard');
  } catch (err) {
    yield put(singFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
