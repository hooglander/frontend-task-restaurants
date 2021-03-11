import React from "react";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import checkIfRestaurantOpen from "../../helpers/checkIfRestaurantOpen";
import priceLevelToDollarSign from "../../helpers/priceLevelToDollarSign";
import promiseNoData from "../../helpers/promiseNoData";
import Map from "./MapView";
import "./details.css";

const DetailsView = ({
  restaurant,
  restaurantLoading,
  restaurantError,
  closeModal,
  isRestaurantAdded,
  addToFavoritesList,
  removeFromFavoritesList,
}) => {
  return (
    <Modal isOpen={true} onRequestClose={closeModal}>
      <button className="close-modal" onClick={closeModal}>
        X
      </button>
      {promiseNoData(restaurantLoading, restaurant, restaurantError) || (
        <Zoom>
          <div className="restaurant-details">
            <img src={restaurant.photo} alt={restaurant.name}></img>
            <div className="restaurant-details-description">
              <h1>
                <strong>{restaurant.name}</strong>
              </h1>
              <p>Rating: {restaurant.rating}</p>
              {restaurant.price_level ? (
                <p>
                  Price level: {priceLevelToDollarSign(restaurant.price_level)}
                </p>
              ) : (
                ""
              )}
              <p>{/*AS*/}</p>
              <p>Phone: {restaurant.phone_number}</p>
              <p>
                Website:{" "}
                <a
                  href={`${restaurant.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {restaurant.website}
                </a>
              </p>
              <p>
                <strong>Opening hours:</strong>
              </p>
              {restaurant.opening_hours.map((day, idx) => (
                <p key={idx}>{day}</p>
              ))}
              <h2>
                {checkIfRestaurantOpen(restaurant.opening_hours)
                  ? "Open"
                  : "Closed"}
              </h2>
              <Map />
              <div className="restaurant-wrapper">
                <button
                  className={
                    isRestaurantAdded(restaurant.id)
                      ? "button"
                      : "button primary"
                  }
                  onClick={() => {
                    addToFavoritesList(restaurant);
                    closeModal();
                  }}
                  disabled={isRestaurantAdded(restaurant.id)}
                >
                  {isRestaurantAdded(restaurant.id)
                    ? "In favorites"
                    : "Add To Favorites"}
                </button>
                {isRestaurantAdded(restaurant.id) ? (
                  <button
                    className="button primary"
                    onClick={() => removeFromFavoritesList(restaurant)}
                  >
                    Remove
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </Zoom>
      )}
    </Modal>
  );
};

export default DetailsView;
