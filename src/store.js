import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers";

const arg = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
);

const store = createStore(rootReducer, arg);

export default store;