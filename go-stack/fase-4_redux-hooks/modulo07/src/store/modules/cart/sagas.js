import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSuccess, updateAmount } from './actions';
import { formatPrice } from '../../../util/format';

function* addToCart({ payload }) {
    const { id } = payload;
    const productFound = yield select((state) =>
        state.cart.find((p) => p.id === id)
    );

    const stockRes = yield call(api.get, `stock/${id}`);
    const stockAmount = stockRes.data.amount;
    if (stockAmount === 0) {
        console.tron.warn('Stock indisponivel');
    }

    if (productFound) {
        if (productFound.amount >= stockAmount) {
            console.tron.warn('Stock indisponivel');
        } else {
            yield put(updateAmount(productFound.id, 1));
        }
    } else {
        const res = yield call(api.get, `products/${id}`);
        const { data } = res;
        if (data) {
            yield put(
                addToCartSuccess({
                    ...data,
                    amount: 1,
                    priceFormatted: formatPrice(data.price),
                })
            );
        }
    }
}

export default all([takeLatest('@cart/add-request', addToCart)]);
