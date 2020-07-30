const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
};

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PIZZA_TO_CART': {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
            };
            const arr = [].concat.apply([],Object.values(newItems));
            // Object values - создает массив из всех массивов в обьекте
            // создаем новый массив, обьединяем все массивы в один,вызываем этот массив с помощью метода apply(почитать)
            return {
                ...state,
                items: newItems,
                totalCount: arr.length,
                totalPrice: arr.reduce((sum,item) => item.price + sum,0)
            }
        }
    }
    return state;
}

export {cartReducer};