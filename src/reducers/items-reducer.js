const initialState = {
  data: [],
  currentItem: null,
  loading: false,
  error: null
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS_REQUEST':
      return {
        ...state,
        currentItem: null,
        loading: true,
        error: null
      };
    case 'FETCH_ITEMS_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      };
    case 'FETCH_ITEMS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case 'SELECT_CURRENT_ITEM':
      const id = action.payload;
      return {
        ...state,
        currentItem: state.data.find(item => item.id === id)
      };
    default:
      return state;
  }
};

export default items;