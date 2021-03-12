## How to run
Prior to running the fronted, set up the [slightly modified API](https://github.com/hooglander/api-server-modified).
1. Install the latest version of [node and npm](https://nodejs.org/); skip if you have it installed already.
2. Verify that node and npm are installed by running the commands `node -v` and `npm -v`, repsectively.
3. Head to the project directory, and install dependencies by running `npm install` in the terminal.
4. Running `npm start` runs the app in http://localhost:3001

## Features added
1. A search results view that displays the list of the restaurants fetched. The fetched restaurants are based on two parameters: the search query and minimum rating.
2. A details view of each restaurant that displays more fetched information about the selected restaurant.
3. A filter that allows user to filter fetched restaurants by price level.
4. A sorter that allows user to sort fetched restaurants by rating. The filter and sorter are inclusive.
5. A favorites list which allows user to add and remove restaurants to favorites list and is saved to local storage.

## Design decisions
### Architecture
The app uses React and Redux for state management. MVP architecture is used where the presenters are automatically generated using the redux `connect()` function. I actually debated whether keeping the states at the top level and then doing prop drilling would not be detrimental for an application of such a size but ended up using a state manager anyway.
### Single-page application
Due to the number of features added, a single-page application without navigation between pages is sufficient.
### Local storage
Since saving to local storage is sufficient, all states that need to be persisted are saved to the local storage. Otherwise, a cloud-based storage/store would have been used (e.g. firebase).
### Modifying the API
I did not want to modify the API too much because I wanted to focus on the fronted. However, the `api/list` endpoint as it was did not take any parameters and as such returns the whole database. The modification is for feature #1.

## Bugs and possible improvements
1. Google Maps doesn't work now (for the details view) because I don't want to set up a billing account :)
2. Opening details view (modal) from sidebar as well.
3. Have a Google Maps in the search results view that dynamically shows the map markings based on the filtering and sorting.
4. Implementing an 'infinite search' feature where we use the 'offset' parameter of how many items we fetch from the API endpoint. For instance, fetch 10 restaurants from the API, then fetch the next 10 as user reaches the bottom.
5. Debouncing feature or 'search-as-you-go' where the application would make requests  a few seconds after the user types in a search query without making too many requests within the few seconds. However, the endpoint does not support these two last features and I don't wish to work on the backend too much; and besides, there's only 40-ish restaurants in the databse anyways.
6. Testing. Usually for larger projects I would at least do unit testing for each component and end-to-end testing simulating various user behaviours. But I decided against it because it would be less time consuming to try it myself. Of course, this is with the idea in mind that the project would not scale. Otherwise, testing would be a good idea.
