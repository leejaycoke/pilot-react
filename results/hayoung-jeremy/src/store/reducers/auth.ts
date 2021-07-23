import { createReducer } from "@reduxjs/toolkit";
import { LOGIN_FAIL, LOGIN_SUCCESS } from "../actions/actionTypes";

const initialState = {
  account: "",
  password: "",
};
//
// export const loginReducer = (state = initialState, action: IloginAction) => {
//   switch (action.type) {
//     case LOGIN_SUCCESS:
//       return { ...state };
//     case LOGIN_FAIL:
//       return { ...state };
//     default:
//       return state;
//   }
// };
export const loginReducer = createReducer(initialState, {
  [LOGIN_SUCCESS.type]: (state, action) => state + action.payload,
  [LOGIN_FAIL.type]: (state, action) => state + action.payload,
});
