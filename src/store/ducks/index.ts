import { combineReducers } from "@reduxjs/toolkit";

import * as weatherDuck from "./weather";

const rootReducer = combineReducers({
  weather: weatherDuck.reducer,
});
export const actions = {
  weather: weatherDuck.actions,
};
export const selectors = {
  weather: weatherDuck.selectors,
};
export default rootReducer;
