import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSuccess } from './actions';

function* addToCart({ payload }) {
    const res = yield call(api.get, `products/${payload.id}`);
    if (res.data) {
        yield put(addToCartSuccess(res.data));
    }
}

export default all([takeLatest('@cart/add-request', addToCart)]);
