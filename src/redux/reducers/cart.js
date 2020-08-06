const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
};

const getTotalPrice = arr => arr.reduce((sum, item) => item.price + sum, 0)

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PIZZA_TO_CART': {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }
            };

            const items = Object.values(newItems).map((obj) => obj.items)
            const allPizzas = [].concat.apply([], items);
            // const arr = Object.values(newItems).flat() // ПОЧИТАТЬ!
            // Object values - создает массив из всех массивов в обьекте
            // создаем новый массив, обьединяем все массивы в один,вызываем этот массив с помощью метода apply(почитать)
            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice: getTotalPrice(allPizzas)
            }
        }
        case 'CLEAR_CART':
            return {
                ...state,
                items:{},
                totalPrice: 0,
                totalCount: 0
            }
        case 'REMOVE_CART_ITEM':
            const newItems = {
                ...state.items
            }
            const currentTotalPrice = newItems[action.itemId].totalPrice
            const currentTotalCount = newItems[action.itemId].items.length
            delete newItems[action.itemId]
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }

        case 'PLUS_CART_ITEM': {
            const newItems = [
                ...state.items[action.itemId].items,
                state.items[action.itemId].items[0]
            ];
            return {
                ...state,
                items:{
                    ...state.items,
                    [action.itemId]: {
                        items: newItems,
                        totalPrice: getTotalPrice(newItems)
                    }
                }
            }
        }

        case 'MINUS_CART_ITEM': {
            const oldItems = state.items[action.itemId].items
            const newItems = oldItems.length > 1 ? state.items[action.itemId].items.slice(1) : oldItems;
            return {
                ...state,
                items:{
                    ...state.items,
                    [action.itemId]: {
                        items: newItems,
                        totalPrice: getTotalPrice(newItems)
                    }
                }
            }
        }


    }

    return state;
}

export {cartReducer};