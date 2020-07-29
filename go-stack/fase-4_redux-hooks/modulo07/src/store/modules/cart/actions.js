export function addToCartRequest(product) {
    return { type: '@cart/add-request', payload: product };
}

export function addToCartSuccess(product) {
    return { type: '@cart/add-success', payload: product };
}

export function removeFromCart(id) {
    return {
        type: '@cart/remove',
        payload: id,
    };
}

export function updateAmountRequest(id, amount) {
    return {
        type: '@cart/UPDATE_AMOUNT_REQUEST',
        payload: {
            id,
            amount,
        },
    };
}

export function updateAmountSuccess(id, amount) {
    return {
        type: '@cart/UPDATE_AMOUNT_SUCCESS',
        payload: {
            id,
            amount,
        },
    };
}
