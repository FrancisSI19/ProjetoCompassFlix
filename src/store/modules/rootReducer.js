import { combineReducers } from "redux";

import favorite from "./favorite/reducer";
import rating from "./rating/reducer";

export default combineReducers({
  favorite,
  rating,
});
