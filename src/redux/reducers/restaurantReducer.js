import {
  FETCH_RESTAURANT_LOADING,
  FETCH_RESTAURANT_SUCCESS,
  FETCH_RESTAURANT_FAIL,
} from "../types";

export const restaurantReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_RESTAURANT_LOADING:
      return { ...state, loading: true, error: "", data: null };
    case FETCH_RESTAURANT_FAIL:
      return {
        ...state,
        loading: false,
        error: "Unable to get restaurant details :(",
      };
    case FETCH_RESTAURANT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
    default:
      return state;
  }
};
