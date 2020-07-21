const initialState = {
    sortBy: 'popular',
    category: 0
};

function filtersReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SORT_BY':
            return {
                ...state,
                sortBy: action.payload
            };
        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.payload
            };
    }
    return state;
}

export {filtersReducer};