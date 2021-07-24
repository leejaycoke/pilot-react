import { combineReducers } from "@reduxjs/toolkit";
import { loginReducer } from "./loginSlice";

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
