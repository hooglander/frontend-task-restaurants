import React from "react";
import Fade from "react-reveal/Fade";
import "./sidebar.css";

const SidebarView = ({ favoritesList, removeFromFavoritesList }) => {
  return (
    <div>
      {favoritesList.length === 0 ? (
        <div className="sidebar sidebar-header">
          Your favorite restaurants will show up here
        </div>
      ) : (
        <div className="sidebar sidebar-header">
          You have {favoritesList.length} restaurants in your favorites list{" "}
        </div>
      )}
      <div>
        <div className="sidebar">
          <Fade left cascade>
            <ul className="sidebar-items">
              {favoritesList.map((item) => (
                <li key={item.id}>
                  <div>
                    <img src={item.image} alt={item.title}></img>
                  </div>
                  <div>
                    <div>{item.title}</div>
                    <div className="right">
                      {item.name}
                      <button
                        className="button"
                        onClick={() => removeFromFavoritesList(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default SidebarView;
