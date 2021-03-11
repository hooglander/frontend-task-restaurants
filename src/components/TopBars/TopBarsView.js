import React, { Component } from "react";
import "./topbars.css";

export default class TopBarsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      minRating: "",
    };
  }

  setSearchQuery = (query) => {
    this.setState({ searchQuery: query });
  };

  setMinRating = (query) => {
    this.setState({ minRating: query });
  };

  render() {
    const {
      restaurantsList,
      filteredRestaurantsList,
      priceLevel,
      sort,
      fetchRestaurantsList,
      filterRestaurantsList,
      sortRestaurantsList,
    } = this.props;
    return (
      <div>
        <div className="bar">
          <div className="bar-search">
            <input
              placeholder="Search restaurants..."
              onChange={(e) => this.setSearchQuery(e.target.value)}
              onKeyPress={(e) => {
                if ("Enter" === e.key) {
                  fetchRestaurantsList(
                    this.state.searchQuery,
                    this.state.minRating
                  );
                }
              }}
            />
          </div>
          <div className="bar-search">
            {" "}
            Min Rating{" "}
            <select
              value={sort}
              onChange={(e) => this.setMinRating(e.target.value)}
            >
              <option value="">ALL</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="bar-search">
            <button
              className="button"
              onClick={() =>
                fetchRestaurantsList(
                  this.state.searchQuery,
                  this.state.minRating
                )
              }
            >
              Search!
            </button>
          </div>
        </div>

        <div className="bar">
          <div className="bar-sort">
            Sort by rating{" "}
            <select
              value={sort}
              onChange={(e) =>
                sortRestaurantsList(filteredRestaurantsList, e.target.value)
              }
            >
              <option value="highest">Highest to lowest</option>
              <option value="lowest">Lowest to highest</option>
            </select>
          </div>
          <div className="bar-filter">
            Price level{" "}
            <select
              value={priceLevel}
              onChange={(e) =>
                filterRestaurantsList(restaurantsList, e.target.value)
              }
            >
              <option value="">ALL</option>
              <option value="1">$</option>
              <option value="2">$$</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
