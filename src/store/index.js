import { combineReducers, createStore } from "redux";
import { compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "../Redux/reducers";

let store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
