import { call, all, takeLatest, put } from 'redux-saga/effects';
import api from '../../../services/api';
// import history from '../../../services/history';
import { doLogin, doLogout } from './actions';

function* doLoginReq({ id }) {
  console.tron.log('Login:', id);
  const res = yield call(api.post, '/login_entregador/', { id });

  console.tron.log('dados login', res.data);
  if (res.data) {
    yield put(doLogin(res.data.token));
    // yield history.push('/encomendas');
  }
}

function* doLogoutReq() {
  yield put(doLogout());
  // yield history.push('/');
  // if (res.data) {
  // }
}

function setToken({ payload }) {
  // console.log(payload);
  const { userId: token } = payload.user;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@user/login-req', doLoginReq),
  takeLatest('@user/logout-req', doLogoutReq),
]);
