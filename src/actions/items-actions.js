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

export const fetchItems = (getData) => () => (dispatch) => {
  dispatch(fetchItemsRequested());
  getData()
    .then(data => dispatch(fetchItemsLoaded(data)))
    .catch(error => dispatch(fetchItemsError(error.toString())));
};