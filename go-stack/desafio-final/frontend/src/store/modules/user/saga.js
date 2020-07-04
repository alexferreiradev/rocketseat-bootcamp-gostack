import { call, all, takeLatest, put } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';
import { doLogin } from './actions';

function* doLoginReq({ email, password }) {
    const res = yield call(api.post, `/login`, { email, password });

    if (res.data) {
        put(doLogin(123));
        history.push('/encomendas');
    }
}

export default all([takeLatest('@user/login-req', doLoginReq)]);
