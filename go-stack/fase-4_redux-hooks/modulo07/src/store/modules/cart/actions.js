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

export function updateAmount(id, amount) {
    return {
        type: '@cart/UPDATE_AMOUNT',
        payload: {
            id,
            amount,
        },
    };
}
