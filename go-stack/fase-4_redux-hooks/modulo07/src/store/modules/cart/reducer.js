export default function cart(state = [], action) {
    switch (action.type) {
        case '@cart/add': {
            return [...state, action.payload];
        }

        default:
            return state;
    }
}
