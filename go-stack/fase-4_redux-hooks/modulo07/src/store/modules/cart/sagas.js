import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { addToCartSuccess, updateAmountSuccess } from './actions';
import { formatPrice } from '../../../util/format';

function* addToCart({ payload }) {
    const { id } = payload;
    const productFound = yield select((state) =>
        state.cart.find((p) => p.id === id)
    );

    const stockRes = yield call(api.get, `stock/${id}`);
    const stockAmount = stockRes.data.amount;
    if (stockAmount === 0) {
        toast.error('Stock indisponivel');
    }

    if (productFound) {
        if (productFound.amount >= stockAmount) {
            toast.error('Stock indisponivel');
        } else {
            yield put(updateAmountSuccess(productFound.id, 1));
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

function* updateAmountReq({ payload }) {
    const { id, amount: updateAmount } = payload;

    const amount = yield select(
        (state) => state.cart.find((i) => i.id === id).amount
    );

    const newAmount = amount + updateAmount;
    if (newAmount <= 0) {
        return;
    }

    const stockRes = yield call(api.get, `stock/${id}`);
    const stockAmount = stockRes.data.amount;
    if (stockAmount === 0) {
        toast.error('Stock indisponivel');
    } else if (newAmount > stockAmount) {
        toast.error('Stock indisponivel');
    } else {
        yield put(updateAmountSuccess(id, updateAmount));
    }
}

export default all([
    takeLatest('@cart/add-request', addToCart),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmountReq),
]);
