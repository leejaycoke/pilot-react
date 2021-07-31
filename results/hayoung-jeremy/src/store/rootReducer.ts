import { combineReducers } from "@reduxjs/toolkit";
import { loginReducer } from "./loginSlice";
import { getUserReducer } from "./authSlice";

const rootReducer = combineReducers({
  login: loginReducer,
  getUser: getUserReducer,
});

export default rootReducer;
