const initialState = {
  data: [],
  loading: false,
  error: null
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS_REQUEST':
      return {
        ...state,
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
    default:
      return state;
  }
};

export default items;