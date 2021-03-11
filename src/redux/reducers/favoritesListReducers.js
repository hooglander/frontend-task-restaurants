import { ADD_TO_FAVORITES_LIST, REMOVE_FROM_FAVORITES_LIST } from "../types";

export const favoritesListReducer = (
  state = {
    favoritesList: JSON.parse(localStorage.getItem("favoritesList") || "[]"),
  },
  action
) => {
  switch (action.type) {
    case ADD_TO_FAVORITES_LIST:
      return {
        favoritesList: action.payload.favoritesList,
      };
    case REMOVE_FROM_FAVORITES_LIST:
      return {
        favoritesList: action.payload.favoritesList,
      };
    default:
      return state;
  }
};
