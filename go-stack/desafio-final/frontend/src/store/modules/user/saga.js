import { call, all, takeLatest, put } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';
import { doLogin, doLogout } from './actions';

function* doLoginReq({ email, senha }) {
    console.log(email, senha);

    const res = yield call(api.post, `/login`, { email, password: senha });

    if (res.data) {
        yield put(doLogin(res.data.token));
        yield history.push('/encomendas');
    }
}

function* doLogoutReq() {
    yield put(doLogout());
    yield history.push('/');
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
