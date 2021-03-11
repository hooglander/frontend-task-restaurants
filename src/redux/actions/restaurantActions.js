import {
  FETCH_RESTAURANT_LOADING,
  FETCH_RESTAURANT_SUCCESS,
  FETCH_RESTAURANT_FAIL,
} from "../types";

export const fetchRestaurant = (id) => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_RESTAURANT_LOADING,
    });
    const res = await fetch(`http://localhost:3000/api/restaurant/${id}`);
    const data = await res.json();
    dispatch({
      type: FETCH_RESTAURANT_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({ type: FETCH_RESTAURANT_FAIL });
  }
};
