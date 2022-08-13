import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { setAutoFreeze } from "immer";
import thunk from "redux-thunk";
import gamesReducer from "./Games.store";

const reducers = combineReducers({
  games: gamesReducer,
});
setAutoFreeze(false);

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});

export { store };
