import { call, all, takeLatest, put } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';
import { doLogin, doLogout } from './actions';

function* doLoginReq({ email, senha }) {
    const res = yield call(api.post, `/login`, { email, senha });

    yield put(doLogin(123));
    yield history.push('/encomendas');
    // if (res.data) {
    // }
}

function* doLogoutReq() {
    yield put(doLogout());
    yield history.push('/');
    // if (res.data) {
    // }
}

export default all([
    takeLatest('@user/login-req', doLoginReq),
    takeLatest('@user/logout-req', doLogoutReq),
]);
