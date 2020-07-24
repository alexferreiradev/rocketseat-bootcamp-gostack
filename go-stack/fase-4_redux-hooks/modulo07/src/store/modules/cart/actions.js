export function addToCart(product) {
    return { type: '@cart/add', payload: product };
}

export function removeFromCart(id) {
    return {
        type: '@cart/remove',
        payload: id,
    };
}
