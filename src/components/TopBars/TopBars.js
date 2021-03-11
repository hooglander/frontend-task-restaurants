import { connect } from "react-redux";
import TopBarsView from "./TopBarsView";
import {
  fetchRestaurantsList,
  filterRestaurantsList,
  sortRestaurantsList,
} from "../../redux/actions/restaurantsListActions";

const mapDispatchToProps = (state) => ({
  restaurantsList: state.restaurantsList.restaurants,
  filteredRestaurantsList: state.restaurantsList.filteredRestaurantsList,
  priceLevel: state.restaurantsList.priceLevel,
  sort: state.restaurantsList.sort,
});

const mapStateToProps = {
  fetchRestaurantsList,
  filterRestaurantsList,
  sortRestaurantsList,
};

export default connect(mapDispatchToProps, mapStateToProps)(TopBarsView);
