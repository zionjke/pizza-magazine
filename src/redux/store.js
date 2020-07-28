import {applyMiddleware, combineReducers, createStore,compose} from "redux";
import {cartReducer} from "./reducers/cart";
import thunk from "redux-thunk";
import {pizzasReducer} from "./reducers/pizzas";
import {filtersReducer} from "./reducers/filters";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    cart: cartReducer,
    pizzas: pizzasReducer,
    filters:filtersReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store