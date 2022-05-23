import { combineReducers } from "@reduxjs/toolkit";

import * as cardsDuck from "./cards";
import * as columnsDuck from "./columns";
import * as commentsDuck from "./comments";
import * as userDuck from "./user";

const rootReducer = combineReducers({
  column: columnsDuck.reducer,
  card: cardsDuck.reducer,
  comment: commentsDuck.reducer,
  user: userDuck.reducer,
});
export const actions = {
  user: userDuck.actions,
  column: columnsDuck.actions,
  card: cardsDuck.actions,
  comment: commentsDuck.actions,
};
export const selectors = {
  user: userDuck.selectors,
  column: columnsDuck.selectors,
  card: cardsDuck.selectors,
  comment: commentsDuck.selectors,
};
export default rootReducer;
