const fetchItemsRequested = () => {
  return {
    type: 'FETCH_ITEMS_REQUEST'
  }
};

const fetchItemsLoaded = (newItems) => {
  return {
    type: 'FETCH_ITEMS_SUCCESS',
    payload: newItems
  }
};

const fetchItemsError = (error) => {
  return {
    type: 'FETCH_ITEMS_FAILURE',
    payload: error
  }
};

export const fetchItems = (swapiService) => () => (dispatch) => {
  dispatch(fetchItemsRequested());
  swapiService.fetchData('people/')
    .then(({ data }) => dispatch(fetchItemsLoaded(data.results)))
    .catch(error => dispatch(fetchItemsError(error.toString())));
};