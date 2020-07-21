import produce from 'immer';

export default function cart(state = [], action) {
    switch (action.type) {
        case '@cart/add': {
            return produce(state, (draft) => {
                const productIndex = draft.findIndex(
                    (p) => p.id === action.payload.id
                );

                if (productIndex >= 0) {
                    draft[productIndex].amount += 1;
                } else {
                    draft.push({ ...action.payload, amount: 1 });
                }
            });
        }

        default:
            return state;
    }
}
