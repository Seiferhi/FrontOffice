import { combineReducers, createStore } from "redux";

import filtersReducer from "./filters";
import announcementsReducer from "./annonces";

let reducers = combineReducers({
  filtersReducer,
  announcementsReducer
});

export default reducers;
