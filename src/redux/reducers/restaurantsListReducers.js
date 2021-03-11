import {
  FETCH_RESTAURANTS_LIST_LOADING,
  FETCH_RESTAURANTS_LIST_SUCCESS,
  FETCH_RESTAURANTS_LIST_FAIL,
  FILTER_RESTAURANTS_LIST_BY_PRICE_LEVEL,
  SORT_RESTAURANTS_LIST_BY_RATING,
} from "../types";

export const restaurantsListReducer = (state = {}, action) => {
  switch (action.type) {
    case FILTER_RESTAURANTS_LIST_BY_PRICE_LEVEL:
      return {
        ...state,
        priceLevel: action.payload.priceLevel,
        filteredRestaurantsList: action.payload.restaurants,
      };
    case SORT_RESTAURANTS_LIST_BY_RATING:
      return {
        ...state,
        sort: action.payload.sort,
        filteredRestaurantsList: action.payload.restaurants,
      };
    case FETCH_RESTAURANTS_LIST_LOADING:
      return {
        ...state,
        loading: true,
        error: "",
        restaurants: null,
        filteredRestaurantsList: null,
      };
    case FETCH_RESTAURANTS_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: "Unable to get restaurants :(",
      };
    case FETCH_RESTAURANTS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        restaurants: action.payload,
        filteredRestaurantsList: action.payload,
      };
    default:
      return state;
  }
};
