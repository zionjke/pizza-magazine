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
            }
    }
    return state;
}

export const getPizzas =  () => async (dispatch) => {
        let response = await api.getPizzas();
        dispatch(action.setPizzas(response.data))
}

export {pizzasReducer};