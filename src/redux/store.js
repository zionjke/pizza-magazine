import {applyMiddleware, combineReducers, createStore} from "redux";
import {cartReducer} from "./reducers/cart";
import thunk from "redux-thunk";
import {pizzasReducer} from "./reducers/pizzas";
import {filtersReducer} from "./reducers/filters";

const rootReducer = combineReducers({
    cart: cartReducer,
    pizzas: pizzasReducer,
    filters:filtersReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk),);

export default store