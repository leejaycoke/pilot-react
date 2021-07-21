import { combineReducers } from "redux";
import { loginReducer } from "./auth";

const rootReducer = combineReducers({
  loginReducer,
});

export default rootReducer;
