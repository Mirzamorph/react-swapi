const fetchItemsRequested = () => ({
  type: 'FETCH_ITEMS_REQUEST',
});

const fetchItemsLoaded = (newItems) => ({
  type: 'FETCH_ITEMS_SUCCESS',
  payload: newItems,
});

const fetchItemsError = (error) => ({
  type: 'FETCH_ITEMS_FAILURE',
  payload: error,
});

export const selectCurrentItem = (id) => ({
  type: 'SELECT_CURRENT_ITEM',
  payload: id,
});

export const fetchItems = (getData) => () => (dispatch) => {
  dispatch(fetchItemsRequested());
  getData()
    .then((data) => dispatch(fetchItemsLoaded(data)))
    .catch((error) => dispatch(fetchItemsError(error.toString())));
};
