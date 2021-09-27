import { combineReducers } from "redux";
import postReducer from "./posts/postReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  posts: postReducer,
  cart: cartReducer,
});

export default rootReducer;
