export const addPizzaToCart = (item) => {
    return {
        type:'ADD_PIZZA_TO_CART',
        payload:item
    }
};

export const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    }
}

export const removeCartItem = (itemId) => {
    return {
        type: 'REMOVE_CART_ITEM',
        itemId
    }
}

export const plusCartItem = (itemId) => {
    return {
        type: 'PLUS_CART_ITEM',
        itemId
    }
}

export const minusCartItem = (itemId) => {
    return {
        type: 'MINUS_CART_ITEM',
        itemId
    }
}


