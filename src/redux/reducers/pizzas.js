import {action} from "../actions/pizzas";
import {api} from "../../dal/api";

const initialState = {
    items: [],
    isLoaded:false
};

function pizzasReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_PIZZAS':
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            };

        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            }
    }
    return state;
}

export const getPizzas =  (sortBy,category) => async (dispatch) => {
        dispatch(action.setLoaded(false));
        let response = await api.getPizzas(sortBy,category);
        dispatch(action.setPizzas(response.data));
};

export {pizzasReducer};