const initialState = {
    field: ['', '', '', '', '', '', '', '', ''],
    currentPlayer: 'X',
    isGameEnded: false,
    isDraw: false,
};

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'currentPlayer':
            return {
                ...state,
                currentPlayer: (state.currentPlayer = payload),
            };
        case 'isGameEnded':
            return {
                ...state,
                isGameEnded: (state.isGameEnded = payload),
            };
        case 'isDraw':
            return {
                ...state,
                isDraw: (state.isDraw = payload),
            };
        case 'field':
            return {
                ...state,
                field: (state.field = payload),
            };
        case 'resetGame':
            return {
                ...initialState,
                currentPlayer: 'X',
            };
        default:
            return state;
    }
};
