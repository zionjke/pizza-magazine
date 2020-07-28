export const action = {
    setPizzas(items) {
        return {
            type:'SET_PIZZAS',
            payload:items
        }
    },

    setLoaded(loaded) {
        return {
            type:'SET_LOADED',
            payload:loaded
        }
    }
};

