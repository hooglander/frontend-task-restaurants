import { ADD_TO_FAVORITES_LIST, REMOVE_FROM_FAVORITES_LIST } from "../types";

export const addToFavoritesList = (restaurant) => (dispatch, getState) => {
  const favoritesList = getState().favoritesList.favoritesList.slice();
  let alreadyExists = false;
  favoritesList.forEach((x) => {
    if (x.id === restaurant.id) {
      alreadyExists = true;
    }
  });
  if (!alreadyExists) {
    favoritesList.push({ ...restaurant });
  }
  dispatch({
    type: ADD_TO_FAVORITES_LIST,
    payload: { favoritesList },
  });
  localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
};

export const removeFromFavoritesList = (restaurant) => (dispatch, getState) => {
  const favoritesList = getState()
    .favoritesList.favoritesList.slice()
    .filter((x) => x.id !== restaurant.id);
  dispatch({
    type: REMOVE_FROM_FAVORITES_LIST,
    payload: { favoritesList },
  });
  localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
};
