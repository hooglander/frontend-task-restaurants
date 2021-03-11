import {
  FETCH_RESTAURANTS_LIST_LOADING,
  FETCH_RESTAURANTS_LIST_SUCCESS,
  FETCH_RESTAURANTS_LIST_FAIL,
  FILTER_RESTAURANTS_LIST_BY_PRICE_LEVEL,
  SORT_RESTAURANTS_LIST_BY_RATING,
} from "../types";

export const fetchRestaurantsList = (searchQuery, minRating) => async (
  dispatch
) => {
  try {
    dispatch({
      type: FETCH_RESTAURANTS_LIST_LOADING,
    });
    const res = await fetch(
      "http://localhost:3000/api/list/?" +
        (searchQuery ? `name=${searchQuery}&` : "") +
        (minRating ? `rating=${minRating}` : "")
    );
    const data = await res.json();
    dispatch({
      type: FETCH_RESTAURANTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({ type: FETCH_RESTAURANTS_LIST_FAIL });
  }
};

export const filterRestaurantsList = (restaurantsList, priceLevel) => (
  dispatch
) => {
  dispatch({
    type: FILTER_RESTAURANTS_LIST_BY_PRICE_LEVEL,
    payload: {
      priceLevel: priceLevel,
      restaurants:
        priceLevel === ""
          ? restaurantsList
          : restaurantsList.filter(
              (x) => x.price_level === parseInt(priceLevel)
            ),
    },
  });
};

export const sortRestaurantsList = (filteredRestaurantsList, sort) => (
  dispatch
) => {
  const sortedRestaurantsList = filteredRestaurantsList.slice();
  if (sort === "highest") {
    sortedRestaurantsList.sort((a, b) => (a.rating > b.rating ? -1 : 1));
  } else {
    sortedRestaurantsList.sort((a, b) => (a.rating < b.rating ? -1 : 1));
  }
  dispatch({
    type: SORT_RESTAURANTS_LIST_BY_RATING,
    payload: {
      sort: sort,
      restaurants: sortedRestaurantsList,
    },
  });
};
