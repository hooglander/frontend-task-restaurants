import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import TopBars from "./components/TopBars/TopBars";
import SearchResults from "./components/SearchResults/SearchResults";
import Sidebar from "./components/Sidebar/Sidebar";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <img className="header-logo" src="/logo.png" alt="" />
            <p>Here be Restaurants!</p>
            <img className="header-logo" src="/logo.png" alt="" />
          </header>
          <main>
            <div className="content">
              <div className="main">
                <TopBars />
                <div className="search-results">
                  <SearchResults />
                </div>
              </div>
              <div className="sidebar">
                <Sidebar />
              </div>
            </div>
          </main>
          <footer>And here be dragons :)</footer>
        </div>
      </Provider>
    );
  }
}

export default App;
