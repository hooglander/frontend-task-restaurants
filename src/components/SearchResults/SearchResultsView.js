import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import DetailsView from "../Details/DetailsView";
import promiseNoData from "../../helpers/promiseNoData";
import "./searchresults.css";

const SearchResultsView = ({
  favoritesList,
  restaurantsList,
  restaurantsListLoading,
  restaurantsListError,
  restaurant,
  restaurantLoading,
  restaurantError,
  fetchRestaurant,
  fetchRestaurantsList,
  addToFavoritesList,
  removeFromFavoritesList,
}) => {
  const [restaurantSelected, setRestaurantSelected] = useState(false);
  const [addedRestaurants, setAddedRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurantsList();
    Modal.setAppElement("body");
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const addedRestaurantsIds = favoritesList.map((r) => {
      return r.id;
    });
    setAddedRestaurants(addedRestaurantsIds);
  }, [favoritesList]);

  const openModal = () => {
    setRestaurantSelected(true);
  };

  const closeModal = () => {
    setRestaurantSelected(false);
  };

  const isRestaurantAdded = (restaurantId) => {
    return addedRestaurants.includes(restaurantId) ? true : false;
  };

  return (
    promiseNoData(
      restaurantsListLoading,
      restaurantsList,
      restaurantsListError
    ) || (
      <div>
        <Fade bottom cascade>
          <ul className="restaurants-list">
            {restaurantsList.map((rest) => {
              return (
                <li key={rest.id}>
                  <div
                    className="restaurant"
                    onClick={() => {
                      openModal(rest);
                      fetchRestaurant(rest.id);
                    }}
                  >
                    <img src={rest.photo} alt={rest.name}></img>
                    <p>{rest.name}</p>
                  </div>
                  <div className="restaurant-wrapper">
                    <div>Rating: {rest.rating}</div>
                    <button
                      className={
                        isRestaurantAdded(rest.id) ? "" : "button primary"
                      }
                      onClick={() => {
                        addToFavoritesList(rest);
                        closeModal();
                      }}
                      disabled={isRestaurantAdded(rest.id)}
                    >
                      {isRestaurantAdded(rest.id)
                        ? "In favorites"
                        : "Add To Favorites"}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </Fade>
        {restaurantSelected && (
          <DetailsView
            restaurant={restaurant}
            restaurantLoading={restaurantLoading}
            restaurantError={restaurantError}
            closeModal={closeModal}
            isRestaurantAdded={isRestaurantAdded}
            addToFavoritesList={addToFavoritesList}
            removeFromFavoritesList={removeFromFavoritesList}
          />
        )}
      </div>
    )
  );
};

export default SearchResultsView;
