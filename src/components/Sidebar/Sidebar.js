import { connect } from "react-redux";
import { removeFromFavoritesList } from "../../redux/actions/favoritesListActions";
import SidebarView from "./SidebarView";

const mapStateToProps = (state) => ({
  favoritesList: state.favoritesList.favoritesList,
});

const mapDispatchToProps = {
  removeFromFavoritesList,
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarView);
