import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from'redux-thunk';
import rootReducer from "./reducers";

const arg = compose(
  applyMiddleware(thunkMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(rootReducer, arg);

export default store;