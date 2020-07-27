import produce from 'immer';

export default function cart(state = [], action) {
    switch (action.type) {
        case '@cart/add-success': {
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
        case '@cart/remove': {
            return produce(state, (draft) => {
                const { payload } = action;
                const index = draft.findIndex((i) => i.id === payload);

                if (index >= 0) {
                    draft.splice(index, 1);
                }
            });
        }
        case '@cart/UPDATE_AMOUNT': {
            return produce(state, (draft) => {
                const { id, amount } = action.payload;
                const index = draft.findIndex((i) => i.id === id);

                if (index >= 0) {
                    draft[index].amount += amount;
                    if (draft[index].amount <= 1) {
                        draft[index].amount = 1;
                    }
                }
            });
        }

        default:
            return state;
    }
}
