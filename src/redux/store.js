import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { restaurantReducer } from "./reducers/restaurantReducer";
import { restaurantsListReducer } from "./reducers/restaurantsListReducers";
import { favoritesListReducer } from "./reducers/favoritesListReducers";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    restaurant: restaurantReducer,
    restaurantsList: restaurantsListReducer,
    favoritesList: favoritesListReducer,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
