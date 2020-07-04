export default function auth(state = { logado: false }, action) {
    switch (action.type) {
        case '@user/login': {
            const { logado, userId } = action.payload;
            return { ...state, logado, userId };
        }
        default:
            return state;
    }
}
