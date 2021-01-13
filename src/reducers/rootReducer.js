import { combineReducers } from "redux";
import auth from "./authReducer";
import message from "./messageReducer";
import post from "./postReducer";

export default combineReducers({
  auth,
  message,
  post
});