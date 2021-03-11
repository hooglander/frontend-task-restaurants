import { connect } from "react-redux";
import { fetchRestaurantsList } from "../../redux/actions/restaurantsListActions";
import { fetchRestaurant } from "../../redux/actions/restaurantActions";
import {
  addToFavoritesList,
  removeFromFavoritesList,
} from "../../redux/actions/favoritesListActions";
import SearchResultsView from "./SearchResultsView";

const mapStateToProps = (state) => ({
  favoritesList: state.favoritesList.favoritesList,
  restaurantsList: state.restaurantsList.filteredRestaurantsList,
  restaurantsListLoading: state.restaurantsList.loading,
  restaurantsListError: state.restaurantsList.error,
  restaurant: state.restaurant.data,
  restaurantLoading: state.restaurant.loading,
  restaurantError: state.restaurant.error,
});

const mapDispatchToProps = {
  fetchRestaurant,
  fetchRestaurantsList,
  addToFavoritesList,
  removeFromFavoritesList,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsView);
